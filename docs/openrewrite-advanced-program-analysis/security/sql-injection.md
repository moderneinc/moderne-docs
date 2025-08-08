---
description: Detect and prevent SQL injection vulnerabilities using advanced taint analysis.
---

# SQL injection detection

SQL injection remains one of the most dangerous web application vulnerabilities, consistently ranking in the OWASP Top 10 security risks. This vulnerability occurs when untrusted data is concatenated directly into SQL queries, allowing attackers to modify query logic, bypass authentication, steal sensitive data, or even take control of the database server. 

OpenRewrite's SQL injection detection uses advanced taint analysis to automatically identify these vulnerabilities in your codebase before they reach production.

## Understanding SQL injection

To understand SQL injection, imagine a library where visitors write their requests on slips of paper. A SQL injection attack is like a visitor writing "Give me 'War and Peace' AND also give me the master key to all rooms" on their slip. If the librarian blindly follows these instructions without questioning them, the visitor gains unauthorized access to areas they shouldn't reach.

In the digital world, this happens when your application constructs SQL queries by directly combining user input with SQL commands. The database, like our overly trusting librarian, executes whatever query it receives, potentially granting attackers access to your entire database.

### A simple but dangerous example

Let's see how a seemingly innocent login form can become a gateway for attackers:

```java
// VULNERABLE: User input directly concatenated into SQL query
String username = request.getParameter("username");
String password = request.getParameter("password");
String query = "SELECT * FROM users WHERE username = '" + username + 
               "' AND password = '" + password + "'";
ResultSet rs = statement.executeQuery(query);

// Attack scenario: An attacker enters "admin' --" as the username
// Resulting query: SELECT * FROM users WHERE username = 'admin' --' AND password = '...'
// 
// What happens:
// 1. The quote after 'admin' closes the username string
// 2. The -- starts a SQL comment, ignoring everything after
// 3. The password check is completely bypassed
// 4. Attacker logs in as admin without knowing the password!
```

This vulnerability has led to countless data breaches, including high-profile attacks on major corporations. The impact can range from unauthorized data access to complete system compromise.

## How OpenRewrite detects SQL injection

OpenRewrite's `FindSqlInjection` recipe employs sophisticated taint analysis to track the flow of untrusted data through your application. Think of it as a security expert who follows every piece of user input from the moment it enters your system until it reaches a database query. The analysis works in four key phases:

### 1. Identify taint sources

The first step is identifying all the places where untrusted data enters your application. These entry points are considered "taint sources" because any data flowing from them is potentially malicious:

```java
// Web application sources - the most common attack vectors
request.getParameter("id")           // URL parameters (?id=123)
request.getHeader("User-Agent")      // HTTP headers (can be manipulated)
request.getCookie("session")         // Cookies (user-controlled)
request.getPathInfo()                // URL path segments
request.getQueryString()             // Raw query string

// System and file sources
System.getenv("USER_INPUT")          // Environment variables
bufferedReader.readLine()            // File or network input
new Scanner(System.in).nextLine()    // Console input
Files.readString(userProvidedPath)   // File contents

// Database sources (when reading user-generated content)
resultSet.getString("user_comment")  // Previously stored user data
```

OpenRewrite maintains a comprehensive list of these sources and continuously updates it as new frameworks and patterns emerge.

### 2. Track taint through the program

Once untrusted data enters your application, OpenRewrite meticulously tracks it through every transformation and assignment. This is where the sophistication of taint analysis becomes apparent - the tool understands that data remains dangerous even after being processed:

```java
// Initial taint source
String id = request.getParameter("id");                      // id is TAINTED

// Taint propagates through string operations
String upperId = id.toUpperCase();                           // upperId is TAINTED
String trimmedId = upperId.trim();                           // trimmedId is TAINTED

// Taint spreads through concatenation
String query = "SELECT * FROM users WHERE id = " + trimmedId; // query is TAINTED

// Even through complex operations
StringBuilder sb = new StringBuilder();
sb.append("SELECT * FROM users WHERE id = ");
sb.append(trimmedId);                                        // sb is TAINTED
String finalQuery = sb.toString();                           // finalQuery is TAINTED

// The vulnerability is detected when tainted data reaches a sink
statement.execute(finalQuery);                               // VULNERABILITY DETECTED!
```

This tracking is crucial because attackers often rely on developers forgetting that transformed data is still dangerous. Simply converting to uppercase or trimming whitespace doesn't make malicious SQL code safe.

### 3. Recognize SQL sinks

A "sink" is where tainted data becomes dangerous - any method that sends SQL to your database. The challenge is that Java applications use many different database libraries, and the same SQL injection vulnerability looks different in each one:

```java
// The same vulnerability across different frameworks:
String query = "SELECT * FROM users WHERE id = " + userId;  // Tainted!

// In plain JDBC:
statement.executeQuery(query);                              // Vulnerability

// In Spring:
jdbcTemplate.queryForObject(query, User.class);             // Same vulnerability

// In Hibernate:
session.createSQLQuery(query);                              // Still vulnerable

// In JPA:
entityManager.createNativeQuery(query);                     // Also vulnerable
```

OpenRewrite must recognize all these different "sink" methods because modern applications often mix frameworks. Here are the main categories it tracks:

```java
// JDBC - The foundation most frameworks build on
statement.execute(query)
statement.executeQuery(query)
statement.executeUpdate(query)
connection.prepareStatement(query)     // Vulnerable when query itself is tainted

// Spring - Common in Spring Boot applications  
jdbcTemplate.query(query, ...)
jdbcTemplate.update(query, ...)
namedJdbcTemplate.query(query, ...)

// JPA/Hibernate - Enterprise applications
entityManager.createQuery(query)       // JPQL can be injected too
entityManager.createNativeQuery(query)
session.createSQLQuery(query)

// Other frameworks (MyBatis, JOOQ, etc.)
sqlSession.selectList(query)
dslContext.fetch(query)
```

The key insight: even if `prepareStatement()` sounds safe, it's still vulnerable if the query string itself contains user input. OpenRewrite tracks all these methods to ensure no SQL injection vulnerability goes undetected, regardless of which database library you use.

### 4. Understand sanitization

Not all data that starts as tainted remains dangerous. OpenRewrite recognizes when data has been properly sanitized or validated, preventing false positives:

```java
// Proper sanitization removes taint
String userInput = request.getParameter("search");
String sanitized = ESAPI.encoder().encodeForSQL(userInput); // No longer tainted
String query = "SELECT * FROM products WHERE name LIKE '%" + sanitized + "%'"; // SAFE

// Validation can also remove taint
String sortField = request.getParameter("sort");
if (!VALID_SORT_FIELDS.contains(sortField)) {
    throw new IllegalArgumentException("Invalid sort field");
}
// After validation, sortField is considered safe for this specific use
String query = "SELECT * FROM users ORDER BY " + sortField; // Recognized as validated
```

## Common SQL injection patterns

Now that we understand how detection works, let's examine the most common vulnerable patterns found in real applications. Each pattern represents a different way developers inadvertently create SQL injection vulnerabilities:

### Basic concatenation

The most straightforward and unfortunately common pattern is direct string concatenation:

```java
// VULNERABLE: Direct concatenation of user input
public User getUser(String id) {
    String query = "SELECT * FROM users WHERE id = " + id;
    return jdbcTemplate.queryForObject(query, new UserMapper());
}

// Attack scenario: Attacker sends id = "1 OR 1=1"
// Resulting query: SELECT * FROM users WHERE id = 1 OR 1=1
// 
// Impact:
// - The condition "1=1" is always true
// - The WHERE clause becomes meaningless
// - Returns ALL users instead of one
// - Attacker can extract entire user database

// Even worse attack: id = "1; DROP TABLE users; --"
// Could potentially delete your entire user table!
```

This pattern is especially dangerous because it looks so simple and innocent. Developers often think "it's just a number" but forget that attackers control what that "number" contains.

### String format injection

Many developers mistakenly believe that using `String.format()` provides some protection. It doesn't - it's just a fancier way of concatenating strings:

```java
// VULNERABLE - String.format provides NO protection against SQL injection!
public List<Order> getOrders(String status) {
    String query = String.format(
        "SELECT * FROM orders WHERE status = '%s'", 
        status
    );
    return jdbcTemplate.query(query, new OrderMapper());
}

// Attack scenario: status = "pending'; DELETE FROM orders; --"
// Resulting query: SELECT * FROM orders WHERE status = 'pending'; DELETE FROM orders; --'
//
// What happens:
// 1. First query selects orders with status 'pending'
// 2. Semicolon ends the first query
// 3. DELETE FROM orders executes, destroying all order data
// 4. -- comments out any remaining SQL
//
// Entire orders table could be deleted in production!
```

The formatting methods (`String.format()`, `MessageFormat.format()`, etc.) are for string formatting, not security. They offer zero protection against SQL injection.

### Dynamic table names

A particularly tricky scenario occurs when table or column names need to be dynamic. Since prepared statements can't parameterize table names, developers often resort to concatenation:

```java
// VULNERABLE - Table name injection is often overlooked
public int countRecords(String tableName) {
    String query = "SELECT COUNT(*) FROM " + tableName;
    return jdbcTemplate.queryForObject(query, Integer.class);
}

// Attack scenario: tableName = "users; DROP TABLE sensitive_data; --"
// Resulting query: SELECT COUNT(*) FROM users; DROP TABLE sensitive_data; --
//
// Consequences:
// 1. First query counts users (seems normal)
// 2. Second query DROPS the sensitive_data table
// 3. Critical business data permanently lost
// 4. No audit trail of the destruction

// Another attack: tableName = "users UNION SELECT password FROM admin_users--"
// Could expose admin credentials!
```

This pattern is dangerous because prepared statements can't help here - table names must be part of the SQL structure, not parameters. This requires special handling with whitelisting.

### Complex query building

Real-world applications often build queries dynamically based on multiple search criteria. This complexity makes vulnerabilities harder to spot but no less dangerous:

```java
// VULNERABLE - Dynamic query construction multiplies injection points
public List<Product> searchProducts(SearchCriteria criteria) {
    StringBuilder query = new StringBuilder("SELECT * FROM products WHERE 1=1");
    
    if (criteria.getName() != null) {
        // Each append is a potential injection point
        query.append(" AND name LIKE '%" + criteria.getName() + "%'");
    }
    if (criteria.getCategory() != null) {
        query.append(" AND category = '" + criteria.getCategory() + "'");
    }
    if (criteria.getMinPrice() != null) {
        query.append(" AND price >= " + criteria.getMinPrice());
    }
    if (criteria.getSortBy() != null) {
        query.append(" ORDER BY " + criteria.getSortBy());
    }
    
    return jdbcTemplate.query(query.toString(), new ProductMapper());
}

// Attack through multiple vectors:
// name = "'; UPDATE products SET price = 0.01; --"
// Result: All products now cost 1 cent!
//
// category = "electronics' UNION SELECT username, password, email FROM users--"
// Result: User credentials exposed in product listing!
//
// sortBy = "price; DELETE FROM audit_logs; --"
// Result: Audit trail destroyed, covering attacker's tracks!
```

The complexity of dynamic query building creates multiple injection points, and attackers only need one to succeed. Each conditional branch adds another potential vulnerability.

## Safe patterns and remediation

Now that we've seen the dangers, let's explore how to write SQL queries safely. The good news is that preventing SQL injection is straightforward when you follow established patterns:

### Use prepared statements

Prepared statements (also called parameterized queries) are the gold standard defense against SQL injection. They work by separating SQL logic from data, making it impossible for attackers to inject SQL commands:

```java
// SAFE - Using prepared statement with positional parameters
public User getUser(String id) {
    // The ? is a parameter placeholder, NOT string concatenation
    String query = "SELECT * FROM users WHERE id = ?";
    
    // The id value is sent separately from the SQL structure
    return jdbcTemplate.queryForObject(query, new Object[]{id}, new UserMapper());
}

// Why this is safe:
// 1. SQL structure is fixed: "SELECT * FROM users WHERE id = ?"
// 2. User input is sent as data, not as part of the SQL
// 3. Database knows ? is data, not SQL commands
// 4. Even if id = "1 OR 1=1", it's treated as a literal string

// SAFE - Using named parameters for better readability
public List<Order> getOrders(String status, String customerId) {
    String query = "SELECT * FROM orders WHERE status = :status AND customer_id = :customerId";
    
    MapSqlParameterSource params = new MapSqlParameterSource()
        .addValue("status", status)        // Safely bound as data
        .addValue("customerId", customerId); // Safely bound as data
        
    return namedJdbcTemplate.query(query, params, new OrderMapper());
}

// SAFE - Complex queries with multiple parameters
public List<Product> searchProducts(SearchCriteria criteria) {
    StringBuilder query = new StringBuilder(
        "SELECT * FROM products WHERE price BETWEEN :minPrice AND :maxPrice"
    );
    MapSqlParameterSource params = new MapSqlParameterSource();
    params.addValue("minPrice", criteria.getMinPrice());
    params.addValue("maxPrice", criteria.getMaxPrice());
    
    if (criteria.getName() != null) {
        query.append(" AND name LIKE :name");
        params.addValue("name", "%" + criteria.getName() + "%");
    }
    
    if (criteria.getCategory() != null) {
        query.append(" AND category = :category");
        params.addValue("category", criteria.getCategory());
    }
    
    return namedJdbcTemplate.query(query.toString(), params, new ProductMapper());
}
```

### Use query builders

Modern frameworks provide type-safe query builders that make SQL injection impossible while improving code maintainability:

```java
// SAFE - Using JPA Criteria API (type-safe queries)
public List<User> findUsers(String name) {
    CriteriaBuilder cb = entityManager.getCriteriaBuilder();
    CriteriaQuery<User> query = cb.createQuery(User.class);
    Root<User> user = query.from(User.class);
    
    // The query is built programmatically, not through string concatenation
    query.select(user)
         .where(cb.equal(user.get("name"), name)); // name is safely parameterized
         
    return entityManager.createQuery(query).getResultList();
}

// Benefits:
// 1. Compile-time type checking
// 2. No string concatenation possible
// 3. IDE autocompletion support
// 4. Refactoring-safe (renaming fields updates queries)

// SAFE - Using JOOQ for type-safe SQL
public List<Product> searchProducts(String category, BigDecimal minPrice) {
    return create.selectFrom(PRODUCTS)
                 .where(PRODUCTS.CATEGORY.eq(category))      // Type-safe comparison
                 .and(PRODUCTS.PRICE.greaterOrEqual(minPrice)) // Type-safe numeric comparison
                 .orderBy(PRODUCTS.NAME.asc())
                 .fetch();
}

// SAFE - Using QueryDSL
public List<Order> findRecentOrders(String customerId, LocalDate since) {
    QOrder order = QOrder.order;
    return queryFactory.selectFrom(order)
                       .where(order.customerId.eq(customerId)
                          .and(order.orderDate.after(since)))
                       .fetch();
}

// These builders make it virtually impossible to create SQL injection vulnerabilities
// because SQL is generated from strongly-typed method calls, not string manipulation
```

### Validate and sanitize

Sometimes you need dynamic SQL elements that can't be parameterized (like table names or ORDER BY columns). In these cases, strict validation with whitelisting is essential:

```java
// SAFER - Whitelist validation for dynamic SQL elements
private static final Set<String> ALLOWED_TABLES = Set.of("users", "orders", "products");
private static final Set<String> ALLOWED_SORT_FIELDS = Set.of("name", "created_date", "price");

public int countRecords(String tableName) {
    // Strict validation against whitelist
    if (!ALLOWED_TABLES.contains(tableName)) {
        throw new IllegalArgumentException("Invalid table name: " + tableName);
    }
    
    // Table name is now safe, but still parameterize other values
    String query = "SELECT COUNT(*) FROM " + tableName + " WHERE active = ?";
    return jdbcTemplate.queryForObject(query, new Object[]{true}, Integer.class);
}

public List<Product> getSortedProducts(String sortField, String direction) {
    // Validate sort field against whitelist
    if (!ALLOWED_SORT_FIELDS.contains(sortField)) {
        throw new IllegalArgumentException("Invalid sort field");
    }
    
    // Validate direction is exactly ASC or DESC
    if (!"ASC".equals(direction) && !"DESC".equals(direction)) {
        throw new IllegalArgumentException("Direction must be ASC or DESC");
    }
    
    // Now safe to use in query
    String query = "SELECT * FROM products ORDER BY " + sortField + " " + direction;
    return jdbcTemplate.query(query, new ProductMapper());
}

// KEY PRINCIPLE: Always use whitelisting (allowing only known-good values)
// Never use blacklisting (trying to remove dangerous characters) - it's unreliable!
```

## Advanced detection features

OpenRewrite's SQL injection detection goes beyond simple pattern matching. It employs sophisticated program analysis techniques that understand the nuances of how data flows through complex applications:

### Field-sensitive analysis

Real applications pass data through objects, and OpenRewrite precisely tracks which fields contain tainted data:

```java
public class UserRequest {
    private String userId;      // Tracking this field separately
    private String userName;    // Tracking this field separately
    private String email;       // Tracking this field separately
}

// OpenRewrite tracks the taint status of each field independently
UserRequest req = new UserRequest();
req.setUserId(request.getParameter("id"));               // req.userId is TAINTED
req.setUserName(sanitize(request.getParameter("name"))); // req.userName is CLEAN (sanitized)
req.setEmail("admin@example.com");                       // req.email is CLEAN (constant)

// Analysis precisely identifies which field causes vulnerability
String query1 = "SELECT * FROM users WHERE id = " + req.getUserId();       // VULNERABLE!
String query2 = "SELECT * FROM users WHERE name = '" + req.getUserName() + "'"; // SAFE
String query3 = "SELECT * FROM users WHERE email = '" + req.getEmail() + "'";   // SAFE

// This precision reduces false positives and helps developers understand
// exactly which data needs sanitization
```

### Inter-procedural analysis

Modern applications have deep call stacks, and vulnerabilities often span multiple methods. OpenRewrite tracks taint across method boundaries to catch these complex vulnerabilities:

```java
public class UserController {
    private UserService userService;
    
    @GetMapping("/user")
    public User getUser(@RequestParam String id) {
        // Taint starts here with request parameter
        return userService.findUserById(id);  // Taint flows into method call
    }
}

@Service
public class UserService {
    private UserDao userDao;
    
    public User findUserById(String id) {
        // OpenRewrite knows 'id' is tainted from the controller
        String processedId = preprocessId(id);  // Taint flows through
        return userDao.findUser(processedId);   // Still tainted
    }
    
    private String preprocessId(String id) {
        return id.trim().toUpperCase();  // Transformations don't remove taint
    }
}

@Repository
public class UserDao {
    public User findUser(String id) {
        // Even 3 layers deep, OpenRewrite detects the vulnerability
        String query = "SELECT * FROM users WHERE id = " + id;  // VULNERABLE!
        return jdbcTemplate.queryForObject(query, new UserMapper());
    }
}

// The analysis understands:
// 1. Request parameter in controller is tainted
// 2. Taint flows through service layer
// 3. Transformations in preprocessId don't sanitize
// 4. Vulnerability occurs in DAO layer
// 5. Complete taint path is reported for debugging
```

### Path-sensitive detection

Not all code paths are equally dangerous. OpenRewrite's path-sensitive analysis understands that vulnerabilities may only exist under certain conditions:

```java
public class ConditionalQueryBuilder {
    
    // Path-sensitive: vulnerability depends on execution path
    public User getUser(String userId, boolean useCache) {
        if (useCache) {
            // This path is safe - no SQL execution
            return cache.get(userId);
        } else {
            // This path has a vulnerability
            String query = "SELECT * FROM users WHERE id = " + userId;  // VULNERABLE
            return jdbcTemplate.queryForObject(query, new UserMapper());
        }
    }
    
    // More complex path sensitivity
    public List<Product> searchProducts(String keyword, UserRole role) {
        String query;
        
        if (role == UserRole.ADMIN) {
            // Admins get unfiltered results - but still vulnerable!
            query = "SELECT * FROM products WHERE name LIKE '%" + keyword + "%'";  // VULNERABLE
        } else if (role == UserRole.CUSTOMER) {
            // Customers get filtered results - also vulnerable!
            query = "SELECT * FROM products WHERE visible = true AND name LIKE '%" + keyword + "%'";  // VULNERABLE
        } else {
            // Guests use safe prepared statement
            return jdbcTemplate.query(
                "SELECT * FROM products WHERE public = true AND name LIKE ?",
                new Object[]{"%" + keyword + "%"},
                new ProductMapper()
            );  // SAFE
        }
        
        return jdbcTemplate.query(query, new ProductMapper());
    }
}
```

## Recipe configuration

Now let's see how to integrate OpenRewrite's SQL injection detection into your build process:

### Basic usage

```yaml
# In rewrite.yml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.example.SecurityScan
description: Comprehensive security scanning for our application
recipeList:
  - org.openrewrite.analysis.java.security.FindSqlInjection
```

### With custom sources and sinks

Every application is unique. You can extend the recipe to recognize your application's specific patterns:

```java
// Create a custom recipe for your application's specific needs
public class CustomSqlInjectionRecipe extends FindSqlInjection {
    
    @Override
    protected SqlInjectionSpec createSpec() {
        return new SqlInjectionSpec() {
            
            @Override
            public boolean isSource(J.MethodInvocation method) {
                String methodName = method.getSimpleName();
                
                // Add your custom input sources
                if ("getCustomInput".equals(methodName)) {
                    return true;  // Your custom input method
                }
                if ("readFromMessageQueue".equals(methodName)) {
                    return true;  // Message queue data is untrusted
                }
                if ("parseWebhookPayload".equals(methodName)) {
                    return true;  // Webhook data is untrusted
                }
                
                // Don't forget to include standard sources
                return super.isSource(method);
            }
            
            @Override
            public boolean isSink(Tree tree) {
                if (tree instanceof J.MethodInvocation) {
                    J.MethodInvocation method = (J.MethodInvocation) tree;
                    String methodName = method.getSimpleName();
                    
                    // Add your custom SQL execution methods
                    if ("executeCustomQuery".equals(methodName)) {
                        return true;  // Your custom query executor
                    }
                    if ("runDynamicReport".equals(methodName)) {
                        return true;  // Dynamic reporting engine
                    }
                    
                    // Check for your custom DAO methods
                    if (method.getSelect() != null) {
                        JavaType.Method methodType = method.getMethodType();
                        if (methodType != null && 
                            methodType.getDeclaringType().getFullyQualifiedName()
                                .equals("com.example.dao.CustomDao")) {
                            return true;  // All CustomDao methods are sinks
                        }
                    }
                }
                
                // Include standard sinks
                return super.isSink(tree);
            }
            
            @Override
            public boolean isSanitizer(J.MethodInvocation method) {
                String methodName = method.getSimpleName();
                
                // Recognize your custom sanitization methods
                if ("sanitizeSqlInput".equals(methodName)) {
                    return true;  // Your sanitization method
                }
                if ("validateAndEscape".equals(methodName)) {
                    return true;  // Your validation method
                }
                
                return super.isSanitizer(method);
            }
        };
    }
}
```

## Testing and validation

Testing your SQL injection detection is crucial to ensure it catches vulnerabilities in your codebase:

### Unit tests

Write tests to verify that the recipe correctly identifies vulnerabilities and doesn't produce false positives:

```java
@Test
void detectsBasicSqlInjection() {
    rewriteRun(
        java("""
            import javax.servlet.http.HttpServletRequest;
            import java.sql.Statement;
            
            class UserController {
                void getUser(HttpServletRequest request, Statement stmt) throws Exception {
                    String id = request.getParameter("id");
                    ~~>stmt.executeQuery("SELECT * FROM users WHERE id = " + id);
                }
            }
            """)
    );
}

@Test
void allowsPreparedStatements() {
    rewriteRun(
        java("""
            import java.sql.Connection;
            import java.sql.PreparedStatement;
            
            class UserDao {
                User getUser(String id, Connection conn) throws Exception {
                    PreparedStatement ps = conn.prepareStatement("SELECT * FROM users WHERE id = ?");
                    ps.setString(1, id);
                    return mapResultSet(ps.executeQuery());
                }
            }
            """)
    );
}
```

## Handling false positives

While OpenRewrite's analysis is sophisticated, static analysis can't always understand the full context of your code. Here are scenarios where safe code might be incorrectly flagged and how to handle them:

### Complex validation patterns

Sometimes your validation logic might be too complex for static analysis to understand:

```java
// Input is validated but analysis might not recognize it
public List<User> getUsers(String sortField) {
    // This validation makes it safe, but static analysis might not understand
    if (!Arrays.asList("name", "email", "created").contains(sortField)) {
        throw new IllegalArgumentException();
    }
    
    // This is actually safe, but might be flagged
    String query = "SELECT * FROM users ORDER BY " + sortField;
    
    // Better approach: use annotation or explicit whitelist
    @SuppressWarnings("SqlInjection")
    return jdbcTemplate.query(query, new UserMapper());
}
```

## Next steps

Now that you understand SQL injection detection, explore related security analyses:

* [Command Injection](./command-injection.md) - Similar taint analysis for OS command execution
* [LDAP Injection](./ldap-injection.md) - Protecting directory service queries
* [XSS Detection](./xss.md) - Finding cross-site scripting vulnerabilities
* [Path Traversal](./path-traversal.md) - Preventing directory traversal attacks

:::warning Security Best Practices
Remember that automated detection is just one layer of defense. A comprehensive security strategy includes:

* **Secure coding standards**: Enforce prepared statements as the default
* **Code reviews**: Human review catches logic flaws automation might miss
* **Security testing**: Dynamic testing complements static analysis
* **Least privilege**: Database users should have minimal necessary permissions
* **Monitoring**: Detect and respond to attacks that reach production
* **Regular updates**: Keep frameworks and libraries patched

Defense in depth means no single security measure is relied upon entirely.
:::
