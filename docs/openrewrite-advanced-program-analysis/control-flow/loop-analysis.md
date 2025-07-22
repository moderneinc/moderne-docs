---
description: Detect, analyze, and understand loops in control flow graphs for optimization and analysis.
---

# Loop Analysis Techniques

Loops are where programs spend most of their execution time, making loop analysis crucial for performance optimization and program understanding. This guide explores how to detect loops, analyze their properties, and use that information for powerful transformations.

:::info
This guide includes example implementations of loop analysis concepts. OpenRewrite's core library provides control flow graph construction but not specialized loop analysis classes. The `Loop`, `DataDependence`, and other types shown here are example implementations you could create for your own analyses.
:::

## Understanding loops in CFGs

Think of a loop as a circular path in your program's control flow. When you write a `for` or `while` loop, you're creating a structure where execution can flow in a circle - going from the condition check, through the loop body, and back to the condition check again.

### What makes a "natural loop"?

A **natural loop** is the most common and well-behaved type of loop that compilers can easily analyze and optimize. It has two essential characteristics that make it predictable:

1. **Single Entry Point (Header)**: There's only one way to enter the loop - through its header block (the condition check). This is like having only one entrance to a building.
2. **Back Edge**: There's a "back edge" - a path that flows from somewhere inside the loop back to the header, creating the circular flow.

Why do we care about "natural" loops? Because they're easier to analyze and optimize than more complex control structures with multiple entry points or tangled flows.

### Loop terminology

Before diving into algorithms, let's establish key terms using a familiar `for` loop as an example:

```java
// Preheader: code before the loop
int sum = 0;

for (int i = 0; i < items.length; i++) {  // <- Header: loop condition check
    if (items[i] > threshold) {           // <- Loop Body: code inside the loop
        sum += items[i];
        
        if (sum > limit) {
            break;                        // <- Exit: way out of the loop
        }
    }
}  // <- Back Edge: flow from end of body back to header

// Code after the loop continues here
```

**Key terms:**
* **Header**: The loop's condition check - every iteration starts here
* **Loop Body**: All the code inside the loop that executes repeatedly  
* **Back Edge**: The invisible flow from the end of the loop body back to the header for the next iteration
* **Exit Blocks**: Parts of the loop that can jump outside (like `break` statements)
* **Preheader**: Code that runs once before the loop starts (useful for placing optimized code)

## Loop detection

### Loop representation

First, let's define how we represent loops. Since OpenRewrite doesn't provide a built-in Loop class, we'll define our own.

```java
public class Loop {
    private final BasicBlock header;
    private final Set<BasicBlock> blocks;
    private final Edge backEdge;
    private final Set<BasicBlock> exitBlocks;
    
    public Loop(BasicBlock header, Set<BasicBlock> blocks, Edge backEdge) {
        this.header = header;
        this.blocks = blocks;
        this.backEdge = backEdge;
        this.exitBlocks = computeExitBlocks();
    }
    
    public boolean contains(BasicBlock block) {
        return blocks.contains(block);
    }
    
    public boolean contains(Loop other) {
        return blocks.containsAll(other.blocks);
    }
    
    private Set<BasicBlock> computeExitBlocks() {
        Set<BasicBlock> exits = new HashSet<>();
        for (BasicBlock block : blocks) {
            for (BasicBlock successor : block.getSuccessors()) {
                if (!blocks.contains(successor)) {
                    exits.add(block);
                    break;
                }
            }
        }
        return exits;
    }
    
    // Getters
    public BasicBlock getHeader() { return header; }
    public Set<BasicBlock> getBlocks() { return blocks; }
    public Edge getBackEdge() { return backEdge; }
    public Set<BasicBlock> getExitBlocks() { return exitBlocks; }
}

public class Edge {
    private final BasicBlock source;
    private final BasicBlock target;
    
    public Edge(BasicBlock source, BasicBlock target) {
        this.source = source;
        this.target = target;
    }
    
    public BasicBlock getSource() { return source; }
    public BasicBlock getTarget() { return target; }
}
```

### Finding back edges

The first step in loop analysis is identifying back edges.

```java
public class LoopDetector {
    private final ControlFlowGraph cfg;
    private final DominatorTree dominatorTree;
    
    public Set<Edge> findBackEdges() {
        Set<Edge> backEdges = new HashSet<>();
        
        for (BasicBlock block : cfg.getBlocks()) {
            for (BasicBlock successor : cfg.getSuccessors(block)) {
                // An edge is a back edge if the target dominates the source
                if (dominatorTree.dominates(successor, block)) {
                    backEdges.add(new Edge(block, successor));
                }
            }
        }
        
        return backEdges;
    }
}
```

### Identifying natural loops

Once we have back edges, we can find the natural loops.

```java
public class NaturalLoopFinder {
    public Loop findNaturalLoop(Edge backEdge) {
        BasicBlock header = backEdge.getTarget();
        BasicBlock tail = backEdge.getSource();
        
        Set<BasicBlock> loopBlocks = new HashSet<>();
        loopBlocks.add(header);
        
        if (header != tail) {
            loopBlocks.add(tail);
            
            // Work backwards from tail to find all blocks in the loop
            Queue<BasicBlock> worklist = new LinkedList<>();
            worklist.add(tail);
            
            while (!worklist.isEmpty()) {
                BasicBlock current = worklist.poll();
                
                for (BasicBlock pred : cfg.getPredecessors(current)) {
                    if (!loopBlocks.contains(pred)) {
                        loopBlocks.add(pred);
                        worklist.add(pred);
                    }
                }
            }
        }
        
        return new Loop(header, loopBlocks, backEdge);
    }
    
    public Set<Loop> findAllLoops() {
        Set<Loop> loops = new HashSet<>();
        
        for (Edge backEdge : findBackEdges()) {
            loops.add(findNaturalLoop(backEdge));
        }
        
        // Merge loops with the same header
        return mergeLoopsWithSameHeader(loops);
    }
}
```

### Loop nesting structure

Loops can be nested within other loops, creating a hierarchy where inner loops execute completely for each iteration of outer loops. Understanding this nesting structure is crucial for optimization - inner loops typically have the highest impact on performance since they execute the most frequently.

For example, in a doubly-nested loop, the innermost statements execute `outer_iterations × inner_iterations` times, making them prime targets for optimization.

```java
public class LoopNestingTree {
    private final Map<Loop, Loop> parentLoop = new HashMap<>();
    private final Map<Loop, Set<Loop>> childLoops = new HashMap<>();
    
    public void buildNestingTree(Set<Loop> loops) {
        // Sort loops by size (smaller loops first)
        List<Loop> sortedLoops = new ArrayList<>(loops);
        sortedLoops.sort(Comparator.comparing(l -> l.getBlocks().size()));
        
        for (Loop loop : sortedLoops) {
            // Find the smallest loop that contains this one
            Loop parent = null;
            for (Loop candidate : sortedLoops) {
                if (candidate != loop && 
                    candidate.contains(loop) && 
                    (parent == null || parent.contains(candidate))) {
                    parent = candidate;
                }
            }
            
            if (parent != null) {
                parentLoop.put(loop, parent);
                childLoops.computeIfAbsent(parent, k -> new HashSet<>()).add(loop);
            }
        }
    }
    
    public int getNestingDepth(Loop loop) {
        int depth = 0;
        Loop current = loop;
        while (parentLoop.containsKey(current)) {
            depth++;
            current = parentLoop.get(current);
        }
        return depth;
    }
}
```

## Loop properties analysis

### Loop exit analysis

Understanding how and where loops can terminate is essential for optimization and correctness analysis. Some loops have a single exit point (the normal condition), while others have multiple exits (`break` statements, exceptions, early returns).

**Why this matters:**
- **Single-exit loops** are easier to optimize and transform
- **Multiple-exit loops** require more careful analysis to ensure optimizations don't change behavior
- **Exit points** determine where we can safely place optimized code

```java
public class LoopExitAnalysis {
    public Set<BasicBlock> findExitBlocks(Loop loop) {
        Set<BasicBlock> exitBlocks = new HashSet<>();
        
        for (BasicBlock block : loop.getBlocks()) {
            for (BasicBlock successor : cfg.getSuccessors(block)) {
                if (!loop.contains(successor)) {
                    exitBlocks.add(block);
                    break;
                }
            }
        }
        
        return exitBlocks;
    }
    
    public Set<Edge> findExitEdges(Loop loop) {
        Set<Edge> exitEdges = new HashSet<>();
        
        for (BasicBlock block : loop.getBlocks()) {
            for (BasicBlock successor : cfg.getSuccessors(block)) {
                if (!loop.contains(successor)) {
                    exitEdges.add(new Edge(block, successor));
                }
            }
        }
        
        return exitEdges;
    }
    
    public boolean hasMultipleExits(Loop loop) {
        return findExitBlocks(loop).size() > 1;
    }
}
```

### Loop-carried dependencies

Loop-carried dependencies are relationships between different iterations of a loop - when one iteration depends on the results of a previous iteration. Understanding these dependencies is crucial because they determine whether we can safely optimize or parallelize a loop.

**Why do we need to identify these dependencies?**

Consider this simple example:
```java
for (int i = 1; i < 10; i++) {
    array[i] = array[i-1] + 1;  // This iteration depends on the previous one!
}
```

Here, each iteration depends on the result from the previous iteration. This dependency prevents us from running iterations in parallel - we must execute them in order. Contrast this with:

```java
for (int i = 0; i < 10; i++) {
    array[i] = i * 2;  // Each iteration is independent
}
```

In the second example, each iteration is completely independent, so we could safely run them in parallel or reorder them.

Identifying these dependencies helps us:
- **Determine parallelization potential** - Independent iterations can run in parallel
- **Enable optimizations** - We can reorder or transform independent computations
- **Ensure correctness** - We preserve the program's intended behavior

```java
public class DataDependence {
    private final Tree definition;
    private final Tree use;
    private final String variable;
    
    public DataDependence(Tree definition, Tree use, String variable) {
        this.definition = definition;
        this.use = use;
        this.variable = variable;
    }
    
    public Tree getDefinition() { return definition; }
    public Tree getUse() { return use; }
    public String getVariable() { return variable; }
}

public class LoopCarriedDependencies {
    private final Loop loop;
    private final ReachingDefinitionsAnalysis reachingDefs;
    
    public Set<DataDependence> findLoopCarriedDependencies() {
        Set<DataDependence> dependencies = new HashSet<>();
        
        for (BasicBlock block : loop.getBlocks()) {
            for (Tree stmt : block.getStatements()) {
                if (stmt instanceof J.Assignment) {
                    J.Assignment assign = (J.Assignment) stmt;
                    String variable = getVariableName(assign.getVariable());
                    
                    // Find uses of this variable
                    for (J.Identifier use : findUsesInLoop(variable)) {
                        if (canReachAcrossIteration(assign, use)) {
                            dependencies.add(new DataDependence(assign, use, variable));
                        }
                    }
                }
            }
        }
        
        return dependencies;
    }
    
    private boolean canReachAcrossIteration(J.Assignment def, J.Identifier use) {
        // Check if there's a path from def to use that includes the back edge
        return pathIncludesBackEdge(def, use, loop.getBackEdge());
    }
}
```

## Loop invariant analysis

**Loop invariant code** is code that produces the same result no matter which iteration of the loop is executing it. Since it doesn't change, we can move it outside the loop to avoid repeatedly computing the same value.

### Why move invariant code?

Consider this inefficient loop:
```java
for (int i = 0; i < items.length; i++) {
    String prefix = configuration.getPrefix();  // Same result every time!
    processItem(items[i], prefix);
}
```

The `configuration.getPrefix()` call returns the same value in every iteration, but we're calling it repeatedly. We can optimize this to:
```java
String prefix = configuration.getPrefix();  // Moved outside - computed once
for (int i = 0; i < items.length; i++) {
    processItem(items[i], prefix);
}
```

This optimization can provide significant performance improvements, especially for expensive computations inside frequently-executed loops.

```java
public class LoopInvariantAnalysis {
    public Set<Tree> findLoopInvariantStatements(Loop loop) {
        Set<Tree> invariant = new HashSet<>();
        Set<String> invariantVars = new HashSet<>();
        
        boolean changed = true;
        while (changed) {
            changed = false;
            
            for (BasicBlock block : loop.getBlocks()) {
                for (Tree stmt : block.getStatements()) {
                    if (!invariant.contains(stmt) && isInvariant(stmt, loop, invariantVars)) {
                        invariant.add(stmt);
                        
                        // If it's an assignment, mark the variable as invariant
                        if (stmt instanceof J.Assignment) {
                            String var = getVariableName(((J.Assignment) stmt).getVariable());
                            invariantVars.add(var);
                        }
                        
                        changed = true;
                    }
                }
            }
        }
        
        return invariant;
    }
    
    private boolean isInvariant(Tree stmt, Loop loop, Set<String> invariantVars) {
        // A statement is loop invariant if:
        // 1. All variables it uses are defined outside the loop OR
        // 2. All variables it uses are loop invariant themselves
        
        Set<String> usedVars = findUsedVariables(stmt);
        
        for (String var : usedVars) {
            if (!isDefinedOutsideLoop(var, loop) && !invariantVars.contains(var)) {
                return false;
            }
        }
        
        return true;
    }
}
```

## Loop optimization techniques

### Loop invariant code motion

Move invariant computations outside the loop.

```java
public class LoopInvariantCodeMotion extends Recipe {
    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.MethodDeclaration visitMethodDeclaration(
                    J.MethodDeclaration method, ExecutionContext ctx) {
                
                return ControlFlowSupport.analyze(getCursor(), method,
                    (cursor, cfg) -> {
                        LoopDetector detector = new LoopDetector(cfg);
                        Set<Loop> loops = detector.findAllLoops();
                        
                        for (Loop loop : loops) {
                            BasicBlock preheader = getOrCreatePreheader(loop);
                            Set<Tree> invariants = findLoopInvariantStatements(loop);
                            
                            for (Tree stmt : invariants) {
                                if (isSafeToMove(stmt, loop)) {
                                    moveToPreheader(stmt, preheader);
                                }
                            }
                        }
                        
                        return method;
                    });
            }
        };
    }
}
```

### Loop unrolling detection

Identify candidates for loop unrolling.

```java
public class LoopUnrollingAnalyzer {
    public boolean isUnrollCandidate(Loop loop) {
        // Check if loop has a compile-time constant trip count
        OptionalInt tripCount = analyzeTripCount(loop);
        if (!tripCount.isPresent()) {
            return false;
        }
        
        int count = tripCount.getAsInt();
        
        // Small loops with known trip counts are good candidates
        if (count > 0 && count <= 16) {
            int bodySize = estimateLoopBodySize(loop);
            
            // Don't unroll if it would create too much code
            return bodySize * count < 1000;  // Arbitrary threshold
        }
        
        return false;
    }
    
    private OptionalInt analyzeTripCount(Loop loop) {
        // Analyze loop condition to determine trip count
        BasicBlock header = loop.getHeader();
        Tree condition = getLoopCondition(header);
        
        if (isCountingLoop(condition)) {
            return extractConstantTripCount(condition);
        }
        
        return OptionalInt.empty();
    }
}
```

### Loop fusion

Detect opportunities to merge adjacent loops.

```java
public class LoopFusionOpportunity {
    private final Loop first;
    private final Loop second;
    
    public LoopFusionOpportunity(Loop first, Loop second) {
        this.first = first;
        this.second = second;
    }
    
    public Loop getFirst() { return first; }
    public Loop getSecond() { return second; }
}

public class LoopFusionDetector {
    public List<LoopFusionOpportunity> findFusionCandidates(Set<Loop> loops) {
        List<LoopFusionOpportunity> opportunities = new ArrayList<>();
        
        for (Loop loop1 : loops) {
            for (Loop loop2 : loops) {
                if (loop1 != loop2 && canFuse(loop1, loop2)) {
                    opportunities.add(new LoopFusionOpportunity(loop1, loop2));
                }
            }
        }
        
        return opportunities;
    }
    
    private boolean canFuse(Loop loop1, Loop loop2) {
        // Loops can be fused if:
        // 1. They have the same trip count
        // 2. They're adjacent (no code between them)
        // 3. No data dependencies prevent fusion
        
        if (!haveSameTripCount(loop1, loop2)) {
            return false;
        }
        
        if (!areAdjacent(loop1, loop2)) {
            return false;
        }
        
        return !hasPreventingDependencies(loop1, loop2);
    }
}
```

## Advanced loop analysis

### Induction variable analysis

**Induction variables** are variables that change in a predictable pattern during loop execution - typically incrementing or decrementing by a constant amount each iteration.

### Why do we care about induction variables?

Consider this common pattern:
```java
for (int i = 0; i < 100; i++) {
    int offset = i * 4;        // This is a derived induction variable!
    process(data[offset]);
}
```

Here, `i` is a basic induction variable (increases by 1 each iteration), and `offset` is a derived induction variable (increases by 4 each iteration). Instead of computing `i * 4` in every iteration, we can optimize this to:

```java
for (int i = 0, offset = 0; i < 100; i++, offset += 4) {
    process(data[offset]);     // Replaced multiplication with addition!
}
```

This optimization (called **strength reduction**, covered in detail below) can significantly improve performance in tight loops.

```java
public class InductionVariableAnalysis {
    public static class InductionVariable {
        public final String variable;
        public final Expression base;
        public final Expression step;
        
        public InductionVariable(String variable, Expression base, Expression step) {
            this.variable = variable;
            this.base = base;
            this.step = step;
        }
    }
    
    public Set<InductionVariable> findInductionVariables(Loop loop) {
        Set<InductionVariable> inductionVars = new HashSet<>();
        
        // Find basic induction variables (i = i + constant)
        for (BasicBlock block : loop.getBlocks()) {
            for (Tree stmt : block.getStatements()) {
                if (isBasicInduction(stmt, loop)) {
                    InductionVariable iv = extractInductionInfo(stmt);
                    inductionVars.add(iv);
                }
            }
        }
        
        // Find derived induction variables (j = 2 * i + 1)
        findDerivedInductions(inductionVars, loop);
        
        return inductionVars;
    }
}
```

### Loop strength reduction

**Strength reduction** is an optimization that replaces expensive operations (like multiplication or division) with cheaper equivalent operations (like addition or subtraction) inside loops.

The key insight is that induction variables change predictably, so instead of recomputing expensive expressions from scratch each iteration, we can incrementally update them using cheaper operations.

**Example transformation:**
```java
// Before: expensive multiplication each iteration
for (int i = 0; i < n; i++) {
    array[i * 4] = value;  // Multiply by 4 every iteration
}

// After: cheaper addition each iteration  
for (int i = 0, offset = 0; i < n; i++, offset += 4) {
    array[offset] = value;  // Just add 4 each iteration
}
```

```java
public class LoopStrengthReduction {
    public void reduceStrength(Loop loop) {
        InductionVariableAnalysis ivAnalysis = new InductionVariableAnalysis();
        Set<InductionVariable> inductionVars = ivAnalysis.findInductionVariables(loop);
        
        for (BasicBlock block : loop.getBlocks()) {
            for (Tree stmt : block.getStatements()) {
                if (stmt instanceof J.Binary) {
                    J.Binary binary = (J.Binary) stmt;
                    
                    // Replace multiplication by induction variable with addition
                    if (binary.getOperator() == J.Binary.Type.Multiplication) {
                        if (isInductionVariable(binary.getLeft(), inductionVars)) {
                            replaceWithAddition(binary, loop);
                        }
                    }
                }
            }
        }
    }
}
```

### Loop parallelization analysis

Parallelization analysis determines whether we can safely run loop iterations simultaneously on multiple cores or processors. This can dramatically improve performance for suitable loops, but we must ensure that running iterations out-of-order or simultaneously won't change the program's behavior.

### What prevents parallelization?

Several factors can make a loop unsafe for parallelization:

**Loop-carried dependencies**: When iterations depend on each other
```java
for (int i = 1; i < n; i++) {
    a[i] = a[i-1] + b[i];  // Can't parallelize - each iteration needs the previous result
}
```

**Shared mutable state**: When iterations modify shared variables unpredictably
```java
int sum = 0;
for (int i = 0; i < n; i++) {
    sum += array[i];  // Race condition if parallelized naively
}
```

**Side effects**: I/O operations, exception handling, or other operations that must happen in order

However, some patterns *can* be parallelized with special handling, like **reductions**. A reduction combines many values into a single result using operations like sum, max, or min. These work because we can split the computation across threads and then combine the partial results:

```java
// Sequential reduction
int sum = 0;
for (int i = 0; i < array.length; i++) {
    sum += array[i];  // Combine many values into one
}

// Parallel reduction approach:
// Thread 1: sum elements 0-499   → partial_sum1
// Thread 2: sum elements 500-999 → partial_sum2  
// Final: total_sum = partial_sum1 + partial_sum2
```

```java
public class LoopParallelizationAnalysis {
    public boolean isParallelizable(Loop loop) {
        // Check for loop-carried dependencies
        Set<DataDependence> dependencies = findLoopCarriedDependencies(loop);
        
        for (DataDependence dep : dependencies) {
            if (!isReduction(dep) && !isInductionVariable(dep)) {
                return false;  // True dependency prevents parallelization
            }
        }
        
        // Check for side effects
        if (hasUnsafeSideEffects(loop)) {
            return false;
        }
        
        // Check for aliasing
        if (hasPotentialAliasing(loop)) {
            return false;
        }
        
        return true;
    }
    
    private boolean isReduction(DataDependence dep) {
        // Reductions like sum += value are parallelizable with special handling
        return dep.isCommutativeOperation() && dep.isAssociativeOperation();
    }
}
```

## Performance considerations

### Loop recognition patterns

Different loop patterns have different optimization opportunities. By recognizing these common patterns, we can apply pattern-specific optimizations more effectively.

**Why pattern recognition matters:**
- **Counting loops** (`for (int i = 0; i < n; i++)`) are often good candidates for vectorization or unrolling
- **Iterator loops** (`for (Item item : collection)`) might benefit from different optimizations than index-based loops  
- **Reduction loops** (accumulating sums, finding maximums) can often be parallelized using special reduction techniques
- **Search loops** (looking for a specific element) can often be terminated early when the target is found

Recognizing these patterns helps the compiler choose the most appropriate optimization strategy for each specific loop type.

```java
public enum LoopPattern {
    COUNTING_LOOP,      // for (int i = 0; i < n; i++)
    ITERATOR_LOOP,      // for (Item item : collection)
    WHILE_TRUE_LOOP,   // while (true) with break
    DO_WHILE_LOOP,     // do { ... } while (condition)
    REDUCTION_LOOP,    // Accumulating results
    SEARCH_LOOP        // Looking for specific element
}

public class LoopPatternRecognizer {
    public LoopPattern recognizePattern(Loop loop) {
        BasicBlock header = loop.getHeader();
        
        if (hasCountingPattern(header)) {
            return LoopPattern.COUNTING_LOOP;
        }
        
        if (hasIteratorPattern(header)) {
            return LoopPattern.ITERATOR_LOOP;
        }
        
        if (hasReductionPattern(loop)) {
            return LoopPattern.REDUCTION_LOOP;
        }
        
        // ... other patterns
        
        return null;
    }
}
```

### Loop cache analysis

Analyze memory access patterns for cache optimization.

```java
public class AccessPattern {
    private final String arrayName;
    private final Expression indexExpression;
    private int stride = 1;  // Default stride
    
    public AccessPattern(String arrayName, Expression indexExpression) {
        this.arrayName = arrayName;
        this.indexExpression = indexExpression;
    }
    
    public boolean isStrided() {
        // Simple check - in practice would analyze index expression
        return stride > 1;
    }
    
    public int getStride() { return stride; }
    public void setStride(int stride) { this.stride = stride; }
}

public class LoopCacheAnalysis {
    public void analyzeMemoryAccess(Loop loop) {
        Map<String, AccessPattern> patterns = new HashMap<>();
        
        for (BasicBlock block : loop.getBlocks()) {
            for (Tree stmt : block.getStatements()) {
                if (isArrayAccess(stmt)) {
                    analyzeAccessPattern(stmt, patterns);
                }
            }
        }
        
        // Suggest optimizations based on patterns
        for (AccessPattern pattern : patterns.values()) {
            if (pattern.isStrided() && pattern.getStride() > cacheLineSize()) {
                suggestLoopTiling(loop, pattern);
            }
        }
    }
}
```

## Next steps

* [Data Flow Analysis](../data-flow/introduction.md) - Apply loop analysis to data flow problems and optimizations.

:::tip
Loop analysis is one of the most impactful areas of program optimization. Even simple transformations like moving invariant code can significantly improve performance in hot loops.
:::
