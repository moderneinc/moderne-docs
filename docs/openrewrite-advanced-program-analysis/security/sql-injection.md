---
description: Detect and prevent SQL injection vulnerabilities using advanced taint analysis.
---

# SQL Injection Detection

SQL injection remains one of the most dangerous web application vulnerabilities. It occurs when untrusted data is concatenated directly into SQL queries, allowing attackers to modify query logic, bypass authentication, steal data, or even take control of the database server.

## Understanding SQL injection

Imagine a library where visitors write their requests on slips of paper. A SQL injection is like a visitor writing "Give me 'War and Peace' AND also give me the master key to all rooms" on their slip. If the librarian blindly follows these instructions, the visitor gains unauthorized access.

### A simple example

```java
// VULNERABLE: User input directly in query
String username = request.getParameter("username");
String password = request.getParameter("password");
String query = "SELECT * FROM users WHERE username = '" + username + 
               "' AND password = '" + password + "'";
ResultSet rs = statement.executeQuery(query);

// Attack: username = "admin' --"
// Resulting query: SELECT * FROM users WHERE username = 'admin' --' AND password = '...'
// The -- comments out the password check!
```

## How OpenRewrite detects SQL injection

The `FindSqlInjection` recipe uses taint analysis to track untrusted data from sources to SQL sinks:

### 1. Identifying taint sources

```java
// Common sources of untrusted data
request.getParameter("id")          // URL parameters
request.getHeader("User-Agent")     // HTTP headers  
request.getCookie("session")        // Cookies
System.getenv("USER_INPUT")         // Environment variables
bufferedReader.readLine()           // User input
new Scanner(System.in).nextLine()   // Console input
```

### 2. Tracking through the program

The analysis follows data through all transformations.
```java
String id = request.getParameter("id");        // id is TAINTED
String upperId = id.toUpperCase();             // upperId is TAINTED
String query = "SELECT * FROM users WHERE id = " + upperId;  // query is TAINTED
statement.execute(query);                       // VULNERABILITY!
```

### 3. Recognizing SQL sinks

The recipe identifies various SQL execution methods.
```java
// JDBC methods
statement.execute(query)
statement.executeQuery(query)
statement.executeUpdate(query)
connection.prepareStatement(query)  // When query is tainted
connection.prepareCall(query)

// JPA/Hibernate
entityManager.createQuery(query)
entityManager.createNativeQuery(query)
session.createSQLQuery(query)

// Spring JDBC
jdbcTemplate.query(query, ...)
jdbcTemplate.update(query, ...)
```

## Common SQL injection patterns

### Basic concatenation

```java
// VULNERABLE
public User getUser(String id) {
    String query = "SELECT * FROM users WHERE id = " + id;
    return jdbcTemplate.queryForObject(query, new UserMapper());
}

// Attack: id = "1 OR 1=1"
// Result: Returns all users!
```

### String format injection

```java
// VULNERABLE - String.format doesn't help!
public List<Order> getOrders(String status) {
    String query = String.format(
        "SELECT * FROM orders WHERE status = '%s'", 
        status
    );
    return jdbcTemplate.query(query, new OrderMapper());
}

// Attack: status = "'; DELETE FROM orders; --"
```

### Dynamic table names

```java
// VULNERABLE - Table name injection
public int countRecords(String tableName) {
    String query = "SELECT COUNT(*) FROM " + tableName;
    return jdbcTemplate.queryForObject(query, Integer.class);
}

// Attack: tableName = "users; DROP TABLE sensitive_data; --"
```

### Complex query building

```java
// VULNERABLE - Dynamic query construction
public List<Product> searchProducts(SearchCriteria criteria) {
    StringBuilder query = new StringBuilder("SELECT * FROM products WHERE 1=1");
    
    if (criteria.getName() != null) {
        query.append(" AND name LIKE '%" + criteria.getName() + "%'");
    }
    if (criteria.getCategory() != null) {
        query.append(" AND category = '" + criteria.getCategory() + "'");
    }
    
    return jdbcTemplate.query(query.toString(), new ProductMapper());
}
```

## Safe patterns and remediation

### Use prepared statements

The primary defense against SQL injection.
```java
// SAFE - Using prepared statement with parameters
public User getUser(String id) {
    String query = "SELECT * FROM users WHERE id = ?";
    return jdbcTemplate.queryForObject(query, new Object[]{id}, new UserMapper());
}

// SAFE - Using named parameters
public List<Order> getOrders(String status, String customerId) {
    String query = "SELECT * FROM orders WHERE status = :status AND customer_id = :customerId";
    MapSqlParameterSource params = new MapSqlParameterSource()
        .addValue("status", status)
        .addValue("customerId", customerId);
    return namedJdbcTemplate.query(query, params, new OrderMapper());
}
```

### Use query builders

Modern frameworks provide safe query builders.
```java
// SAFE - Using JPA Criteria API
public List<User> findUsers(String name) {
    CriteriaBuilder cb = entityManager.getCriteriaBuilder();
    CriteriaQuery<User> query = cb.createQuery(User.class);
    Root<User> user = query.from(User.class);
    query.select(user)
         .where(cb.equal(user.get("name"), name));
    return entityManager.createQuery(query).getResultList();
}

// SAFE - Using JOOQ
public List<Product> searchProducts(String category) {
    return create.selectFrom(PRODUCTS)
                 .where(PRODUCTS.CATEGORY.eq(category))
                 .fetch();
}
```

### Validate and sanitize

When dynamic queries are unavoidable.
```java
// SAFER - Validate table names against whitelist
private static final Set<String> ALLOWED_TABLES = Set.of("users", "orders", "products");

public int countRecords(String tableName) {
    if (!ALLOWED_TABLES.contains(tableName)) {
        throw new IllegalArgumentException("Invalid table name");
    }
    
    // Still use parameterized query where possible
    String query = "SELECT COUNT(*) FROM " + tableName + " WHERE active = ?";
    return jdbcTemplate.queryForObject(query, new Object[]{true}, Integer.class);
}
```

## Advanced detection features

### Field-sensitive analysis

OpenRewrite tracks taint through object fields.
```java
public class UserRequest {
    private String userId;      // Might be tainted
    private String userName;    // Might be tainted
}

// Analysis tracks fields separately
UserRequest req = new UserRequest();
req.setUserId(request.getParameter("id"));     // req.userId is TAINTED
req.setUserName(sanitize(request.getParameter("name"))); // req.userName is CLEAN

// Detects vulnerability only for userId
String query = "SELECT * FROM users WHERE id = " + req.getUserId(); // VULNERABLE
```

### Inter-procedural analysis

Tracks taint across method boundaries.
```java
public class UserDao {
    public User findUser(String id) {
        String query = buildQuery(id);  // Tracks taint through method call
        return executeQuery(query);
    }
    
    private String buildQuery(String id) {
        return "SELECT * FROM users WHERE id = " + id;  // Taint propagated here
    }
}
```

### Path-sensitive detection

Considers execution paths.
```java
public void processUser(String input, boolean trusted) {
    String query;
    if (trusted) {
        query = "SELECT * FROM admins WHERE id = " + input;  // Only vulnerable if trusted=false
    } else {
        query = "SELECT * FROM users WHERE id = ?";
        // Safe path uses prepared statement
    }
    execute(query);
}
```

## Recipe configuration

### Basic usage

```yaml
# In rewrite.yml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.example.SecurityScan
recipeList:
  - org.openrewrite.analysis.java.security.FindSqlInjection
```

### With custom sources and sinks

Extend the recipe for custom patterns.
```java
public class CustomSqlInjectionRecipe extends FindSqlInjection {
    @Override
    protected SqlInjectionSpec createSpec() {
        return new SqlInjectionSpec() {
            @Override
            public boolean isSource(J.MethodInvocation method) {
                // Add custom sources
                if ("getCustomInput".equals(method.getSimpleName())) {
                    return true;
                }
                return super.isSource(method);
            }
            
            @Override
            public boolean isSink(Tree tree) {
                // Add custom sinks
                if (tree instanceof J.MethodInvocation) {
                    J.MethodInvocation method = (J.MethodInvocation) tree;
                    if ("executeCustomQuery".equals(method.getSimpleName())) {
                        return true;
                    }
                }
                return super.isSink(tree);
            }
        };
    }
}
```

## Testing and validation

### Unit tests

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

## Common false positives and how to handle them

### Constants and literals

```java
// Not a vulnerability - constant value
private static final String TABLE = "users";
String query = "SELECT * FROM " + TABLE;  // Safe

// OpenRewrite correctly identifies this as safe
```

### Already validated input

```java
// Input is validated but analysis might not recognize it
public List<User> getUsers(String sortField) {
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

* [Command Injection](./command-injection.md) - Similar pattern for OS commands
* [LDAP Injection](./ldap-injection.md) - Directory service injection

:::warning Security Note
Even with automated detection, always follow secure coding practices. Defense in depth means using prepared statements, input validation, least privilege database access, and regular security reviews.
:::
