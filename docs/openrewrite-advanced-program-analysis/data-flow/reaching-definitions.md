---
description: Master reaching definitions analysis - tracking where variable values come from.
---

# Reaching definitions analysis

Reaching definitions analysis is a fundamental forward data flow analysis that tracks which assignments (definitions) of variables may reach each point in a program. It answers the critical question: "Where could this variable's value have come from?"

In this guide, we will walk you through the core concepts of reaching definitions analysis, show you how to implement and use it with OpenRewrite's APIs, and cover practical applications like constant propagation and uninitialized variable detection. We will also explore advanced patterns, performance optimization techniques, and how to integrate this analysis with other program analyses.

## Understanding reaching definitions

Imagine tracking packages through a delivery network. When a package arrives at your door, you want to know all the possible distribution centers it might have passed through. Similarly, when you use a variable, reaching definitions tells you all the assignments that could have provided its current value.

### Core concepts

A definition "reaches" a program point if there's an execution path from the definition to that point where the variable isn't redefined.

```java
int x = 5;      // Definition D1
int y = 10;     // Definition D2
if (condition) {
    x = 15;     // Definition D3
}
// At this point:
// * D2 reaches (y = 10)
// * Either D1 or D3 reaches (depending on condition)
print(x);       // x could be 5 or 15
```

## Implementation in OpenRewrite

Below is how we implemented the `ReachingDefinitionsAnalysis` class in OpenRewrite:

```java
public class ReachingDefinitionsAnalysis extends ForwardDataFlowAnalysis<Definition, ReachingDefinitions> {
    
    @Override
    protected Set<Definition> transfer(BasicBlock block, Set<Definition> inputDefs) {
        Set<Definition> result = new HashSet<>(inputDefs);
        
        // Process each statement in the block
        for (Tree stmt : block.getStatements()) {
            if (isDefinition(stmt)) {
                Definition newDef = createDefinition(stmt);
                
                // KILL: Remove previous definitions of the same variable
                result.removeIf(def -> def.getVariable().equals(newDef.getVariable()));
                
                // GEN: Add this new definition
                result.add(newDef);
            }
        }
        
        return result;
    }
    
    @Override
    protected Set<Definition> merge(List<Set<Definition>> inputs) {
        // Union all reaching definitions from predecessors
        Set<Definition> result = new HashSet<>();
        for (Set<Definition> input : inputs) {
            result.addAll(input);
        }
        return result;
    }
    
    @Override
    protected ReachingDefinitions createResult(Map<BasicBlock, Set<Definition>> analysisResult) {
        return new ReachingDefinitions(cfg, analysisResult);
    }
}
```

## Working with `ReachingDefinitions` results

Now that we've seen how reaching definitions analysis is implemented, let's explore how to use it in practice. The `ReachingDefinitions` result type provides rich querying capabilities that make it easy to answer questions about your code:

### Basic queries

```java
ReachingDefinitionsAnalysis analysis = new ReachingDefinitionsAnalysis(cfg);
ReachingDefinitions reachingDefs = analysis.analyze();

// Get all definitions reaching a specific use
J.Identifier use = ...; // Variable use
Set<Definition> definitions = reachingDefs.getReachingDefinitions(use);

// Check if a variable might be uninitialized
boolean mightBeUninitialized = definitions.isEmpty();

// Find all possible values
Set<Expression> possibleValues = definitions.stream()
    .map(Definition::getValue)
    .collect(Collectors.toSet());
```

### Advanced queries

```java
// Find uses with multiple reaching definitions (join points)
List<J.Identifier> ambiguousUses = reachingDefs.findAmbiguousUses();

// Get definition-use chains
Map<Definition, Set<J.Identifier>> defUseChains = reachingDefs.getDefUseChains();

// Find dead definitions (defined but never used)
Set<Definition> deadDefs = reachingDefs.findDeadDefinitions();

// Check if definitions are "killed" before use
boolean isKilled = reachingDefs.isDefinitionKilled(definition, programPoint);
```

## Common applications

With these querying tools in hand, let's examine the most powerful applications of reaching definitions analysis:

### Uninitialized variable detection

Find variables used before initialization.

```java
public class UninitializedVariableDetector extends Recipe {
    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.Identifier visitIdentifier(J.Identifier ident, ExecutionContext ctx) {
                if (isVariableUse(ident)) {
                    Boolean uninitialized = ControlFlowSupport.analyze(getCursor(), false,
                        (cursor, cfg) -> {
                            ReachingDefinitionsAnalysis analysis = new ReachingDefinitionsAnalysis(cfg);
                            ReachingDefinitions reachingDefs = analysis.analyze();
                            
                            Set<Definition> defs = reachingDefs.getReachingDefinitions(ident);
                            return defs.isEmpty(); // No definitions reach this use
                        });
                    
                    if (Boolean.TRUE.equals(uninitialized)) {
                        return SearchResult.found(ident, 
                            "Variable '" + ident.getSimpleName() + "' may be uninitialized");
                    }
                }
                return ident;
            }
        };
    }
}
```

### Constant propagation

Replace variable uses with constant values when possible.

```java
public class ConstantPropagation {
    public void propagateConstants(J.MethodDeclaration method) {
        ControlFlowSupport.analyze(getCursor(), method,
            (cursor, cfg) -> {
                ReachingDefinitions reachingDefs = new ReachingDefinitionsAnalysis(cfg).analyze();
                
                // Find uses with single constant definition
                for (J.Identifier use : findAllVariableUses(method)) {
                    Set<Definition> defs = reachingDefs.getReachingDefinitions(use);
                    
                    if (defs.size() == 1) {
                        Definition def = defs.iterator().next();
                        if (isConstant(def.getValue())) {
                            replaceWithConstant(use, def.getValue());
                        }
                    }
                }
                
                return method;
            });
    }
}
```

### Def-use chain analysis

Understanding data dependencies.

```java
public class DataDependencyAnalyzer {
    public DependencyGraph buildDataDependencies(ControlFlowGraph cfg) {
        ReachingDefinitions reachingDefs = new ReachingDefinitionsAnalysis(cfg).analyze();
        DependencyGraph graph = new DependencyGraph();
        
        // Build def-use edges
        Map<Definition, Set<J.Identifier>> defUse = reachingDefs.getDefUseChains();
        for (Map.Entry<Definition, Set<J.Identifier>> entry : defUse.entrySet()) {
            Definition def = entry.getKey();
            for (J.Identifier use : entry.getValue()) {
                graph.addDataDependency(def.getStatement(), use);
            }
        }
        
        return graph;
    }
}
```

## Advanced patterns

Once you've mastered the basic applications, you can tackle more sophisticated optimization patterns. Here are some advanced techniques that build on reaching definitions:

### Copy propagation

Eliminate unnecessary variable copies.

```java
// Before: x = y; z = x + 1;
// After:  x = y; z = y + 1;

public void propagateCopies(ReachingDefinitions reachingDefs) {
    for (J.Identifier use : findVariableUses()) {
        Set<Definition> defs = reachingDefs.getReachingDefinitions(use);
        
        // If all reaching definitions are copies from the same variable
        if (allCopiesFromSame(defs)) {
            String sourceVar = getCommonSource(defs);
            replaceUse(use, sourceVar);
        }
    }
}
```

### Available expressions

Combine with expression analysis.

```java
public class AvailableExpressions {
    private final ReachingDefinitions reachingDefs;
    
    public boolean isExpressionAvailable(J.Binary expr, ProgramPoint point) {
        // Check if operands have the same reaching definitions
        Set<Definition> leftDefs = reachingDefs.getReachingDefinitions(expr.getLeft());
        Set<Definition> rightDefs = reachingDefs.getReachingDefinitions(expr.getRight());
        
        // Expression is available if computed earlier with same operand values
        return findEarlierComputation(expr, leftDefs, rightDefs, point) != null;
    }
}
```

### Type inference

Use reaching definitions for type refinement.

```java
public class TypeRefinement {
    public JavaType refineType(J.Identifier var, ReachingDefinitions reachingDefs) {
        Set<Definition> defs = reachingDefs.getReachingDefinitions(var);
        
        if (defs.isEmpty()) {
            return var.getType(); // No refinement possible
        }
        
        // Find most specific common type
        JavaType refined = null;
        for (Definition def : defs) {
            JavaType defType = getDefinitionType(def);
            refined = refined == null ? defType : commonSupertype(refined, defType);
        }
        
        return refined;
    }
}
```

## Performance optimization

As your analyses scale to larger codebases, performance becomes critical. Here are key strategies for making reaching definitions analysis efficient:

### Sparse representations

For large methods, use sparse representations.

```java
public class SparseReachingDefinitions {
    // Only track definitions at points where they're used
    private final Map<VariableUse, Set<Definition>> sparse;
    
    public Set<Definition> query(VariableUse use) {
        return sparse.computeIfAbsent(use, this::computeReaching);
    }
}
```

### Incremental updates

Update reaching definitions incrementally when code changes.

```java
public class IncrementalReachingDefs {
    public void updateAfterEdit(Edit edit) {
        BasicBlock affected = findAffectedBlock(edit);
        
        // Only recompute from affected block
        Set<BasicBlock> toUpdate = new HashSet<>();
        toUpdate.add(affected);
        
        // Add all blocks reachable from affected
        Queue<BasicBlock> worklist = new LinkedList<>();
        worklist.add(affected);
        
        while (!worklist.isEmpty()) {
            BasicBlock current = worklist.poll();
            for (BasicBlock succ : cfg.getSuccessors(current)) {
                if (toUpdate.add(succ)) {
                    worklist.add(succ);
                }
            }
        }
        
        // Recompute only affected blocks
        recomputeBlocks(toUpdate);
    }
}
```

## Integration with other analyses

While reaching definitions analysis is powerful on its own, it becomes even more valuable when combined with other program analyses. Here are some powerful combinations:

### With liveness analysis

Combine for more precise dead code detection.

```java
public Set<Definition> findTrulyDeadDefinitions(
        ReachingDefinitions reachingDefs, 
        LiveVariables liveVars) {
    
    Set<Definition> dead = new HashSet<>();
    
    for (Definition def : reachingDefs.getAllDefinitions()) {
        String var = def.getVariable();
        
        // Dead if variable not live after definition
        if (!liveVars.isLive(var, def.getStatement())) {
            dead.add(def);
            continue;
        }
        
        // Also dead if immediately redefined
        Set<Definition> reachingNext = reachingDefs.getReachingDefinitions(
            getNextUse(var, def.getStatement()));
        if (!reachingNext.contains(def)) {
            dead.add(def);
        }
    }
    
    return dead;
}
```

### With taint analysis

Track taint propagation through definitions.

```java
public class TaintTracking {
    public Set<Definition> findTaintedDefinitions(
            ReachingDefinitions reachingDefs,
            Set<Expression> taintSources) {
        
        Set<Definition> tainted = new HashSet<>();
        Queue<Definition> worklist = new LinkedList<>();
        
        // Start with definitions from taint sources
        for (Expression source : taintSources) {
            worklist.addAll(findDefinitionsFrom(source));
        }
        
        // Propagate through def-use chains
        while (!worklist.isEmpty()) {
            Definition def = worklist.poll();
            if (tainted.add(def)) {
                // Find uses of this definition
                for (J.Identifier use : reachingDefs.getUses(def)) {
                    // Find definitions that use this tainted value
                    worklist.addAll(findDefinitionsUsing(use));
                }
            }
        }
        
        return tainted;
    }
}
```

## Common pitfalls

Even with all these techniques, there are still traps that can catch you. Here are the most common pitfalls and how to avoid them:

### Aliasing

Multiple variables can refer to the same memory.

```java
int[] a = new int[10];
int[] b = a;  // a and b alias
b[0] = 5;     // Also defines a[0]
```

### Field definitions

Field assignments need special handling.

```java
class Container {
    int value;
    
    void method() {
        this.value = 10;      // Defines this.value
        Container c = this;
        c.value = 20;         // Also defines this.value!
    }
}
```

### Control flow complexity

Some definitions are conditional.

```java
int x;  // Declaration without initialization
if (checkCondition()) {
    x = 10;
} else if (otherCondition()) {
    x = 20;
}
// x might still be uninitialized here!
```

## Testing reaching definitions

With all these edge cases and pitfalls, thorough testing becomes essential.

```java
@Test
void testMultipleDefinitions() {
    rewriteRun(
        java("""
            class Test {
                void method(boolean flag) {
                    int x = 1;  // D1
                    if (flag) {
                        x = 2;  // D2
                    } else {
                        x = 3;  // D3
                    }
                    use(x);  // Reached by D2 or D3, not D1
                }
            }
            """)
    );
    
    // Verify that use of x has definitions D2 and D3 reaching
}
```

## Next steps

* [Liveness Analysis](./liveness-analysis.md) - The complementary backward analysis
* [Inter-procedural Analysis](./inter-procedural-analysis.md) - Tracking data across method boundaries
* [Taint Analysis](../taint-analysis/comprehensive-guide.md) - Security-focused data flow analysis
* [Building Your First Data Flow Analysis](./building-your-first-data-flow-analysis.md) - Practical tutorial