---
description: Master taint analysis for finding security vulnerabilities in Java applications.
---

# Advanced taint analysis guide

This guide provides an in-depth exploration of implementing taint analysis for security vulnerability detection in complex Java applications. Building on the foundational concepts covered in the introduction, we'll dive into advanced implementation details, sophisticated analysis techniques, and real-world challenges you'll encounter when deploying taint analysis at scale.

## Prerequisites

This guide assumes you've read the [Introduction to Taint Analysis](./introduction.md) which covers the core concepts of sources, sinks, and sanitizers. This guide focuses on implementation details and advanced patterns.

## How taint analysis works

Think of taint analysis like tracking a drop of food coloring through water. When untrusted data (the food coloring) enters your program, taint analysis follows it as it flows through variables, method calls, and operations. It does this by marking data as tained or clean. Here's how this looks in practice:

```java
// Taint flows through assignments
String input = request.getParameter("id");     // input is TAINTED
String copy = input;                           // copy is TAINTED

// Taint flows through operations
String concat = "ID: " + input;                // concat is TAINTED
String upper = input.toUpperCase();            // upper is TAINTED

// Taint is removed by sanitizers
String safe = sanitize(input);                 // safe is CLEAN
String stillTainted = input;                   // input remains TAINTED
```

## Implementation in OpenRewrite

OpenRewrite provides a sophisticated field-sensitive taint analysis that you can use:

```java
public class TaintAnalysis extends ForwardDataFlowAnalysis<TaintedValue, TaintFlows> {
    private final TaintFlowSpec spec;
    
    public TaintAnalysis(ControlFlowGraph cfg, TaintFlowSpec spec) {
        super(cfg);
        this.spec = spec;
    }
    
    @Override
    protected Set<TaintedValue> transfer(BasicBlock block, Set<TaintedValue> inputTaints) {
        Set<TaintedValue> result = new HashSet<>(inputTaints);
        
        for (Tree stmt : block.getStatements()) {
            if (stmt instanceof J.MethodInvocation) {
                J.MethodInvocation call = (J.MethodInvocation) stmt;
                
                // Check if it's a source
                if (spec.isSource(call)) {
                    result.add(new TaintedValue(call, spec.getSourceType(call)));
                }
                
                // Check if it's a sanitizer
                if (spec.isSanitizer(call)) {
                    removeSanitizedTaints(result, call);
                }
                
                // Propagate through method calls
                propagateThroughCall(result, call);
            }
            
            // Handle assignments
            if (stmt instanceof J.Assignment) {
                propagateThroughAssignment(result, (J.Assignment) stmt);
            }
        }
        
        return result;
    }
    
    @Override
    protected TaintFlows createResult(Map<BasicBlock, Set<TaintedValue>> analysisResult) {
        // Check for flows to sinks
        Set<TaintFlow> flows = new HashSet<>();
        
        for (Map.Entry<BasicBlock, Set<TaintedValue>> entry : analysisResult.entrySet()) {
            BasicBlock block = entry.getKey();
            Set<TaintedValue> taints = entry.getValue();
            
            for (Tree stmt : block.getStatements()) {
                if (spec.isSink(stmt)) {
                    checkSink(stmt, taints, flows);
                }
            }
        }
        
        return new TaintFlows(cfg, analysisResult, flows);
    }
}
```

## Defining taint specifications

### Basic taint specification

To start tracking security vulnerabilities, you need to tell the analyzer what to look for. Think of this as teaching it to recognize the "bad guys" (sources), the "victims" (sinks), and the "security guards" (sanitizers). Here's a simple example that looks for common web vulnerabilities:

```java
public class WebSecuritySpec implements TaintFlowSpec {
    @Override
    public boolean isSource(J.MethodInvocation method) {
        String methodName = method.getSimpleName();
        JavaType.Method methodType = method.getMethodType();
        
        // HTTP parameters are tainted
        if ("getParameter".equals(methodName) && 
            isType(methodType.getDeclaringType(), "javax.servlet.http.HttpServletRequest")) {
            return true;
        }
        
        // Headers are tainted
        if ("getHeader".equals(methodName) && 
            isType(methodType.getDeclaringType(), "javax.servlet.http.HttpServletRequest")) {
            return true;
        }
        
        return false;
    }
    
    @Override
    public boolean isSink(Tree tree) {
        if (tree instanceof J.MethodInvocation) {
            J.MethodInvocation method = (J.MethodInvocation) tree;
            String methodName = method.getSimpleName();
            
            // SQL execution methods
            if (("execute".equals(methodName) || "executeQuery".equals(methodName)) &&
                isType(method.getSelect(), "java.sql.Statement")) {
                return true;
            }
            
            // Process execution
            if ("exec".equals(methodName) && 
                isType(method.getSelect(), "java.lang.Runtime")) {
                return true;
            }
        }
        
        return false;
    }
    
    @Override
    public boolean isSanitizer(J.MethodInvocation method) {
        String methodName = method.getSimpleName();
        
        // Common sanitization methods
        return "escapeHtml".equals(methodName) ||
               "escapeSql".equals(methodName) ||
               "encodeForURL".equals(methodName);
    }
}
```

### Advanced specifications with context

Sometimes you need more nuance – not all tainted data is equally dangerous for all sinks. For example, user input might be dangerous for SQL queries but harmless for logging. Here's how to create smarter specifications that understand context:

```java
public class ContextAwareTaintSpec implements TaintFlowSpec {
    
    @Override
    public TaintType getSourceType(J.MethodInvocation source) {
        String methodName = source.getSimpleName();
        
        if ("getParameter".equals(methodName)) {
            return TaintType.USER_INPUT;
        } else if ("readFile".equals(methodName)) {
            return TaintType.FILE_CONTENT;
        } else if ("getenv".equals(methodName)) {
            return TaintType.ENVIRONMENT;
        }
        
        return TaintType.UNKNOWN;
    }
    
    @Override
    public boolean isSinkFor(Tree sink, TaintType taintType) {
        if (sink instanceof J.MethodInvocation) {
            J.MethodInvocation method = (J.MethodInvocation) sink;
            
            // SQL sinks only care about user input
            if (isSqlSink(method)) {
                return taintType == TaintType.USER_INPUT;
            }
            
            // File sinks care about path traversal
            if (isFileSink(method)) {
                return taintType == TaintType.USER_INPUT || 
                       taintType == TaintType.ENVIRONMENT;
            }
        }
        
        return false;
    }
}
```

## Field-sensitive analysis

OpenRewrite can track taint at the **field level**. Imagine you have an object with multiple fields – some might contain dangerous data while others are perfectly safe. The analyzer keeps track of each field separately:

```java
class UserData {
    String name;      // Might be tainted
    String id;        // Might be clean
}

// Analysis tracks fields separately
userData.name = request.getParameter("name");   // userData.name is TAINTED
userData.id = generateId();                     // userData.id is CLEAN

// Precise tracking through field access
String userName = userData.name;                // userName is TAINTED
String userId = userData.id;                    // userId is CLEAN
```

## Working with TaintFlows results

The `TaintFlows` result type provides comprehensive querying:

### Finding vulnerabilities

Once your analysis runs, you'll want to examine what it found. The `TaintFlows` object is like a detailed security report that tells you exactly where problems exist. Here's how to work with these results:

```java
TaintAnalysis analysis = new TaintAnalysis(cfg, new WebSecuritySpec());
TaintFlows taintFlows = analysis.analyze();

// Get all security vulnerabilities
List<TaintFlow> vulnerabilities = taintFlows.getFlows();

for (TaintFlow flow : vulnerabilities) {
    Tree source = flow.getSource();
    Tree sink = flow.getSink();
    List<Tree> path = flow.getPath();
    
    System.out.println("Vulnerability found:");
    System.out.println("  Source: " + source);
    System.out.println("  Sink: " + sink);
    System.out.println("  Path length: " + path.size());
}
```

### Analyzing specific variables

Sometimes you need to zoom in on specific parts of your code. Maybe you're curious about whether a particular variable is tainted, or you want to see all the dangerous data at a specific point in your program:

```java
// Check if a specific variable is tainted
boolean isTainted = taintFlows.isTainted("userInput", statement);

// Get taint information for an expression
Set<TaintedValue> taints = taintFlows.getTaints(expression);

// Find all tainted variables at a program point
Set<String> taintedVars = taintFlows.getTaintedVariables(statement);
```

### Path queries

When you find a vulnerability, you'll often want to understand exactly how the tainted data traveled from source to sink. These methods help you trace the complete journey:

```java
// Get the taint propagation path
List<Tree> propagationPath = taintFlows.getTaintPath(source, sink);

// Find all paths from sources to a specific sink
List<TaintPath> allPaths = taintFlows.findAllPaths(sink);

// Get intermediate propagation points
Set<Tree> propagationPoints = taintFlows.getPropagationPoints(taintedValue);
```

## Creating security recipes

### SQL injection detection

Let's put everything together to create a practical recipe that finds SQL injection vulnerabilities. This recipe will scan your code, identify where user input flows into SQL queries, and flag potential security issues:

```java
public class FindSqlInjection extends Recipe {
    @Override
    public String getDisplayName() {
        return "Find SQL injection vulnerabilities";
    }
    
    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.MethodDeclaration visitMethodDeclaration(
                    J.MethodDeclaration method, ExecutionContext ctx) {
                
                // Analyze for SQL injection
                Map<Tree, String> vulnerabilities = new HashMap<>();
                
                J.MethodDeclaration analyzed = ControlFlowSupport.analyze(getCursor(), method,
                    (cursor, cfg) -> {
                        TaintAnalysis analysis = new TaintAnalysis(cfg, new SqlInjectionSpec());
                        TaintFlows flows = analysis.analyze();
                        
                        for (TaintFlow flow : flows.getFlows()) {
                            Tree sink = flow.getSink();
                            String message = String.format(
                                "SQL injection vulnerability: untrusted data flows to SQL query. " +
                                "Source: %s",
                                flow.getSource().toString()
                            );
                            vulnerabilities.put(sink, message);
                        }
                        
                        return method;
                    });
                
                // Mark vulnerabilities if found
                if (!vulnerabilities.isEmpty()) {
                    return (J.MethodDeclaration) new JavaIsoVisitor<ExecutionContext>() {
                        @Override
                        public J visit(@Nullable Tree tree, ExecutionContext ctx) {
                            J j = (J) super.visit(tree, ctx);
                            if (vulnerabilities.containsKey(tree)) {
                                return SearchResult.found(j, vulnerabilities.get(tree));
                            }
                            return j;
                        }
                    }.visit(analyzed, ctx);
                }
                
                return analyzed;
            }
        };
    }
}
```

### Cross-site scripting detection

XSS vulnerabilities happen when untrusted data gets written to HTML without proper escaping. Here's a recipe that catches these issues before they reach production:

```java
public class FindXss extends Recipe {
    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.MethodInvocation visitMethodInvocation(
                    J.MethodInvocation method, ExecutionContext ctx) {
                
                // Check if this is an XSS sink
                if (isHtmlOutput(method)) {
                    Boolean hasXss = ControlFlowSupport.analyze(getCursor(), false,
                        (cursor, cfg) -> {
                            TaintAnalysis analysis = new TaintAnalysis(cfg, new XssSpec());
                            TaintFlows flows = analysis.analyze();
                            
                            // Check if any argument is tainted
                            for (Expression arg : method.getArguments()) {
                                if (flows.isTainted(arg)) {
                                    return true;
                                }
                            }
                            return false;
                        });
                    
                    if (Boolean.TRUE.equals(hasXss)) {
                        return SearchResult.found(method, 
                            "XSS vulnerability: untrusted data in HTML output");
                    }
                }
                
                return method;
            }
        };
    }
}
```

## Advanced taint analysis patterns

### Context-sensitive analysis

When analyzing large applications, tracking taint through method calls can get tricky. Context-sensitive analysis remembers the call chain, so it knows the difference between `processUserInput()` called from a secure context versus an insecure one:

```java
public class ContextSensitiveTaint extends TaintAnalysis {
    private final CallStringContext context = new CallStringContext(3); // k=3
    
    @Override
    protected void propagateThroughCall(Set<TaintedValue> taints, J.MethodInvocation call) {
        // Update context
        CallString newContext = context.push(call);
        
        // Get method summary for this context
        MethodSummary summary = getSummaryWithContext(call.getMethodType(), newContext);
        
        // Apply summary with context
        Set<TaintedValue> result = summary.apply(taints, newContext);
        taints.addAll(result);
    }
}
```

### Implicit flow tracking

Here's where things get really interesting! Sometimes data becomes tainted not through direct assignment, but through control flow. If a secret value influences a branch condition, anything assigned in that branch might leak information about the secret:

```java
public class ImplicitFlowTaint extends TaintAnalysis {
    @Override
    protected Set<TaintedValue> transfer(BasicBlock block, Set<TaintedValue> input) {
        Set<TaintedValue> result = super.transfer(block, input);
        
        // Check if block is control-dependent on tainted condition
        for (BasicBlock pred : cfg.getPredecessors(block)) {
            Tree branch = getBranchCondition(pred, block);
            if (branch != null && isTainted(branch, input)) {
                // All assignments in this block are implicitly tainted
                for (Tree stmt : block.getStatements()) {
                    if (stmt instanceof J.Assignment) {
                        J.Assignment assign = (J.Assignment) stmt;
                        result.add(new TaintedValue(assign.getVariable(), 
                            TaintType.IMPLICIT));
                    }
                }
            }
        }
        
        return result;
    }
}
```

### Taint sanitization validation

It's not enough to just call a sanitizer – you need to use it correctly! This validator checks common mistakes like ignoring the sanitizer's return value or using the wrong type of sanitizer for a particular vulnerability:

```java
public class SanitizationValidator {
    public void validateSanitization(TaintFlows flows) {
        for (J.MethodInvocation sanitizer : findSanitizers()) {
            // Check if sanitizer result is actually used
            if (!isSanitizerResultUsed(sanitizer)) {
                reportIssue("Sanitizer result ignored - original tainted value may still be used");
            }
            
            // Check if correct sanitizer for sink type
            Set<Tree> reachableSinks = findReachableSinks(sanitizer);
            for (Tree sink : reachableSinks) {
                if (!isCorrectSanitizer(sanitizer, sink)) {
                    reportIssue("Wrong sanitizer type for sink");
                }
            }
        }
    }
}
```

## Performance optimization

### Demand-driven analysis

For large codebases, analyzing every possible path can be slow. Demand-driven analysis is like having a smart assistant that only looks at the code paths that could actually contain vulnerabilities:

```java
public class DemandDrivenTaint {
    public boolean canReachSink(Tree source, Tree sink) {
        // Work backward from sink
        Set<Tree> reachableFromSink = computeBackwardSlice(sink);
        
        if (!reachableFromSink.contains(source)) {
            return false; // Early termination
        }
        
        // Only analyze relevant portion
        return analyzeSubgraph(source, sink, reachableFromSink);
    }
}
```

### Summary-based analysis

Libraries like Apache Commons or Spring have predictable behavior. Instead of analyzing them every time, we can use pre-computed "summaries" that describe how they handle tainted data. It's like having a cheat sheet for common library methods:

```java
public class LibraryModeledTaint extends TaintAnalysis {
    private final Map<String, LibraryModel> models = loadLibraryModels();
    
    @Override
    protected void propagateThroughCall(Set<TaintedValue> taints, J.MethodInvocation call) {
        String signature = getMethodSignature(call);
        LibraryModel model = models.get(signature);
        
        if (model != null) {
            // Use pre-computed model
            applyLibraryModel(model, call, taints);
        } else {
            // Fall back to interprocedural analysis
            super.propagateThroughCall(taints, call);
        }
    }
}
```

## Testing taint analysis

Testing your taint analysis is crucial – you want to make sure it catches real vulnerabilities without crying wolf too often. Here's how to write comprehensive tests that verify your analysis works correctly:

```java
@Test
void detectsSimpleSqlInjection() {
    rewriteRun(
        java("""
            class Test {
                void unsafe(HttpServletRequest req, Statement stmt) {
                    String id = req.getParameter("id");
                    ~~>stmt.execute("SELECT * FROM users WHERE id = " + id);
                }
            }
            """)
    );
}

@Test
void respectsSanitization() {
    rewriteRun(
        java("""
            class Test {
                void safe(HttpServletRequest req, Statement stmt) {
                    String id = req.getParameter("id");
                    String safe = escapeSQL(id);
                    stmt.execute("SELECT * FROM users WHERE id = " + safe); // No issue
                }
            }
            """)
    );
}

@Test
void tracksFieldTaint() {
    rewriteRun(
        java("""
            class Test {
                String userData;
                
                void setData(HttpServletRequest req) {
                    this.userData = req.getParameter("data");
                }
                
                void useData(Statement stmt) {
                    ~~>stmt.execute("INSERT INTO log VALUES ('" + this.userData + "')");
                }
            }
            """)
    );
}
```

## Best practices

### Minimize false positives

1. Model sanitizers accurately
2. Consider validation patterns
3. Understand framework behavior
4. Track taint types precisely

### Maximize coverage

1. Include all relevant sources
2. Model library propagation
3. Handle reflection when possible
4. Consider indirect flows

### Performance considerations

1. Use demand-driven analysis for large codebases
2. Cache method summaries
3. Prune irrelevant paths early
4. Leverage incremental analysis

## Next steps

* [Security Recipes](../security/overview.md) - Pre-built security analysis recipes