---
description: Explore advanced program analysis techniques that combine control flow and data flow for sophisticated analyses.
---

# Advanced analysis techniques

Beyond the fundamental control flow and data flow analyses, modern program analysis combines these techniques in sophisticated ways to solve complex problems. These advanced analyses often blend multiple approaches, consider additional program properties, or tackle domain-specific challenges.

Think of these techniques as specialized tools in your analysis toolkit. While a hammer (basic data flow) and saw (control flow) are essential, sometimes you need a precision instrument designed for a specific task.

## Call graph analysis

One of the most fundamental questions about a program is "who calls whom?" Call graph analysis constructs a graph showing the calling relationships between methods, forming the backbone for many inter-procedural analyses.

### Understanding call relationships

In simple cases, determining call relationships seems straightforward.

```java
public void processOrder(Order order) {
    validateOrder(order);          // Direct call - easy to track
    calculateTotal(order);         // Another direct call
    sendConfirmation(order);       // And another
}
```

But modern object-oriented programs make this challenging. Consider.

```java
public void process(PaymentMethod payment, double amount) {
    payment.charge(amount);  // Which charge() method is called?
}

// Could be any of these:
class CreditCard implements PaymentMethod {
    public void charge(double amount) { /* ... */ }
}

class DebitCard implements PaymentMethod {
    public void charge(double amount) { /* ... */ }
}

class PayPal implements PaymentMethod {
    public void charge(double amount) { /* ... */ }
}
```

The actual method called depends on the runtime type of `payment`. Call graph analysis must approximate these possibilities.

### Applications of call graphs

Call graphs enable powerful analyses and tools:

**Dead Code Detection**: Methods that no one calls are likely dead code. By building a call graph from your main methods, you can find unreachable code.

```java
public class OrderService {
    public void processOrder(Order order) {
        // Called from main application flow
    }
    
    public void debugOrder(Order order) {
        // Never called - candidate for removal
    }
}
```

**Impact Analysis**: When you change a method, which parts of the system might be affected? The call graph shows all direct and transitive callers.

```java
// If you modify this method...
public void calculateTax(Order order) {
    // ... the call graph shows these are affected:
    // - calculateTotal() calls calculateTax()
    // - processOrder() calls calculateTotal()
    // - handleRequest() calls processOrder()
    // - main() calls handleRequest()
}
```

**Security Auditing**: Track how untrusted data can reach sensitive operations through method calls.

```java
public void webEndpoint(HttpRequest request) {
    String input = request.getParameter("data");
    processInput(input);  // Tainted data flows through call
}

private void processInput(String data) {
    storeInDatabase(data);  // Call graph shows taint path
}

private void storeInDatabase(String data) {
    db.execute("INSERT INTO logs VALUES ('" + data + "')");  // SQL injection!
}
```

### Call graph precision in OpenRewrite

Traditional static analysis tools struggle with method resolution because they work with incomplete type information. OpenRewrite's fully type-attributed LSTs provide significant advantages, though some challenges remain.

```java
public void process(PaymentMethod payment, double amount) {
    payment.charge(amount);  
    // OpenRewrite knows this is PaymentMethod.charge()
    // Must still consider all implementations (CreditCard, DebitCard, PayPal)
}

// But in cases with unrelated types:
public void processOrder(Order order) {
    order.charge(100.0);     // Order.charge() - shipping charge
    battery.charge(5.0);     // Battery.charge() - electrical charge
    // OpenRewrite knows these are completely different methods!
}
```

OpenRewrite's advantages:

* **Type-aware**: Every `J.MethodInvocation` has a `JavaType.Method` identifying the declared method
* **No name confusion**: Methods with the same name on unrelated types are properly distinguished
* **Precise overload resolution**: Knows exactly which overloaded method is called based on arguments
* **Better than text-based tools**: No false matches from string similarity

For virtual dispatch (interfaces/inheritance), OpenRewrite still needs to consider all possible implementations, but with key improvements:

* Only considers implementations of the actual declared type (not all classes with a method of that name)
* Can leverage additional type information from the LST context
* Integrates with type-use information when available

Remaining challenges:

* **Virtual dispatch**: Must still consider all implementations of an interface/superclass
* **Reflection**: Dynamic method invocation requires conservative handling
* **Dynamic class loading**: Runtime-loaded classes aren't visible to static analysis

:::info Real-World Usage
IDEs use call graphs constantly. When you use "Find Usages" on a method, the IDE is querying its call graph. When it warns that a method is never used, it's checked the call graph for callers.
:::

## Path-sensitive analysis

Standard data flow analysis merges information at control flow join points, losing precision about which paths were taken. Path-sensitive analysis maintains separate information for different execution paths.

### The precision problem

Consider this null-checking code.

```java
public void process(String input) {
    if (input != null) {
        // Path 1: input is definitely not null
        int length = input.length();  // Safe
    }
    // Path 2: input might be null
    // Standard analysis: input might be null (merges both paths)
    // Path-sensitive: tracks that we're on path 2
}
```

Standard analysis would warn about potential null pointer issues even in the safe branch. Path-sensitive analysis maintains separate facts for each path.

### Tracking path conditions

Path-sensitive analysis tracks the conditions that must hold on each path.

```java
public void validate(User user, Order order) {
    if (user != null && user.isActive()) {
        if (order != null && order.getItems().size() > 0) {
            // Path conditions: user != null AND user.isActive() AND 
            //                  order != null AND order.getItems().size() > 0
            processOrder(user, order);  // Analysis knows both are safe
        }
    }
    // Different path = different conditions = different facts
}
```

### Applications

Path-sensitive analysis excels at finding subtle bugs:

**Null Pointer Analysis**: Track when references are definitely null, definitely non-null, or unknown.

```java
public void processFile(String filename) {
    File file = null;
    if (filename != null) {
        file = new File(filename);  // file is non-null on this path
    }
    
    if (file != null) {
        file.delete();  // Safe - analysis knows the correlation
    }
}
```

**Resource Leak Detection**: Ensure resources are released on all paths.

```java
public void readFile(String path) throws IOException {
    FileInputStream stream = null;
    try {
        stream = new FileInputStream(path);
        // ... read from stream ...
        if (someCondition()) {
            return;  // Path-sensitive analysis detects leak here!
        }
        stream.close();
    } catch (IOException e) {
        // Path-sensitive analysis checks this path too
        if (stream != null) {
            stream.close();
        }
    }
}
```

**Type State Analysis**: Track how object states change along different paths.

```java
class Connection {
    enum State { CLOSED, OPEN, ERROR }
    private State state = State.CLOSED;
    
    public void open() { 
        if (state == State.CLOSED) {
            state = State.OPEN; 
        }
    }
    
    public void send(String data) {
        if (state != State.OPEN) {
            throw new IllegalStateException();  // Analysis proves this is possible
        }
        // ...
    }
}
```

### Performance considerations

Path sensitivity comes at a cost. The number of paths can grow exponentially with program size. Analyses must use techniques like path merging, pruning infeasible paths, and symbolic execution to remain tractable.

:::warning Precision vs Performance
Full path sensitivity is often impractical for large programs. Most analyses use selective path sensitivity, maintaining separate paths only where it significantly improves precision (like null checks).
:::

## Resource analysis

Programs don't just manipulate data – they acquire and release resources like files, network connections, and locks. Resource analysis ensures these resources are properly managed.

### The resource lifecycle

Every resource follows a lifecycle.

```java
// 1. Acquisition
FileOutputStream file = new FileOutputStream("data.txt");

// 2. Use
file.write(data);

// 3. Release
file.close();  // Must happen on all paths!
```

Resource analysis tracks this lifecycle to find leaks, use-after-release bugs, and double-release errors.

### Common resource patterns

Modern Java provides several patterns for resource management:

**Try-with-resources** (Recommended).

```java
try (FileOutputStream file = new FileOutputStream("data.txt")) {
    file.write(data);
}  // Automatically closed
```

**Try-finally** (Traditional).
```java
FileOutputStream file = null;
try {
    file = new FileOutputStream("data.txt");
    file.write(data);
} finally {
    if (file != null) {
        file.close();
    }
}
```

**Explicit management** (Error-prone).

```java
FileOutputStream file = new FileOutputStream("data.txt");
file.write(data);
file.close();  // What if write() throws an exception?
```

### Resource leak patterns

Resource analysis identifies common leak patterns.

```java
public void processFiles(List<String> filenames) {
    for (String name : filenames) {
        FileInputStream stream = new FileInputStream(name);
        if (!isValid(stream)) {
            continue;  // Leak! Stream not closed
        }
        process(stream);
        stream.close();
    }
}

public void handleRequest() {
    Connection conn = database.getConnection();
    try {
        // ... use connection ...
        if (error) {
            return;  // Leak! Connection not returned to pool
        }
        conn.close();
    } catch (Exception e) {
        // Leak if close() not in finally block
    }
}
```

### Custom resource types

Resource analysis can handle application-specific resources.

```java
class ResourcePool<T extends Poolable> {
    public T acquire() { /* ... */ }
    public void release(T resource) { /* ... */ }
}

// Analysis ensures acquire() is paired with release()
Token token = tokenPool.acquire();
try {
    useToken(token);
} finally {
    tokenPool.release(token);  // Required!
}
```

## Combining analyses

The real power comes from combining different analyses. Each analysis provides a piece of the puzzle; together they reveal the complete picture.

### Taint + call graph

Track security vulnerabilities across method boundaries.

```java
// Call graph shows: userInput() → process() → store() → executeQuery()
// Taint analysis tracks: untrusted data flows along this call chain
// Together: Find that user input reaches SQL execution
```

### Control flow + type analysis

Improve precision by understanding both control flow and types.

```java
if (obj instanceof String) {
    String str = (String) obj;  // Control flow + types = safe cast
    processString(str);
}
```

### Resource + path-sensitive

Ensure resources are released on all execution paths.

```java
// Path-sensitive analysis tracks conditions
// Resource analysis tracks acquire/release
// Together: Verify release on ALL paths, not just some
```

:::tip Synergy in Practice
Modern IDEs and analysis tools rarely use just one technique. When IntelliJ suggests extracting a method, it's using control flow (to find complete code blocks), data flow (to determine parameters), and call graph analysis (to check for conflicts).
:::

## Next steps

These advanced techniques open doors to sophisticated analyses:

* [Inter-procedural Analysis](./data-flow/inter-procedural-analysis.md) - Track data across method boundaries
* [Security Analysis](./security/overview.md) - Apply these techniques to find vulnerabilities

## Further reading

For deeper exploration of these topics:

* "Secure Programming with Static Analysis" by Chess and West - Excellent coverage of security-focused analyses
* "Pointer Analysis" by Smaragdakis and Balatsouras - Deep dive into alias and call graph analysis
* Research papers from conferences like PLDI, POPL, and ICSE for cutting-edge techniques