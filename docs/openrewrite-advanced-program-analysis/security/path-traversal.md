---
description: Detect and prevent path traversal vulnerabilities in file system operations.
---

# Path Traversal Detection

Path traversal (also known as directory traversal) vulnerabilities allow attackers to access files and directories outside of the intended directory. By manipulating file paths with sequences like `../`, attackers can read sensitive files, overwrite critical system files, or execute unauthorized code.

## Understanding Path Traversal

Imagine a hotel where guests should only access their own rooms. Path traversal is like a guest saying "I want to go to room 101/..//..//manager-office" and gaining access to restricted areas. The `../` sequences allow "climbing up" the directory structure to reach unintended locations.

### The Attack Illustrated

```java
// VULNERABLE: Direct use of user input in file path
String filename = request.getParameter("file");
File file = new File("/var/www/uploads/" + filename);
String content = Files.readString(file.toPath());

// Attack: file = "../../../../etc/passwd"
// Resolves to: /var/www/uploads/../../../../etc/passwd
// Actual path: /etc/passwd
// Result: Exposes system password file!
```

## How OpenRewrite Detects Path Traversal

The `FindPathTraversal` recipe tracks untrusted data flowing into file system operations:

### 1. File System Sinks

```java
// File operations
new File(path)
new FileInputStream(path)
new FileOutputStream(path)
new FileReader(path)
new FileWriter(path)
new RandomAccessFile(path, mode)

// NIO operations
Paths.get(path)
Files.readString(Path)
Files.write(Path, content)
Files.delete(Path)
Files.copy(source, target)
Files.move(source, target)

// Path resolution
path.resolve(other)
path.resolveSibling(other)
```

### 2. Dangerous Path Sequences

```java
// Path traversal sequences
../           // Parent directory (Unix/Windows)
..\\          // Parent directory (Windows)
%2e%2e/       // URL encoded
%252e%252e/   // Double URL encoded
..%2f         // Mixed encoding
..%5c         // Encoded backslash

// Absolute path indicators
/             // Unix absolute path
C:\           // Windows absolute path
\\\\          // UNC path
file://       // File URL
```

## Vulnerable Patterns

### Basic File Reading

```java
// VULNERABLE - Direct concatenation
@GetMapping("/download")
public ResponseEntity<byte[]> downloadFile(@RequestParam String filename) {
    File file = new File("/app/documents/" + filename);
    byte[] content = Files.readAllBytes(file.toPath());
    return ResponseEntity.ok(content);
}
// Attack: filename = "../../../etc/shadow"
// Exposes shadow password file
```

### File Upload with Path Traversal

```java
// VULNERABLE - User controls destination
@PostMapping("/upload")
public String uploadFile(@RequestParam("file") MultipartFile file,
                        @RequestParam("path") String path) {
    File dest = new File("/uploads/" + path + "/" + file.getOriginalFilename());
    file.transferTo(dest);
    return "File uploaded";
}
// Attack: path = "../../../var/www/html"
// Uploads shell to web root!
```

### Template/View Rendering

```java
// VULNERABLE - Dynamic template selection
@GetMapping("/page")
public String renderPage(@RequestParam String template) {
    return "templates/" + template;  // Spring view resolver
}
// Attack: template = "../admin/secret"
// Renders unauthorized admin template
```

### Log File Access

```java
// VULNERABLE - Log file injection
@GetMapping("/logs")
public String viewLog(@RequestParam String date) {
    String logPath = "/var/log/app/access-" + date + ".log";
    return Files.readString(Paths.get(logPath));
}
// Attack: date = "2024-01-01.log/../../../etc/hosts"
// Reads system hosts file instead
```

### ZIP File Extraction (Zip Slip)

```java
// VULNERABLE - Zip slip attack
public void extractZip(File zipFile, File destDir) throws IOException {
    try (ZipInputStream zis = new ZipInputStream(new FileInputStream(zipFile))) {
        ZipEntry entry;
        while ((entry = zis.getNextEntry()) != null) {
            File destFile = new File(destDir, entry.getName());  // DANGEROUS!
            
            if (entry.isDirectory()) {
                destFile.mkdirs();
            } else {
                Files.copy(zis, destFile.toPath());
            }
        }
    }
}
// Attack: ZIP contains entry "../../../../etc/cron.d/evil"
// Extracts malicious cron job!
```

## Safe Patterns and Remediation

### Canonical Path Validation

Always resolve and validate canonical paths.
```java
// SAFE - Canonical path validation
@GetMapping("/download")
public ResponseEntity<byte[]> downloadFile(@RequestParam String filename) 
        throws IOException {
    File baseDir = new File("/app/documents").getCanonicalFile();
    File requestedFile = new File(baseDir, filename).getCanonicalFile();
    
    // Ensure the requested file is within the base directory
    if (!requestedFile.getPath().startsWith(baseDir.getPath())) {
        throw new SecurityException("Access denied");
    }
    
    // Additional validation
    if (!requestedFile.exists() || !requestedFile.isFile()) {
        return ResponseEntity.notFound().build();
    }
    
    byte[] content = Files.readAllBytes(requestedFile.toPath());
    return ResponseEntity.ok(content);
}
```

### Path Normalization and Validation

```java
public class PathValidator {
    private final Path baseDirectory;
    
    public PathValidator(String basePath) {
        this.baseDirectory = Paths.get(basePath).normalize().toAbsolutePath();
    }
    
    public Path validatePath(String untrustedPath) throws SecurityException {
        // Normalize the path to remove . and .. sequences
        Path normalized = Paths.get(untrustedPath).normalize();
        
        // Resolve against base directory
        Path resolved = baseDirectory.resolve(normalized).normalize();
        
        // Ensure resolved path is within base directory
        if (!resolved.startsWith(baseDirectory)) {
            throw new SecurityException("Path traversal attempt detected");
        }
        
        return resolved;
    }
    
    public boolean isPathSafe(String path) {
        try {
            validatePath(path);
            return true;
        } catch (SecurityException e) {
            return false;
        }
    }
}
```

### Whitelist Approach

When possible, use a whitelist of allowed files.
```java
@Component
public class FileAccessController {
    private static final Map<String, String> ALLOWED_FILES = Map.of(
        "report-2024", "/app/reports/2024-annual.pdf",
        "guide", "/app/docs/user-guide.pdf",
        "template", "/app/templates/invoice.html"
    );
    
    @GetMapping("/file/{id}")
    public ResponseEntity<Resource> getFile(@PathVariable String id) {
        String filePath = ALLOWED_FILES.get(id);
        if (filePath == null) {
            return ResponseEntity.notFound().build();
        }
        
        Resource resource = new FileSystemResource(filePath);
        return ResponseEntity.ok()
            .contentType(MediaType.APPLICATION_PDF)
            .body(resource);
    }
}
```

### Safe ZIP Extraction

Protect against Zip Slip attacks.
```java
public class SafeZipExtractor {
    public void extractZip(File zipFile, File destDir) throws IOException {
        // Ensure destination directory exists and get canonical path
        destDir.mkdirs();
        String canonicalDestPath = destDir.getCanonicalPath();
        
        try (ZipInputStream zis = new ZipInputStream(new FileInputStream(zipFile))) {
            ZipEntry entry;
            while ((entry = zis.getNextEntry()) != null) {
                File destFile = new File(destDir, entry.getName());
                String canonicalDestFilePath = destFile.getCanonicalPath();
                
                // Ensure file is extracted within destination directory
                if (!canonicalDestFilePath.startsWith(canonicalDestPath + File.separator)) {
                    throw new SecurityException("Zip entry outside of target dir: " + 
                                              entry.getName());
                }
                
                if (entry.isDirectory()) {
                    destFile.mkdirs();
                } else {
                    // Ensure parent directory exists
                    destFile.getParentFile().mkdirs();
                    Files.copy(zis, destFile.toPath(), 
                              StandardCopyOption.REPLACE_EXISTING);
                }
            }
        }
    }
}
```

### Input Sanitization

Remove dangerous sequences from paths.
```java
public class PathSanitizer {
    // Pattern to detect path traversal sequences
    private static final Pattern TRAVERSAL_PATTERN = Pattern.compile(
        "(\\.\\./)|(\\.\\.\\\\")|(%2e%2e)|(%252e%252e)|(\\.%2e)|(%2e\\.)"
    );
    
    // Pattern for absolute paths
    private static final Pattern ABSOLUTE_PATH = Pattern.compile(
        "^(/|[a-zA-Z]:\\\\|\\\\\\\\|file://)"
    );
    
    public static String sanitize(String path) {
        if (path == null) {
            return null;
        }
        
        // Remove null bytes
        path = path.replace("\0", "");
        
        // Reject if contains traversal sequences
        if (TRAVERSAL_PATTERN.matcher(path.toLowerCase()).find()) {
            throw new IllegalArgumentException("Path traversal detected");
        }
        
        // Reject absolute paths
        if (ABSOLUTE_PATH.matcher(path).find()) {
            throw new IllegalArgumentException("Absolute paths not allowed");
        }
        
        // Additional cleaning
        path = path.replace("\\", "/");  // Normalize separators
        path = path.replaceAll("/+", "/"); // Remove duplicate slashes
        
        // Remove leading/trailing slashes
        path = path.replaceAll("^/+", "").replaceAll("/+$", "");
        
        return path;
    }
}
```

## Advanced Protection Techniques

### Chroot/Jail Environments

Use OS-level restrictions when possible.
```java
@Component
public class SecureFileService {
    private final Path jailRoot;
    
    public SecureFileService() {
        // Set up a jail directory
        this.jailRoot = Paths.get("/app/jail").toAbsolutePath().normalize();
        
        // In production, consider using OS-level chroot or containers
        // This provides an additional security layer
    }
    
    public byte[] readFile(String filename) throws IOException {
        Path safePath = jailRoot.resolve(filename).normalize();
        
        // Double-check we're still in jail
        if (!safePath.startsWith(jailRoot)) {
            throw new SecurityException("Jailbreak attempt!");
        }
        
        // Additional OS-level protection (Linux example)
        if (System.getProperty("os.name").contains("Linux")) {
            // Set up seccomp filters or use systemd sandboxing
        }
        
        return Files.readAllBytes(safePath);
    }
}
```

### Content-Based Validation

Validate file content, not just paths.
```java
public class FileContentValidator {
    private static final int MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    
    public void validateUpload(MultipartFile file, Path destination) 
            throws IOException {
        // Size check
        if (file.getSize() > MAX_FILE_SIZE) {
            throw new IllegalArgumentException("File too large");
        }
        
        // Type check using content, not extension
        String contentType = detectContentType(file.getInputStream());
        if (!isAllowedType(contentType)) {
            throw new IllegalArgumentException("File type not allowed");
        }
        
        // Scan for malicious content
        scanForMalware(file.getInputStream());
        
        // Only after validation, save to validated path
        Files.copy(file.getInputStream(), destination, 
                  StandardCopyOption.REPLACE_EXISTING);
    }
    
    private String detectContentType(InputStream stream) throws IOException {
        // Use Apache Tika or similar for content detection
        return tika.detect(stream);
    }
}
```

## Testing Path Traversal Detection

### Unit Tests

```java
@Test
void detectsBasicPathTraversal() {
    rewriteRun(
        java("""
            import java.io.*;
            import java.nio.file.*;
            
            class FileReader {
                String readFile(String filename) throws IOException {
                    ~~>return Files.readString(Paths.get("/app/data/" + filename));
                }
            }
            """)
    );
}

@Test
void allowsSafePaths() {
    rewriteRun(
        java("""
            import java.io.*;
            import java.nio.file.*;
            
            class SafeFileReader {
                String readFile(String filename) throws IOException {
                    Path base = Paths.get("/app/data").normalize();
                    Path file = base.resolve(filename).normalize();
                    
                    if (!file.startsWith(base)) {
                        throw new SecurityException("Invalid path");
                    }
                    
                    return Files.readString(file);
                }
            }
            """)
    );
}

@Test
void detectsZipSlip() {
    rewriteRun(
        java("""
            import java.util.zip.*;
            import java.io.*;
            
            class ZipExtractor {
                void extract(ZipEntry entry, File destDir) throws IOException {
                    ~~>File destFile = new File(destDir, entry.getName());
                    // ... extraction code ...
                }
            }
            """)
    );
}
```

## Platform-Specific Considerations

### Windows Path Traversal

Windows has additional considerations.
```java
public class WindowsPathValidator {
    // Windows-specific dangerous patterns
    private static final Pattern WINDOWS_PATTERNS = Pattern.compile(
        "(\\.\\./)|(\\.\\.\\\\")|" +  // Standard traversal
        "(\\.\\.%5c)|(%5c\\.\\.)|" +  // Encoded backslash
        "(:)|(%3a)|" +                 // Drive separator
        "(\\$)|(%24)"                  // Administrative share
    );
    
    // Alternate data streams
    private static final Pattern ADS_PATTERN = Pattern.compile(":[^\\\\]+$");
    
    public void validateWindowsPath(String path) {
        // Check for traversal patterns
        if (WINDOWS_PATTERNS.matcher(path.toLowerCase()).find()) {
            throw new SecurityException("Invalid Windows path");
        }
        
        // Check for alternate data streams
        if (ADS_PATTERN.matcher(path).find()) {
            throw new SecurityException("Alternate data streams not allowed");
        }
        
        // Check for device names
        String filename = Paths.get(path).getFileName().toString();
        if (isReservedName(filename)) {
            throw new SecurityException("Reserved device name");
        }
    }
    
    private boolean isReservedName(String name) {
        String upperName = name.toUpperCase();
        return upperName.matches("^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(\\..*)?$");
    }
}
```

### URL Path Traversal

Web applications need URL-specific validation.
```java
public class UrlPathValidator {
    public boolean isUrlPathSafe(String urlPath) {
        try {
            // Decode URL encoding
            String decoded = URLDecoder.decode(urlPath, StandardCharsets.UTF_8);
            
            // Check for double encoding
            String doubleDecoded = URLDecoder.decode(decoded, StandardCharsets.UTF_8);
            if (!decoded.equals(doubleDecoded)) {
                return false; // Double encoded - suspicious
            }
            
            // Apply standard path traversal checks
            return !decoded.contains("../") && 
                   !decoded.contains("..\\") &&
                   !decoded.startsWith("/") &&
                   !decoded.matches("^[a-zA-Z]:.*");
                   
        } catch (Exception e) {
            return false; // Malformed URL
        }
    }
}
```

## Common Attack Scenarios

### Configuration File Access
```
../../../etc/passwd                    # Unix password file
..\..\..\..\windows\system32\config\sam # Windows SAM file
../../../../../../etc/shadow           # Shadow passwords
```

### Source Code Disclosure
```
../../../src/main/resources/application.properties  # App config
../WEB-INF/web.xml                                  # Web config
../../.git/config                                   # Git config
```

### Log Injection for Path Traversal
```
../../../var/log/apache2/access.log%00  # Null byte injection
../../logs/../../etc/passwd             # Double traversal
```

## Next Steps

- [Command Injection](command-injection.md) - OS command execution
- [XXE Vulnerabilities](xxe.md) - XML external entity attacks

:::danger Critical Security Issue
Path traversal can lead to complete system compromise. Always validate and sanitize file paths, use canonical path checking, and implement defense in depth with OS-level restrictions where possible.
:::
