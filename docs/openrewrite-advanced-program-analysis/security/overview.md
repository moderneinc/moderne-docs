---
description: Find and fix security vulnerabilities using OpenRewrite's advanced program analysis.
---

# Security analysis overview

OpenRewrite's security analysis recipes help you automatically find security vulnerabilities in Java applications. These recipes leverage advanced program analysis techniques including taint analysis, control flow analysis, and data flow analysis to identify security issues with high precision and low false positive rates.

## Understanding security analysis

Security vulnerabilities often arise when untrusted data flows into sensitive operations without proper validation or sanitization. Think of your application as a building with multiple entry points (user inputs) and secure rooms (sensitive operations). Security analysis ensures that anyone entering through public doors can't reach secure rooms without proper authorization and screening.

## Categories of security issues

OpenRewrite detects several categories of security vulnerabilities, each requiring different detection strategies and remediation approaches.

### Injection vulnerabilities

Injection attacks occur when untrusted data is interpreted as code or commands. SQL injection happens when user input becomes part of database queries, potentially allowing attackers to read sensitive data or modify your database. Command injection is similar but affects system commands, potentially giving attackers control over your server. LDAP injection targets directory services, while XPath and XQuery injection exploit XML processing. All these vulnerabilities share a common pattern: data and code get mixed together, allowing attackers to inject their own commands.

### Web vulnerabilities

Web applications face unique challenges because they interact directly with untrusted users through browsers. Cross-Site Scripting (XSS) occurs when user input appears in HTML without proper encoding, allowing attackers to inject JavaScript that runs in other users' browsers. Path traversal vulnerabilities let attackers access files outside intended directories by manipulating file paths with sequences like "../". XML External Entity (XXE) attacks exploit XML parsers that process external references, potentially exposing local files or enabling server-side request forgery.

### Data protection issues

Protecting sensitive data requires careful handling throughout its lifecycle. Personal Identifiable Information (PII) can leak through URLs that get logged, cached, or shared inadvertently. Storing sensitive data like social security numbers or credit card information without encryption violates both security best practices and regulatory requirements. Information disclosure through verbose error messages or debug logs can provide attackers with valuable reconnaissance data about your system's internals.

### Cryptographic vulnerabilities

Cryptographic weaknesses can undermine your entire security architecture. With the advent of quantum computing, many current encryption algorithms like RSA and Elliptic Curve Cryptography will become vulnerable to attack. Organizations must identify and migrate quantum-vulnerable cryptographic implementations to post-quantum algorithms. Beyond quantum threats, improper use of cryptography such as weak key generation, insecure random number generation, or use of deprecated algorithms can expose sensitive data to compromise.

## How security analysis works

Security analysis in OpenRewrite follows a systematic approach:

### 1. Source identification

First, we identify where untrusted data enters the application:

```java
// Common sources of untrusted data
String userInput = request.getParameter("name");        // Web parameters
String header = request.getHeader("User-Agent");        // HTTP headers
String cookie = request.getCookies()[0].getValue();     // Cookies
String envVar = System.getenv("USER_DATA");             // Environment
String fileContent = Files.readString(userPath);        // User files
```

### 2. Taint propagation

Next, we track how this untrusted data flows through the application:

```java
String input = request.getParameter("id");     // TAINTED
String copy = input;                           // TAINTED (assignment)
String concat = "ID: " + input;                // TAINTED (string concat)
String upper = input.toUpperCase();            // TAINTED (method call)
```

### 3. Sink detection

After that, we identify dangerous operations where tainted data could cause vulnerabilities:

```java
// SQL sink - could cause SQL injection
statement.execute("SELECT * FROM users WHERE id = " + input);

// HTML sink - could cause XSS
response.getWriter().write("<h1>Hello " + input + "</h1>");

// File sink - could cause path traversal
new File("/data/" + input).delete();
```

### 4. Sanitizer recognition

Lastly, we recognize when data has been properly sanitized so we don't flag code unnecessarily:

```java
// Input is sanitized, no longer dangerous
String safe = ESAPI.encoder().encodeForSQL(input);
statement.execute("SELECT * FROM users WHERE id = '" + safe + "'");
```

## Understanding results

Security recipes mark vulnerable code with detailed information:

```java
// Example marked SQL injection
statement.execute("SELECT * FROM users WHERE id = " + userId);
// ^--- SQL injection vulnerability: untrusted data flows to SQL query
//      Source: request.getParameter("id") at line 42
//      Consider using prepared statements or parameterized queries
```

Each finding includes:

* **Location**: Where the vulnerability occurs
* **Type**: The specific vulnerability (SQL injection, XSS, etc.)
* **Source**: Where the tainted data originated
* **Severity**: Risk level (High, Medium, Low)
* **Remediation**: How to fix the issue

## Next steps

Explore specific security recipes in detail:

* [SQL Injection Detection](./sql-injection.md)
* [Cross-Site Scripting Prevention](./xss.md)
* [Command Injection Analysis](./command-injection.md)
* [Path Traversal Detection](./path-traversal.md)
* [LDAP Injection Finding](./ldap-injection.md)
* [XXE Vulnerability Detection](./xxe.md)
* [PII Protection](./pii-protection.md)
* [Post-Quantum Cryptography Readiness](./post-quantum-cryptography.md)

:::tip
Start with `FindSecurityVulnerabilities` to run all security checks, then dive into specific categories based on your application's risk profile.
:::
