---
description: Learn how taint analysis tracks untrusted data through programs to identify security vulnerabilities
---

# Introduction to Taint Analysis

Imagine tracking a drop of colored dye through a water system. Once you add the dye at any input point, you can see exactly where it flows through all the pipes and connections. You need to ensure the dyed water doesn't reach certain outlets (like drinking fountains) unless it first passes through a purification system. Taint analysis does exactly this for data in software systems, tracking potentially unsafe data as it flows through your code.

Taint analysis is a specialized form of data flow analysis that tracks potentially dangerous or sensitive data as it flows through a program. It's one of the most powerful techniques for finding security vulnerabilities automatically.

## The Security Challenge

Modern applications constantly handle untrusted data. Web applications process user input from forms, URLs, and cookies. APIs receive data from external systems. Mobile apps handle data from sensors and user interactions. Any of this data could be malicious.

The challenge is that dangerous data rarely causes problems immediately. Instead, it flows through the application, gets stored in variables, passes through method calls, and eventually reaches a sensitive operation. By then, it's hard to remember that the data was originally untrusted.

Consider this seemingly innocent code.
```java
public void greetUser(HttpServletRequest request, HttpServletResponse response) {
    String name = request.getParameter("name");
    String message = "Hello, " + name + "!";
    response.getWriter().write("<h1>" + message + "</h1>");
}
```

This code has a cross-site scripting (XSS) vulnerability. If an attacker provides `<script>alert('XSS')</script>` as the name, that JavaScript will execute in victims' browsers. The problem isn't obvious because the dangerous data travels through multiple variables before reaching the dangerous operation.

## Core Concepts

Taint analysis tracks data through three key components: sources, sinks, and sanitizers.

### Sources: Where the Dye Enters

Sources are program points where untrusted or sensitive data enters the system. Think of them as the input points where colored dye is added to the water system.

Common sources of untrusted data include.
```java
// Web parameters - could contain anything
String userInput = request.getParameter("search");

// HTTP headers - controlled by the client
String userAgent = request.getHeader("User-Agent");

// File contents - might be tampered with
String config = Files.readString(Path.of(uploadedFile));

// Database values - might contain previously stored attacks
String comment = resultSet.getString("user_comment");

// Network data - from untrusted sources
String apiResponse = httpClient.execute(request).getBody();
```

Sources can also be sensitive data that shouldn't leak.
```java
// Passwords and credentials
String password = user.getPassword();

// Personal information
String ssn = customer.getSocialSecurityNumber();

// Cryptographic keys
byte[] secretKey = keyStore.getKey("api-key");
```

### Sinks: Critical Outlets

Sinks are sensitive operations where tainted data could cause problems. These are like critical water outlets (drinking fountains, medical equipment) where you absolutely don't want dyed water to flow unless it's been purified first.

Common security-critical sinks include.
```java
// SQL injection sink
statement.executeQuery("SELECT * FROM users WHERE id = " + userId);

// Command injection sink
Runtime.getRuntime().exec("ping " + hostname);

// XSS sink
response.getWriter().write("<div>" + userContent + "</div>");

// Path traversal sink
new File("/uploads/" + filename).delete();

// LDAP injection sink
context.search("cn=" + username, null);

// Log injection sink
logger.info("User logged in: " + username);
```

Each type of sink has specific dangers. SQL sinks can lead to data breaches. Command execution sinks can compromise the entire server. XSS sinks can attack other users.

### Sanitizers: Purification Systems

Sanitizers are operations that neutralize tainted data, making it safe for use in sinks. They're like water purification systems that remove the dye or any harmful properties before the water reaches critical outlets.

Effective sanitizers are specific to the type of sink.
```java
// SQL sanitization: parameterized queries
PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM users WHERE id = ?");
pstmt.setString(1, userId);  // Safe - parameter binding prevents injection

// XSS sanitization: HTML encoding
String safe = HtmlUtils.htmlEscape(userInput);  // Converts < to &lt; etc.
response.getWriter().write("<div>" + safe + "</div>");  // Now safe

// Command sanitization: validation
if (hostname.matches("^[a-zA-Z0-9.-]+$")) {  // Only safe characters
    Runtime.getRuntime().exec("ping " + hostname);
}

// Path sanitization: canonicalization and validation
File file = new File(baseDir, filename).getCanonicalFile();
if (file.getPath().startsWith(baseDir.getPath())) {  // Ensure within base directory
    file.delete();
}
```

:::warning Not All Sanitizers Are Equal
A common mistake is using the wrong sanitizer for the sink. HTML encoding prevents XSS but won't stop SQL injection. URL encoding prevents some attacks but not others. Always match the sanitizer to the specific sink.
:::

## How Taint Analysis Works

Taint analysis extends data flow analysis with the concept of "taintedness" - a property that flows with the data.

### Taint Propagation

When tainted data flows through operations, the taint usually spreads to the results.
```java
String name = request.getParameter("name");      // name is tainted (from source)
String upper = name.toUpperCase();               // upper is tainted (propagated)
String message = "Hello, " + upper;              // message is tainted (concatenation)
StringBuilder sb = new StringBuilder(message);   // sb is tainted (construction)
String final = sb.toString();                    // final is tainted (conversion)
```

The analysis must understand how different operations propagate taint. String concatenation propagates taint from any operand. Method calls might propagate taint depending on their semantics. Array and collection operations need special handling.

### Field Sensitivity

OpenRewrite's taint analysis is field-sensitive by default, meaning it tracks taint separately for different fields of objects.
```java
User user1 = new User();
user1.name = request.getParameter("name");    // user1.name is tainted
user1.id = generateId();                      // user1.id is NOT tainted

User user2 = new User();
user2.name = "Admin";                         // user2.name is NOT tainted
user2.id = request.getParameter("id");        // user2.id is tainted

// Analysis knows exactly which fields are tainted
```

This precision is crucial for reducing false positives. Without field sensitivity, any tainted field would contaminate the entire object, leading to numerous spurious warnings.

### Inter-procedural Analysis

Real vulnerabilities often span multiple methods. Taint analysis must track data as it flows through method calls.
```java
public void handleRequest(HttpServletRequest request) {
    String input = request.getParameter("search");  // Source
    String processed = processQuery(input);         // Flows through method
    executeSearch(processed);                       // Eventually reaches sink
}

private String processQuery(String query) {
    return query.trim().toLowerCase();              // Taint propagates
}

private void executeSearch(String query) {
    String sql = "SELECT * FROM products WHERE name LIKE '%" + query + "%'";
    statement.executeQuery(sql);                    // Sink: SQL injection!
}
```

The analysis must connect the source in `handleRequest` to the sink in `executeSearch`, even though they're in different methods.

## Common Vulnerability Patterns

Understanding common patterns helps you recognize vulnerabilities in code reviews and write better taint specifications.

### SQL Injection

The classic injection vulnerability occurs when untrusted data is concatenated into SQL queries.
```java
// Vulnerable
String query = "SELECT * FROM users WHERE username = '" + username + 
               "' AND password = '" + password + "'";
ResultSet rs = statement.executeQuery(query);

// Attack: username = "admin' --"
// Results in: SELECT * FROM users WHERE username = 'admin' --' AND password = '...'
// The -- comments out the password check!

// Safe: Parameterized query
PreparedStatement pstmt = conn.prepareStatement(
    "SELECT * FROM users WHERE username = ? AND password = ?");
pstmt.setString(1, username);
pstmt.setString(2, password);
ResultSet rs = pstmt.executeQuery();
```

### Cross-Site Scripting (XSS)

XSS occurs when untrusted data is included in HTML without proper encoding.
```java
// Vulnerable: Reflected XSS
String search = request.getParameter("q");
response.getWriter().write("You searched for: " + search);

// Attack: q = <script>steal(document.cookie)</script>

// Safe: HTML encode
String search = request.getParameter("q");
String safe = HtmlUtils.htmlEscape(search);
response.getWriter().write("You searched for: " + safe);

// Also vulnerable: Stored XSS
String comment = request.getParameter("comment");
database.save(comment);  // Stored without sanitization
// ... later ...
String saved = database.load();
response.getWriter().write(saved);  // XSS when displayed
```

### Command Injection

When untrusted data is used in system commands.
```java
// Vulnerable
String fileName = request.getParameter("file");
Process p = Runtime.getRuntime().exec("cat /logs/" + fileName);

// Attack: file = "innocent.log; rm -rf /"

// Safe: Validate or use APIs that don't invoke shells
if (fileName.matches("^[a-zA-Z0-9_-]+\\.log$")) {
    Process p = Runtime.getRuntime().exec(new String[] {"cat", "/logs/" + fileName});
}

// Better: Use Java APIs instead of shell commands
String content = Files.readString(Paths.get("/logs", fileName));
```

### Path Traversal

When untrusted data is used in file paths.
```java
// Vulnerable
String fileName = request.getParameter("file");
File file = new File("/uploads/" + fileName);
file.delete();

// Attack: file = "../../etc/passwd"

// Safe: Canonicalize and validate
File file = new File("/uploads", fileName).getCanonicalFile();
if (!file.getPath().startsWith("/uploads/")) {
    throw new SecurityException("Path traversal attempt");
}
file.delete();
```

:::info Defense in Depth
Even with taint analysis, follow defense-in-depth principles:
1. Validate input at trust boundaries
2. Use safe APIs that prevent injection by design
3. Apply appropriate encoding/escaping for the context
4. Use least privilege principles
5. Monitor for suspicious patterns
:::

## Writing Effective Taint Specifications

To use taint analysis effectively, you need to specify what constitutes sources, sinks, and sanitizers for your application.

### Identifying Sources

Look for:
- External input points (web parameters, files, network)
- Data from untrusted systems (external APIs, user databases)
- Sensitive data that shouldn't leak (passwords, keys, PII)

### Identifying Sinks

Consider:
- Operations that interpret strings as code (SQL, OS commands, scripts)
- Output operations that could leak data (HTTP responses, logs, files)
- Security-sensitive operations (authentication, authorization)

### Identifying Sanitizers

Recognize:
- Validation that ensures data matches safe patterns
- Encoding functions that neutralize special characters
- APIs that separate data from code (prepared statements, template engines)

## Next Steps

Ready to put taint analysis to work? Explore these topics:

- [Implementing Custom Taint Specifications](custom-taint-specs.md) - Define sources, sinks, and sanitizers for your application
- [Built-in Security Recipes](security-recipes.md) - Use pre-built analyses for common vulnerabilities
- [Advanced Taint Analysis Patterns](advanced-patterns.md) - Handle complex propagation and indirect flows
- [Tuning Taint Analysis](tuning-guide.md) - Balance precision and performance

:::tip Start Small
Begin with one vulnerability type (like SQL injection) in a small codebase. Once you understand how taint flows through your application, expand to other vulnerability types and larger scopes.
:::

## Further Reading

For more on secure coding and vulnerability patterns:
- [OWASP Top 10](https://owasp.org/www-project-top-ten/) - Most critical web application security risks
- [CWE/SANS Top 25](https://cwe.mitre.org/top25/) - Most dangerous software weaknesses
- [CERT Secure Coding Standards](https://wiki.sei.cmu.edu/confluence/display/seccode) - Language-specific security guidelines