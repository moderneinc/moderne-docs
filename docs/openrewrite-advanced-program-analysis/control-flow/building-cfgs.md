---
description: Learn how to construct and work with Control Flow Graphs in OpenRewrite
---

# Building Control Flow Graphs

Control Flow Graphs (CFGs) are the foundation of program analysis. This guide covers how to construct CFGs efficiently using OpenRewrite's APIs, with a focus on the `ControlFlowSupport` utility that handles caching and lifecycle management.

## Using ControlFlowSupport

The `ControlFlowSupport` class is your primary interface for working with CFGs in OpenRewrite. It provides automatic caching, lazy evaluation, and proper memory management.

### Why use ControlFlowSupport?

Building CFGs is computationally expensive. For a typical method:

1. Parse all statements into basic blocks
2. Analyze control structures (if/else, loops, try/catch)
3. Build edges between blocks
4. Compute dominance relationships

`ControlFlowSupport` ensures this expensive computation happens only once per method.

```java
// DON'T DO THIS - builds CFG every time
public void analyzeMethod(J.MethodDeclaration method) {
    ControlFlowGraph cfg1 = ControlFlowGraphs.build(method);  // Builds CFG
    doAnalysis1(cfg1);
    
    ControlFlowGraph cfg2 = ControlFlowGraphs.build(method);  // Rebuilds CFG!
    doAnalysis2(cfg2);
}

// DO THIS - reuses cached CFG
public void analyzeMethod(Cursor cursor) {
    ControlFlowSupport.analyze(cursor, false, (cur, cfg) -> {
        doAnalysis1(cfg);  // Same CFG instance
        doAnalysis2(cfg);  // Reused from cache
        return result;
    });
}
```

### Key benefits

1. **Automatic CFG Caching**: CFGs are built once and cached for the entire compilation unit
2. **Lazy Evaluation**: CFGs are only built when actually needed
3. **Memory Efficient**: Uses WeakHashMap and SoftReference for optimal memory usage
4. **Thread Safe**: Handles concurrent access correctly
5. **Null Safety**: Gracefully handles cases where you're outside a method/lambda

### Basic usage

The most common pattern is analyzing a specific statement or expression.

```java
public class MyAnalysisRecipe extends Recipe {
    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.Assignment visitAssignment(J.Assignment assignment, ExecutionContext ctx) {
                // Analyze this specific assignment
                Boolean result = ControlFlowSupport.analyze(getCursor(), false,
                    (cursor, cfg) -> {
                        // cfg is the CFG for the containing method
                        // Perform your analysis here
                        return analyzeAssignment(assignment, cfg);
                    });
                
                if (Boolean.TRUE.equals(result)) {
                    return SearchResult.found(assignment, "Analysis found issue");
                }
                return assignment;
            }
        };
    }
}
```

### Analyzing entire methods

To analyze a complete method at once.

```java
@Override
public J.MethodDeclaration visitMethodDeclaration(
        J.MethodDeclaration method, ExecutionContext ctx) {
    
    // Analyze the method and collect issues
    List<Issue> issues = new ArrayList<>();
    
    J.MethodDeclaration analyzed = ControlFlowSupport.analyze(getCursor(), method,
        (cursor, cfg) -> {
            // Analyze the entire method
            CompleteAnalysisResult result = analyzeMethod(cfg);
            issues.addAll(result.getIssues());
            return method;
        });
    
    // If issues found, create a visitor to mark them
    if (!issues.isEmpty()) {
        return (J.MethodDeclaration) new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J visitStatement(Statement statement, ExecutionContext ctx) {
                J s = super.visitStatement(statement, ctx);
                for (Issue issue : issues) {
                    if (issue.getLocation() == statement) {
                        return SearchResult.found(s, issue.getMessage());
                    }
                }
                return s;
            }
        }.visit(analyzed, ctx);
    }
    
    return analyzed;
}
```

## Manual CFG construction

While `ControlFlowSupport` is recommended for most uses, you can build CFGs manually when needed:

### Direct construction

```java
// For a single method
J.MethodDeclaration method = ...;
ControlFlowGraph cfg = ControlFlowGraphs.build(method);

// For a lambda
J.Lambda lambda = ...;
ControlFlowGraph cfg = ControlFlowGraphs.build(lambda);
```

### Batch construction

For analyzing multiple methods at once.

```java
public void analyzeCompilationUnit(J.CompilationUnit cu) {
    // Build all CFGs at once
    ControlFlowGraphs cfgs = ControlFlowGraphs.build(cu);
    
    // Access individual CFGs
    new JavaIsoVisitor<Void>() {
        @Override
        public J.MethodDeclaration visitMethodDeclaration(
                J.MethodDeclaration method, Void unused) {
            ControlFlowGraph cfg = cfgs.getCfg(method);
            if (cfg != null) {
                analyzeMethod(method, cfg);
            }
            return method;
        }
    }.visit(cu, null);
}
```

## Understanding CFG structure

### Basic blocks

A CFG consists of basic blocks connected by edges.

```java
ControlFlowGraph cfg = ...;

// Get all blocks
Set<BasicBlock> blocks = cfg.getAllBlocks();

// Get entry/exit blocks
BasicBlock entry = cfg.getEntryBlock();
Set<BasicBlock> exits = cfg.getExitBlocks();

// Navigate edges
for (BasicBlock block : blocks) {
    Set<BasicBlock> successors = cfg.getSuccessors(block);
    Set<BasicBlock> predecessors = cfg.getPredecessors(block);
    
    // Get statements in the block
    List<Tree> statements = block.getStatements();
}
```

### Edge types

Different edge types represent different control flow.

```java
// Get typed edges
Set<ControlFlowEdge> edges = cfg.getEdges();

for (ControlFlowEdge edge : edges) {
    BasicBlock from = edge.getFrom();
    BasicBlock to = edge.getTo();
    ControlFlowEdge.Type type = edge.getType();
    
    switch (type) {
        case SEQUENTIAL:
            // Normal flow
            break;
        case TRUE_BRANCH:
        case FALSE_BRANCH:
            // Conditional branches
            break;
        case EXCEPTION:
            // Exception flow
            break;
        case LOOP_BACK:
            // Loop back edge
            break;
    }
}
```

## Working with CFGs

### Finding containing blocks

To find which block contains a specific statement.

```java
public BasicBlock findContainingBlock(ControlFlowGraph cfg, Tree statement) {
    for (BasicBlock block : cfg.getAllBlocks()) {
        if (block.getStatements().contains(statement)) {
            return block;
        }
    }
    return null;
}
```

### Path analysis

To check if one block can reach another.

```java
public boolean canReach(ControlFlowGraph cfg, BasicBlock from, BasicBlock to) {
    Set<BasicBlock> visited = new HashSet<>();
    Queue<BasicBlock> worklist = new LinkedList<>();
    worklist.add(from);
    
    while (!worklist.isEmpty()) {
        BasicBlock current = worklist.poll();
        if (current.equals(to)) {
            return true;
        }
        
        if (visited.add(current)) {
            worklist.addAll(cfg.getSuccessors(current));
        }
    }
    
    return false;
}
```

### Dominance analysis

CFGs support dominance queries.

```java
// Check if block A dominates block B
// (all paths to B go through A)
boolean dominates = cfg.dominates(blockA, blockB);

// Get immediate dominator
BasicBlock idom = cfg.getImmediateDominator(block);

// Get dominance frontier
Set<BasicBlock> frontier = cfg.getDominanceFrontier(block);
```

## Performance best practices

### When to use ControlFlowSupport vs. manual construction

Use `ControlFlowSupport` when:
* Analyzing specific statements or expressions
* Working within a visitor pattern
* Wanting automatic caching and lazy evaluation
* Needing null safety for non-method contexts

Use manual construction when:
* Analyzing all methods in a compilation unit at once
* Performing whole-program analysis
* Needing to coordinate results across multiple methods
* Building custom caching strategies

### Caching strategies

The `ControlFlowSupport` cache is scoped to a compilation unit and uses weak references.

```java
// Cache implementation (simplified)
public class ControlFlowSupport {
    private static final WeakHashMap<J.CompilationUnit, 
        SoftReference<ControlFlowGraphs>> cache = new WeakHashMap<>();
    
    public static <T> T analyze(Cursor cursor, boolean throwOnFailure, 
                                ControlFlowAnalysis<T> analysis) {
        // Find containing compilation unit
        J.CompilationUnit cu = cursor.firstEnclosing(J.CompilationUnit.class);
        
        // Get or build CFGs for entire compilation unit
        ControlFlowGraphs cfgs = cache.computeIfAbsent(cu, 
            k -> new SoftReference<>(ControlFlowGraphs.build(k))).get();
        
        // Find CFG for current method
        J.MethodDeclaration method = cursor.firstEnclosing(J.MethodDeclaration.class);
        ControlFlowGraph cfg = cfgs.getCfg(method);
        
        // Run analysis
        return analysis.analyze(cursor, cfg);
    }
}
```

### Memory considerations

CFGs can be memory-intensive for large methods. The caching system helps by:
* Using weak references for compilation units (garbage collected under memory pressure)
* Using soft references for CFGs (kept as long as memory permits)
* Building CFGs lazily (only for methods actually analyzed)

## Advanced topics

### Supporting language constructs

OpenRewrite's CFG builder handles complex Java constructs.

```java
// Try-catch-finally
try {
    riskyOperation();  // Block 1
} catch (IOException e) {
    handleIO(e);       // Block 2 (exception edge from Block 1)
} catch (Exception e) {
    handleGeneral(e);  // Block 3 (exception edge from Block 1)
} finally {
    cleanup();         // Block 4 (edges from all previous blocks)
}

// Switch expressions (Java 14+)
String result = switch (day) {
    case MONDAY, FRIDAY -> "Work";
    case TUESDAY -> "Gym";
    default -> "Rest";
};

// Lambda expressions
list.forEach(item -> {
    // Separate CFG built for lambda body
    process(item);
});
```

### Debugging CFGs

To visualize or debug CFGs.

```java
public void printCfg(ControlFlowGraph cfg) {
    System.out.println("CFG with " + cfg.getAllBlocks().size() + " blocks:");
    
    for (BasicBlock block : cfg.getAllBlocks()) {
        System.out.println("\nBlock " + block.getId() + ":");
        
        // Print statements
        for (Tree stmt : block.getStatements()) {
            System.out.println("  " + stmt.getClass().getSimpleName());
        }
        
        // Print edges
        for (BasicBlock succ : cfg.getSuccessors(block)) {
            System.out.println("  -> Block " + succ.getId());
        }
    }
}
```

## Common pitfalls

### Analyzing non-method code

Not all code is inside methods.

```java
// Field initializers don't have CFGs
class Example {
    private int x = computeX();  // No CFG here
    
    static {
        // Static initializers have CFGs
        initialize();
    }
}
```

### Lambda and anonymous class boundaries

Each lambda and anonymous class has its own CFG.

```java
public void process() {
    // Outer method CFG
    list.forEach(item -> {
        // Separate lambda CFG
        // ControlFlowSupport handles this correctly
    });
}
```

### Incomplete CFGs

Some constructs may result in incomplete CFGs:
* Parsing errors
* Unsupported language features
* Synthetic or generated code

Always check for null and handle gracefully.

```java
ControlFlowGraph cfg = cfgs.getCfg(method);
if (cfg == null) {
    // Handle missing CFG
    return defaultResult;
}
```

## Next steps

* [Reachability and Dominance Analysis](reachability-dominance.md) - Advanced CFG algorithms
* [Loop Analysis Techniques](loop-analysis.md) - Detecting and analyzing loops
