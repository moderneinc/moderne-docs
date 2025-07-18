---
description: Detect, analyze, and understand loops in control flow graphs for optimization and analysis
---

# Loop Analysis Techniques

Loops are where programs spend most of their execution time, making loop analysis crucial for performance optimization and program understanding. This guide explores how to detect loops, analyze their properties, and use that information for powerful transformations.

:::info
This guide includes example implementations of loop analysis concepts. OpenRewrite's core library provides control flow graph construction but not specialized loop analysis classes. The `Loop`, `DataDependence`, and other types shown here are example implementations you could create for your own analyses.
:::

## Understanding Loops in CFGs

A loop in a control flow graph is a strongly connected component with a single entry point. More formally, a natural loop has two key properties:

1. **Single Entry**: There's one block (the header) that dominates all blocks in the loop
2. **Back Edge**: There's at least one edge from a block in the loop back to the header

### Loop Terminology

Before diving into algorithms, let's establish common terminology:

- **Header**: The single entry point to the loop
- **Back Edge**: An edge from a node to one of its dominators
- **Loop Body**: All blocks that can reach the back edge without going through the header
- **Exit Blocks**: Blocks inside the loop with edges leading outside
- **Preheader**: A block that has the header as its only successor (useful for optimizations)

## Loop Detection

### Loop Representation

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

### Finding Back Edges

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

### Identifying Natural Loops

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

### Loop Nesting Structure

Loops can be nested within other loops. Building a loop nesting tree helps analyze complex loop structures.

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

## Loop Properties Analysis

### Loop Exit Analysis

Understanding how loops terminate is crucial for optimization.
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

### Loop-Carried Dependencies

Identify dependencies between loop iterations.
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

## Loop Invariant Analysis

Loop invariant code doesn't change across iterations and can be moved outside.
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

## Loop Optimization Techniques

### Loop Invariant Code Motion

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

### Loop Unrolling Detection

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

### Loop Fusion

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

## Advanced Loop Analysis

### Induction Variable Analysis

Identify and analyze variables that change predictably in loops.
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

### Loop Strength Reduction

Replace expensive operations with cheaper ones.
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

### Loop Parallelization Analysis

Determine if loops can be safely parallelized.
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

## Performance Considerations

### Loop Recognition Patterns

Recognize common loop patterns for optimization.
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

### Loop Cache Analysis

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

## Next Steps

- [Reachability and Dominance Analysis](reachability-dominance.md) - Understand the foundations of loop detection
- [Building Control Flow Graphs](building-cfgs.md) - Learn how loops appear in CFGs
- [Data Flow Analysis](../data-flow/introduction.md) - Apply loop analysis to data flow problems

:::tip
Loop analysis is one of the most impactful areas of program optimization. Even simple transformations like moving invariant code can significantly improve performance in hot loops.
:::
