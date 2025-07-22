---
description: Learn how to construct and work with Control Flow Graphs in OpenRewrite.
---

# Building Control Flow Graphs

Control Flow Graphs (CFGs) are the foundation of program analysis. This guide covers how to construct CFGs efficiently using OpenRewrite's APIs, with a focus on the `ControlFlowSupport` utility that handles caching and lifecycle management.

## Using ControlFlowSupport

The `ControlFlowSupport` class is your primary interface for working with CFGs in OpenRewrite. It provides automatic caching, lazy evaluation, and proper memory management.

### Why use ControlFlowSupport?

You should use `ControlFlowSupport` because building CFGs is computationally expensive. For example, to create a CFG for a typical method, you would need to:

1. Parse all of the statements into basic blocks
2. Analyze control structures (if/else, loops, try/catch)
3. Build edges between the blocks
4. Compute dominance relationships

`ControlFlowSupport` ensures this expensive computation happens only **once** per method.

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
3. **Memory Efficient**: Uses `WeakHashMap` and `SoftReference` for optimal memory usage
4. **Thread Safe**: Handles concurrent access correctly
5. **Null Safety**: Gracefully handles cases where you're outside a method/lambda

### Basic usage

The most common pattern is analyzing a specific statement or expression within a visitor method. This approach is ideal when you're working with specific AST nodes and need to understand their context within the control flow. 

`ControlFlowSupport.analyze()` automatically finds the containing method and builds its CFG, making it perfect for spot checks and targeted analysis.

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

You can also use `ControlFlowSupport.analyze()` to perform comprehensive analysis on complete methods – which can be very useful for whole-method analyses like dead code detection.

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

When you need to analyze multiple methods across an entire compilation unit, batch construction is more efficient than building CFGs individually. This approach pre-builds all CFGs at once, eliminating redundant work and allowing you to coordinate analysis results across methods. It's particularly useful for whole-program analysis or when you need to establish relationships between different methods.

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

A CFG consists of basic blocks connected by edges. Each basic block is a maximal sequence of statements that execute together without any branches or jumps. Understanding the structure of basic blocks is essential for navigating and analyzing control flow - every CFG has exactly one entry block and one or more exit blocks, connected by edges that represent possible execution paths.

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

Different edge types represent different reasons why control might flow from one block to another. Understanding edge types is crucial for many analyses - sequential edges show normal execution flow, conditional edges represent if/else branches, loop-back edges indicate loops, and exception edges track how exceptions propagate through your code.

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

When working with specific statements in your analysis, you often need to find which basic block contains them. This is a common operation for understanding statement context, finding neighboring statements, or determining control flow relationships. The CFG doesn't provide this directly, so you'll need to search through the blocks.

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

Determining reachability between blocks is fundamental to many program analyses. This involves checking whether there's an execution path from one block to another, which is essential for understanding data flow, identifying dead code, and ensuring security properties.

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

Dominance relationships are key to understanding control dependencies in your code. Block A dominates block B if every path from the entry block to B must go through A. 

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

You should use `ControlFlowSupport` when you need to:

* Analyze specific statements or expressions
* Work within a visitor pattern
* Get automatic caching and lazy evaluation
* Handle null safety for non-method contexts

You should use **manual construction** when you need to:

* Analyze all methods in a compilation unit at once
* Perform whole-program analysis
* Coordinate results across multiple methods
* Build custom caching strategies

### Caching strategies

The `ControlFlowSupport` cache is designed for optimal memory usage while avoiding redundant CFG construction. It's scoped to compilation units and uses a combination of weak and soft references to balance performance with memory pressure. Understanding this caching behavior helps you make informed decisions about when to use `ControlFlowSupport` versus manual CFG construction.

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

OpenRewrite's CFG builder handles complex Java constructs that can be challenging to analyze correctly. This includes exception handling with multiple catch blocks, modern switch expressions, lambda expressions with their own control flow, and various other language features. Understanding how these constructs appear in the CFG helps you write robust analyses.

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

When developing CFG-based analyses, you'll often need to understand exactly how the CFG is structured for specific code patterns. Visualizing or debugging CFGs helps verify your assumptions, troubleshoot analysis issues, and understand how complex control structures are represented. A simple text-based dump is often sufficient for debugging purposes.

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

Not all code is inside methods, and CFG availability varies depending on the context. Field initializers don't have CFGs because they execute as part of constructor logic, while static initializer blocks do have their own CFGs. Understanding these boundaries is important to avoid null CFGs and unexpected analysis behavior.

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

### Understanding lambda and anonymous class boundaries

Each lambda and anonymous class has its own separate CFG, independent of the containing method. This means when your analysis encounters a lambda, you're working with a different control flow context. `ControlFlowSupport` handles this correctly by analyzing the lambda's CFG when called from within the lambda body, but you need to be aware of these boundaries when designing your analysis.

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

Sometimes OpenRewrite can't build a CFG for a method, and you'll get `null` instead. This typically happens when:

* The code has syntax errors that prevent proper parsing
* You're using newer Java language features that aren't fully supported yet
* The code was generated by tools and contains unusual patterns

Always check for null CFGs and handle this case gracefully in your analysis.

```java
ControlFlowGraph cfg = cfgs.getCfg(method);
if (cfg == null) {
    // Handle missing CFG
    return defaultResult;
}
```

## Next steps

* [Readability Analysis](./reachability-analysis.md) - Learn how to determine which parts of code can be reached during execution.
* [Dominance Analysis](./dominance-analysis.md) - Master dominance relationships and control dependencies
* [Loop Analysis Techniques](./loop-analysis.md) - Detecting and analyzing loops
