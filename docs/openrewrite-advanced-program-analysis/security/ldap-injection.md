---
description: Detect and prevent LDAP injection vulnerabilities in directory service queries
---

# LDAP Injection Detection

LDAP (Lightweight Directory Access Protocol) injection vulnerabilities occur when untrusted data is incorporated into LDAP queries without proper sanitization. Attackers can modify query logic to bypass authentication, extract sensitive directory information, or modify directory entries.

## Understanding LDAP Injection

Think of LDAP like a company phone directory. Normally, you search for "John in Sales." But LDAP injection is like tricking the directory to show you "Everyone's salaries and passwords" instead. The attacker manipulates your search to reveal information they shouldn't access.

### LDAP Query Basics

LDAP uses a filter syntax with special characters.
```java
// Normal LDAP filter
"(&(uid=john)(department=sales))"  // Find user 'john' in 'sales' department

// Special characters that enable injection
( ) & | ! = ~ * \ NUL

// Malicious filter after injection
"(&(uid=*)(password=*))"  // Returns all users with passwords!
```

## How OpenRewrite Detects LDAP Injection

The `FindLdapInjection` recipe tracks untrusted data flowing into LDAP query construction:

### 1. LDAP Query Sinks

```java
// JNDI LDAP queries
DirContext ctx = new InitialDirContext();
ctx.search(baseDN, filter, searchControls);

// Spring LDAP
LdapTemplate ldapTemplate = new LdapTemplate();
ldapTemplate.search(query, mapper);
ldapTemplate.authenticate(query, password);

// UnboundID LDAP SDK
LDAPConnection connection = new LDAPConnection();
connection.search(baseDN, scope, filter);

// Apache Directory LDAP API
connection.search(searchRequest);
```

### 2. Common Attack Patterns

```java
// Authentication bypass
username = "*)(uid=*))(|(uid=*";
// Results in: (&(uid=*)(uid=*))(|(uid=*)(password=secret))
// The (&(uid=*)(uid=*)) is always true!

// Information disclosure  
search = "john)(|(password=*";
// Results in: (uid=john)(|(password=*))
// Returns entries where password exists

// Wildcard injection
name = "*";
// Results in: (cn=*)
// Returns all entries!
```

## Vulnerable Patterns

### Basic Authentication Bypass

```java
// VULNERABLE - Direct string concatenation
@PostMapping("/login")
public boolean authenticate(String username, String password) {
    String filter = "(&(uid=" + username + ")(password=" + password + "))";
    
    NamingEnumeration results = ctx.search("ou=users,dc=company,dc=com", 
                                          filter, 
                                          new SearchControls());
    return results.hasMore();
}
// Attack: username = "admin)(&(uid=admin))"
// Filter becomes: (&(uid=admin)(&(uid=admin))(password=...))
// Password check is bypassed!
```

### Search Injection

```java
// VULNERABLE - User-controlled search
@GetMapping("/search")
public List<User> searchUsers(@RequestParam String name) {
    String filter = "(cn=" + name + ")";
    
    return ldapTemplate.search(
        "ou=users,dc=company,dc=com",
        filter,
        new UserAttributesMapper()
    );
}
// Attack: name = "*)(objectClass=*"
// Returns all objects in directory!
```

### Attribute Injection

```java
// VULNERABLE - Multiple injection points
@PostMapping("/updatePhone")
public void updatePhoneNumber(String uid, String phone) {
    String dn = "uid=" + uid + ",ou=users,dc=company,dc=com";
    
    Attributes attrs = new BasicAttributes();
    attrs.put("telephoneNumber", phone);
    
    ctx.modifyAttributes(dn, DirContext.REPLACE_ATTRIBUTE, attrs);
}
// Attack: uid = "admin,ou=users,dc=company,dc=com,uid=dummy"
// Modifies admin's phone instead of intended user!
```

### Complex Filter Injection

```java
// VULNERABLE - Complex query building
@GetMapping("/advancedSearch")
public List<User> advancedSearch(SearchCriteria criteria) {
    StringBuilder filter = new StringBuilder("(&");
    
    if (criteria.getDepartment() != null) {
        filter.append("(department=").append(criteria.getDepartment()).append(")");
    }
    if (criteria.getTitle() != null) {
        filter.append("(title=").append(criteria.getTitle()).append(")");
    }
    if (criteria.getLocation() != null) {
        filter.append("(location=").append(criteria.getLocation()).append(")");
    }
    
    filter.append(")");
    
    return ldapTemplate.search(BASE_DN, filter.toString(), userMapper);
}
// Attack: department = "sales)(|(uid=admin)(uid=*"
// Can extract admin info or all users!
```

## Safe Patterns and Remediation

### Use Parameterized Filters

The safest approach is using parameterized LDAP filters.
```java
// SAFE - Using Spring LDAP Filter
import org.springframework.ldap.filter.*;

@GetMapping("/search")
public List<User> searchUsers(@RequestParam String username) {
    // Build filter safely
    Filter filter = new EqualsFilter("uid", username);
    
    return ldapTemplate.search(
        BASE_DN,
        filter.encode(),  // Properly escaped
        new UserAttributesMapper()
    );
}

// SAFE - Complex filters with proper encoding
@PostMapping("/authenticate")
public boolean authenticate(String username, String password) {
    AndFilter filter = new AndFilter();
    filter.and(new EqualsFilter("uid", username));
    filter.and(new EqualsFilter("userPassword", password));
    
    return ldapTemplate.authenticate(BASE_DN, filter.encode(), password);
}
```

### LDAP Encoding Functions

When parameterized queries aren't available, properly encode special characters.
```java
public class LdapEncoder {
    // Characters that must be escaped in LDAP filters
    private static final Map<Character, String> ESCAPE_MAP = Map.of(
        '\\', "\\5c",
        '*', "\\2a",
        '(', "\\28",
        ')', "\\29",
        '\0', "\\00",
        '/', "\\2f"
    );
    
    public static String encodeForFilter(String input) {
        if (input == null) {
            return null;
        }
        
        StringBuilder encoded = new StringBuilder();
        for (char c : input.toCharArray()) {
            String escape = ESCAPE_MAP.get(c);
            if (escape != null) {
                encoded.append(escape);
            } else {
                encoded.append(c);
            }
        }
        return encoded.toString();
    }
    
    // SAFE - Using encoding
    public List<User> searchSafely(String username) {
        String safeUsername = encodeForFilter(username);
        String filter = "(&(objectClass=user)(uid=" + safeUsername + "))";
        
        return ldapTemplate.search(BASE_DN, filter, userMapper);
    }
}
```

### DN Encoding

Distinguished Names (DNs) require different encoding.
```java
// SAFE - Proper DN construction
import javax.naming.ldap.LdapName;
import javax.naming.ldap.Rdn;

@PostMapping("/updateUser")
public void updateUser(String uid, Attributes newAttrs) {
    try {
        // Build DN safely
        LdapName dn = new LdapName("ou=users,dc=company,dc=com");
        dn.add(new Rdn("uid", uid));  // Automatically escapes special chars
        
        ctx.modifyAttributes(dn.toString(), DirContext.REPLACE_ATTRIBUTE, newAttrs);
    } catch (InvalidNameException e) {
        throw new IllegalArgumentException("Invalid user ID");
    }
}
```

### Input Validation

Validate input before building queries.
```java
public class LdapValidator {
    // Whitelist safe characters for common fields
    private static final Pattern SAFE_USERNAME = Pattern.compile("^[a-zA-Z0-9._-]+$");
    private static final Pattern SAFE_EMAIL = Pattern.compile("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
    
    public static void validateUsername(String username) {
        if (username == null || !SAFE_USERNAME.matcher(username).matches()) {
            throw new IllegalArgumentException("Invalid username format");
        }
        
        // Additional business rules
        if (username.length() < 3 || username.length() > 20) {
            throw new IllegalArgumentException("Username must be 3-20 characters");
        }
    }
    
    public static void validateSearchTerm(String term) {
        // Reject wildcards if not allowed
        if (term.contains("*") || term.contains("?")) {
            throw new IllegalArgumentException("Wildcards not allowed in search");
        }
        
        // Reject LDAP special characters
        if (term.matches(".*[()&|!=~\\\\].*")) {
            throw new IllegalArgumentException("Special characters not allowed");
        }
    }
}
```

## Advanced LDAP Security Patterns

### Query Builders with Validation

Create safe query builders that validate and encode.
```java
public class SafeLdapQueryBuilder {
    private final List<Filter> filters = new ArrayList<>();
    
    public SafeLdapQueryBuilder addEquals(String attribute, String value) {
        validateAttribute(attribute);
        filters.add(new EqualsFilter(attribute, value));
        return this;
    }
    
    public SafeLdapQueryBuilder addLike(String attribute, String value) {
        validateAttribute(attribute);
        // Encode wildcards in value
        String encoded = value.replace("*", "\\2a").replace("?", "\\3f");
        filters.add(new LikeFilter(attribute, encoded));
        return this;
    }
    
    public SafeLdapQueryBuilder addPresent(String attribute) {
        validateAttribute(attribute);
        filters.add(new PresentFilter(attribute));
        return this;
    }
    
    public String build() {
        if (filters.isEmpty()) {
            throw new IllegalStateException("No filters added");
        }
        
        if (filters.size() == 1) {
            return filters.get(0).encode();
        }
        
        AndFilter and = new AndFilter();
        filters.forEach(and::and);
        return and.encode();
    }
    
    private void validateAttribute(String attribute) {
        // Whitelist allowed attributes
        Set<String> allowed = Set.of("uid", "cn", "mail", "department", "title");
        if (!allowed.contains(attribute)) {
            throw new IllegalArgumentException("Invalid attribute: " + attribute);
        }
    }
}
```

### Preventing Blind LDAP Injection

Detect timing-based attacks.
```java
@Component
public class LdapSecurityMonitor {
    private static final int THRESHOLD_MS = 1000;
    
    public <T> T executeWithMonitoring(Supplier<T> ldapOperation, String operation) {
        long start = System.currentTimeMillis();
        
        try {
            T result = ldapOperation.get();
            long duration = System.currentTimeMillis() - start;
            
            if (duration > THRESHOLD_MS) {
                // Possible blind injection attempt using time-based detection
                log.warn("Slow LDAP operation detected: {} took {}ms", operation, duration);
                alertSecurityTeam(operation, duration);
            }
            
            return result;
        } catch (Exception e) {
            // Log and analyze exceptions that might indicate injection attempts
            if (isInjectionAttempt(e)) {
                alertSecurityTeam(operation, e);
            }
            throw e;
        }
    }
    
    private boolean isInjectionAttempt(Exception e) {
        String message = e.getMessage();
        return message != null && (
            message.contains("Bad search filter") ||
            message.contains("Invalid DN syntax") ||
            message.contains("Unbalanced parenthesis")
        );
    }
}
```

## Testing LDAP Injection Detection

### Unit Tests

```java
@Test
void detectsBasicLdapInjection() {
    rewriteRun(
        java("""
            import javax.naming.directory.*;
            
            class LdapAuth {
                void authenticate(String user, String pass, DirContext ctx) throws Exception {
                    String filter = "(uid=" + user + ")";
                    ~~>ctx.search("dc=example,dc=com", filter, new SearchControls());
                }
            }
            """)
    );
}

@Test
void allowsSafeLdapQuery() {
    rewriteRun(
        java("""
            import org.springframework.ldap.filter.*;
            
            class SafeLdap {
                void search(String username, LdapTemplate template) {
                    Filter filter = new EqualsFilter("uid", username);
                    template.search("dc=example,dc=com", filter.encode(), mapper);
                }
            }
            """)
    );
}

@Test
void detectsComplexFilterInjection() {
    rewriteRun(
        java("""
            class LdapSearch {
                String buildFilter(String dept, String location) {
                    ~~>return "(&(department=" + dept + ")(location=" + location + "))";
                }
            }
            """)
    );
}
```

## Common LDAP Injection Scenarios

### Authentication Bypass

```java
// Vulnerable login
username: admin)(&(objectClass=*)
password: anything

// Resulting filter: (&(uid=admin)(&(objectClass=*))(password=anything))
// The (&(objectClass=*)) is always true, short-circuiting the password check
```

### Information Extraction

```java
// Search injection to extract all emails
search: *)(mail=*;

// Resulting filter: (cn=*)(mail=*)
// Returns all entries with email addresses
```

### Privilege Escalation

```java
// Modifying group membership
groupName: admins)(member=uid=attacker,ou=users,dc=com;

// Adds attacker to admins group through injection
```

## Performance and Security Monitoring

### Query Logging

```java
@Aspect
@Component
public class LdapQueryLogger {
    @Around("@annotation(LdapOperation)")
    public Object logLdapQuery(ProceedingJoinPoint joinPoint) throws Throwable {
        String query = extractQuery(joinPoint);
        
        // Log for security analysis
        log.info("LDAP Query: {}", sanitizeForLogging(query));
        
        // Check for suspicious patterns
        if (containsSuspiciousPatterns(query)) {
            securityLog.warn("Suspicious LDAP query detected: {}", query);
        }
        
        return joinPoint.proceed();
    }
    
    private boolean containsSuspiciousPatterns(String query) {
        return query.contains("*") && query.contains("password") ||
               query.contains(")(") && query.contains("|") ||
               query.matches(".*\\)\\s*\\(\\s*\\|.*");
    }
}
```

## Integration with Directory Services

### Active Directory Specific Concerns

```java
// AD-specific attributes that need protection
Set<String> SENSITIVE_AD_ATTRS = Set.of(
    "userPassword",
    "unicodePwd",
    "msDS-UserPasswordExpiryTimeComputed",
    "memberOf",
    "adminCount"
);

// Prevent extraction of sensitive AD attributes
public void validateAdQuery(String filter) {
    for (String attr : SENSITIVE_AD_ATTRS) {
        if (filter.toLowerCase().contains(attr.toLowerCase())) {
            throw new SecurityException("Access to sensitive attribute denied");
        }
    }
}
```

## Next Steps

- [SQL Injection](sql-injection.md) - Similar injection pattern for databases
- [XPath Injection](xpath-injection.md) - XML query injection
- [Command Injection](command-injection.md) - OS command injection

:::warning Security Best Practice
Always use parameterized LDAP filters or proper encoding functions. Never concatenate user input directly into LDAP queries. Consider implementing query logging and monitoring for suspicious patterns.
:::
