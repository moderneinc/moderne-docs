---
description: Learn how to track data flow across method boundaries for whole-program analysis
---

# Inter-procedural Analysis

Real-world bugs and vulnerabilities rarely stay within a single method. A SQL injection vulnerability might start with user input in a web controller, flow through several business logic methods, and finally reach a database query in a data access layer. Inter-procedural analysis tracks data as it flows across method boundaries, providing a complete picture of how information moves through your entire program.

## The challenge of method calls

Consider this simple example.

```java
public class UserService {
    public void handleRequest(String userId) {
        String sanitized = validateInput(userId);
        processUser(sanitized);
    }
    
    private String validateInput(String input) {
        // Does this actually sanitize the input?
        return input.trim();
    }
    
    private void processUser(String id) {
        executeQuery("SELECT * FROM users WHERE id = '" + id + "'");
    }
}
```

To determine if this code has a SQL injection vulnerability, we need to:
1. Track that `userId` flows into `validateInput`
2. Understand what `validateInput` returns (just trimmed, not sanitized!)
3. Follow the data through `processUser` to the SQL query

This requires analyzing how data flows between methods, not just within them.

## Approaches to inter-procedural analysis

### Context-insensitive analysis

The simplest approach treats each method independently, using summaries of what each method does.

```java
// Method summary for validateInput:
// - Parameter 0 flows to return value
// - No sanitization applied

// When analyzing handleRequest:
// 1. userId is tainted (from external source)
// 2. validateInput returns tainted data (from summary)
// 3. sanitized is tainted
// 4. processUser receives tainted data
```

This approach is fast but can be imprecise because it doesn't distinguish between different call sites.

### Context-sensitive analysis

More precise analysis tracks calling contexts separately.

```java
public class DataProcessor {
    public void processSafe() {
        String data = "constant";
        process(data);  // Context 1: data is safe
    }
    
    public void processUnsafe(String userInput) {
        process(userInput);  // Context 2: data might be tainted
    }
    
    private void process(String data) {
        // Analysis tracks this separately for each context
        database.store(data);
    }
}
```

Context sensitivity prevents false positives by keeping different calling contexts separate.

## Implementation strategies

### Method summaries

The key to scalable inter-procedural analysis is computing and caching method summaries.

```java
public class MethodSummary {
    // What happens to parameters
    private final Map<Integer, Set<Effect>> parameterEffects;
    
    // What the method returns
    private final ReturnInfo returnInfo;
    
    // Side effects (field modifications, etc.)
    private final Set<SideEffect> sideEffects;
    
    public static class Effect {
        enum Type { RETURNED, STORED_IN_FIELD, PASSED_TO_SINK }
        // ... details ...
    }
}
```

### Computing summaries

Here's how to compute method summaries.

```java
public class SummaryComputer {
    public MethodSummary computeSummary(J.MethodDeclaration method) {
        ControlFlowGraph cfg = ControlFlowSupport.getCfg(method);
        
        // Track what happens to each parameter
        Map<Integer, Set<Effect>> paramEffects = new HashMap<>();
        
        for (int i = 0; i < method.getParameters().size(); i++) {
            // Run data flow analysis tracking parameter i
            ParameterFlowAnalysis analysis = new ParameterFlowAnalysis(cfg, i);
            ParameterFlowResult result = analysis.analyze();
            
            // Extract effects from the analysis
            paramEffects.put(i, extractEffects(result));
        }
        
        // Analyze return values
        ReturnInfo returnInfo = analyzeReturns(method, cfg);
        
        // Find side effects
        Set<SideEffect> sideEffects = findSideEffects(method);
        
        return new MethodSummary(paramEffects, returnInfo, sideEffects);
    }
}
```

### Using summaries in analysis

When encountering a method call during analysis.

```java
public class InterProceduralTaintAnalysis extends TaintAnalysis {
    private final Map<String, MethodSummary> summaries;
    
    @Override
    protected Set<TaintedValue> handleMethodCall(
            J.MethodInvocation call, Set<TaintedValue> inputTaints) {
        
        MethodSummary summary = getOrComputeSummary(call.getMethodType());
        Set<TaintedValue> result = new HashSet<>();
        
        // Check if any tainted arguments flow to return
        List<Expression> args = call.getArguments();
        for (int i = 0; i < args.size(); i++) {
            if (isTainted(args.get(i), inputTaints)) {
                if (summary.parameterFlowsToReturn(i)) {
                    result.add(new TaintedValue(call));
                }
            }
        }
        
        // Apply side effects
        applySideEffects(summary, inputTaints);
        
        return result;
    }
}
```

## Handling special cases

### Virtual method calls

OpenRewrite's type-attributed ASTs provide significant advantages for handling polymorphic method calls, though virtual dispatch still requires considering multiple implementations.

```java
interface Processor {
    String process(String input);
}

class SafeProcessor implements Processor {
    public String process(String input) {
        return sanitize(input);
    }
}

class UnsafeProcessor implements Processor {
    public String process(String input) {
        return input; // No sanitization
    }
}

// Virtual dispatch case:
void handleInput(Processor p, String input) {
    p.process(input); // Must consider all Processor implementations
}

// But OpenRewrite eliminates false matches:
class Logger {
    void process(String msg) { /* Different process method */ }
}

void example(Processor p, Logger log) {
    p.process("data");    // OpenRewrite: Only Processor.process implementations
    log.process("data");  // OpenRewrite: Only Logger.process (not confused!)
}
```

OpenRewrite's advantages:
* The `JavaType.Method` on each `J.MethodInvocation` identifies the declared method signature
* Methods with the same name on unrelated types are never confused
* Only implementations of the actual interface/superclass need to be considered
* No false positives from text-based matching

When analyzing virtual method calls, use type hierarchy information to find all relevant implementations, but benefit from OpenRewrite's precise type information to avoid considering unrelated methods.

### Callbacks and lambdas

Modern Java code often uses callbacks.
```java
list.stream()
    .map(this::transform)  // Method reference
    .filter(s -> s.startsWith(prefix))  // Lambda
    .forEach(this::process);
```

These require special handling to track data flow through functional interfaces.

### Recursive methods

Recursive calls need special treatment to avoid infinite analysis.
```java
public String process(String input, int depth) {
    if (depth <= 0) return input;
    String partial = transform(input);
    return process(partial, depth - 1);  // Recursive call
}
```

Use fixed-point iteration or depth limits to handle recursion.

## Integration with OpenRewrite

Here's how to implement inter-procedural analysis in a recipe.
```java
public class InterProceduralSecurityAnalysis extends Recipe {
    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            private SummaryCache summaryCache = new SummaryCache();
            
            @Override
            public J.CompilationUnit visitCompilationUnit(
                    J.CompilationUnit cu, ExecutionContext ctx) {
                
                // Build summaries for all methods
                new JavaIsoVisitor<ExecutionContext>() {
                    @Override
                    public J.MethodDeclaration visitMethodDeclaration(
                            J.MethodDeclaration method, ExecutionContext ctx) {
                        summaryCache.computeSummary(method);
                        return method;
                    }
                }.visit(cu, ctx);
                
                // Run inter-procedural analysis
                InterProceduralTaintAnalysis analysis = 
                    new InterProceduralTaintAnalysis(summaryCache);
                Map<J, SecurityIssue> issues = analysis.analyze(cu);
                
                // Mark issues if found
                if (!issues.isEmpty()) {
                    return (J.CompilationUnit) new JavaIsoVisitor<ExecutionContext>() {
                        @Override
                        public J visit(@Nullable Tree tree, ExecutionContext ctx) {
                            if (tree instanceof J && issues.containsKey(tree)) {
                                SecurityIssue issue = issues.get(tree);
                                return SearchResult.found((J) tree, issue.getDescription());
                            }
                            return super.visit(tree, ctx);
                        }
                    }.visit(cu, ctx);
                }
                
                return cu;
            }
        };
    }
}
```

## Next steps

* [Method Summary Analysis](method-summary-analysis.md) - Deep dive into computing and using method summaries
* [Taint Analysis](../taint-analysis/comprehensive-guide.md) - Apply inter-procedural analysis to security
