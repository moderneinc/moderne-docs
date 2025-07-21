---
description: Master graph algorithms for analyzing control flow relationships, reachability, and dominance
---

# Reachability and Dominance Analysis

Reachability and dominance are fundamental relationships in control flow graphs that answer critical questions about program structure. These analyses form the foundation for many optimizations and program transformations.

## Understanding reachability

Reachability analysis determines which parts of a program can be executed from a given starting point. It's like exploring a cave system with a flashlight - you want to know which chambers you can reach from the entrance.

### Basic reachability

A basic block B is reachable from block A if there exists a path in the CFG from A to B. This is computed using a simple graph traversal.
```java
public class ReachabilityAnalysis {
    private final ControlFlowGraph cfg;
    
    public Set<BasicBlock> computeReachable(BasicBlock start) {
        Set<BasicBlock> reachable = new HashSet<>();
        Queue<BasicBlock> worklist = new LinkedList<>();
        
        worklist.add(start);
        reachable.add(start);
        
        while (!worklist.isEmpty()) {
            BasicBlock current = worklist.poll();
            
            for (BasicBlock successor : cfg.getSuccessors(current)) {
                if (reachable.add(successor)) {
                    worklist.add(successor);
                }
            }
        }
        
        return reachable;
    }
    
    public boolean isReachable(BasicBlock from, BasicBlock to) {
        return computeReachable(from).contains(to);
    }
}
```

### Finding unreachable code

Unreachable code is code that cannot be executed under any circumstances.

```java
public class UnreachableCodeDetector extends Recipe {
    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.MethodDeclaration visitMethodDeclaration(
                    J.MethodDeclaration method, ExecutionContext ctx) {
                
                // First, analyze to find unreachable statements
                Set<Tree> unreachableStatements = new HashSet<>();
                
                ControlFlowSupport.analyze(getCursor(), method,
                    (cursor, cfg) -> {
                        ReachabilityAnalysis reachability = new ReachabilityAnalysis(cfg);
                        Set<BasicBlock> reachable = reachability.computeReachable(cfg.getEntryBlock());
                        
                        // Collect unreachable statements
                        for (BasicBlock block : cfg.getBlocks()) {
                            if (!reachable.contains(block) && !block.isEmpty()) {
                                unreachableStatements.addAll(block.getStatements());
                            }
                        }
                        
                        return method;
                    });
                
                // Then visit the method to mark unreachable statements
                if (!unreachableStatements.isEmpty()) {
                    return (J.MethodDeclaration) new JavaIsoVisitor<ExecutionContext>() {
                        @Override
                        public <T extends J> T visitStatement(Statement statement, ExecutionContext ctx) {
                            T s = super.visitStatement(statement, ctx);
                            if (unreachableStatements.contains(statement)) {
                                return SearchResult.found(s, "This code is unreachable");
                            }
                            return s;
                        }
                    }.visit(method, ctx);
                }
                
                return method;
            }
        };
    }
}
```

### Common patterns of unreachable code

#### Code After Return

```java
public int calculate(int x) {
    if (x > 0) {
        return x * 2;
    } else {
        return x * 3;
    }
    System.out.println("Done");  // Unreachable!
}
```

#### Impossible Conditions

```java
public void process(String s) {
    if (s != null) {
        if (s == null) {  // Unreachable!
            throw new IllegalStateException();
        }
        // Process s...
    }
}
```

#### Break After Continue

```java
while (condition) {
    if (something) {
        continue;
        break;  // Unreachable!
    }
    // ...
}
```

## Understanding dominance

Dominance relationships capture the "must pass through" structure of a program. Block A dominates block B if every path from the entry to B must pass through A.

### Immediate dominators

Every block (except the entry) has exactly one immediate dominator - the closest dominator on all paths from the entry.
```java
public class DominatorAnalysis {
    private final ControlFlowGraph cfg;
    private final Map<BasicBlock, BasicBlock> immediateDominators = new HashMap<>();
    
    public void computeDominators() {
        BasicBlock entry = cfg.getEntryBlock();
        
        // Entry dominates itself
        immediateDominators.put(entry, entry);
        
        // Initialize: all blocks except entry have unknown dominators
        for (BasicBlock block : cfg.getBlocks()) {
            if (block != entry) {
                immediateDominators.put(block, null);
            }
        }
        
        // Iterate until fixed point
        boolean changed = true;
        while (changed) {
            changed = false;
            
            for (BasicBlock block : cfg.getBlocks()) {
                if (block == entry) continue;
                
                BasicBlock newIdom = computeImmediateDominator(block);
                if (!Objects.equals(immediateDominators.get(block), newIdom)) {
                    immediateDominators.put(block, newIdom);
                    changed = true;
                }
            }
        }
    }
    
    private BasicBlock computeImmediateDominator(BasicBlock block) {
        List<BasicBlock> predecessors = cfg.getPredecessors(block);
        if (predecessors.isEmpty()) return null;
        
        // Find first predecessor with known dominator
        BasicBlock idom = null;
        for (BasicBlock pred : predecessors) {
            if (immediateDominators.get(pred) != null) {
                idom = pred;
                break;
            }
        }
        
        // Intersect with other predecessors
        for (BasicBlock pred : predecessors) {
            if (pred != idom && immediateDominators.get(pred) != null) {
                idom = intersect(idom, pred);
            }
        }
        
        return idom;
    }
}
```

### Dominator trees

The immediate dominator relationship forms a tree structure that's invaluable for many analyses.

```java
public class DominatorTree {
    private final Map<BasicBlock, BasicBlock> immediateDominators;
    private final Map<BasicBlock, Set<BasicBlock>> children = new HashMap<>();
    
    public DominatorTree(Map<BasicBlock, BasicBlock> idoms) {
        this.immediateDominators = idoms;
        buildTree();
    }
    
    private void buildTree() {
        for (Map.Entry<BasicBlock, BasicBlock> entry : immediateDominators.entrySet()) {
            BasicBlock block = entry.getKey();
            BasicBlock idom = entry.getValue();
            
            if (block != idom) {  // Not the entry block
                children.computeIfAbsent(idom, k -> new HashSet<>()).add(block);
            }
        }
    }
    
    public boolean dominates(BasicBlock dominator, BasicBlock dominated) {
        BasicBlock current = dominated;
        while (current != null) {
            if (current == dominator) return true;
            current = immediateDominators.get(current);
            if (current == immediateDominators.get(current)) break; // Entry block
        }
        return false;
    }
    
    public Set<BasicBlock> getDominanceFrontier(BasicBlock block) {
        Set<BasicBlock> frontier = new HashSet<>();
        
        // A block B is in block A's dominance frontier if:
        // 1. A dominates a predecessor of B
        // 2. A does not strictly dominate B
        for (BasicBlock b : cfg.getBlocks()) {
            for (BasicBlock pred : cfg.getPredecessors(b)) {
                if (dominates(block, pred) && !strictlyDominates(block, b)) {
                    frontier.add(b);
                }
            }
        }
        
        return frontier;
    }
}
```

## Post-dominance analysis

Post-dominance is the reverse relationship: block B post-dominates block A if B is on every path from A to the exit. This is computed on the reverse CFG.

```java
public class PostDominatorAnalysis extends DominatorAnalysis {
    public PostDominatorAnalysis(ControlFlowGraph cfg) {
        // Create reverse CFG
        super(reverseGraph(cfg));
    }
    
    public boolean mustExecuteAfter(BasicBlock before, BasicBlock after) {
        // If 'after' post-dominates 'before', then 'after' must execute
        // whenever 'before' executes
        return postDominates(after, before);
    }
    
    public Set<BasicBlock> findGuaranteedCleanup(BasicBlock resourceAcquisition) {
        // Find blocks that always execute after resource acquisition
        Set<BasicBlock> cleanup = new HashSet<>();
        
        for (BasicBlock block : cfg.getBlocks()) {
            if (mustExecuteAfter(resourceAcquisition, block)) {
                cleanup.add(block);
            }
        }
        
        return cleanup;
    }
}
```

## Control dependence

Control dependence combines dominance and post-dominance to determine which conditions control the execution of statements.

```java
public class ControlDependenceAnalysis {
    private final DominatorTree dominatorTree;
    private final PostDominatorAnalysis postDominators;
    
    public Set<BasicBlock> getControlDependencies(BasicBlock block) {
        Set<BasicBlock> controllers = new HashSet<>();
        
        // Block B is control dependent on block A if:
        // 1. A has at least two successors
        // 2. B post-dominates one successor but not A
        // 3. There's a path from A to B
        
        for (BasicBlock candidate : cfg.getBlocks()) {
            if (isControlDependent(block, candidate)) {
                controllers.add(candidate);
            }
        }
        
        return controllers;
    }
    
    private boolean isControlDependent(BasicBlock dependent, BasicBlock controller) {
        List<BasicBlock> successors = cfg.getSuccessors(controller);
        if (successors.size() < 2) return false;
        
        // Check if dependent post-dominates some but not all successors
        boolean postDomSome = false;
        boolean notPostDomSome = false;
        
        for (BasicBlock succ : successors) {
            if (postDominators.postDominates(dependent, succ)) {
                postDomSome = true;
            } else {
                notPostDomSome = true;
            }
        }
        
        return postDomSome && notPostDomSome && 
               !postDominators.postDominates(dependent, controller);
    }
}
```

## Practical applications

### Dead code elimination

Use dominance to safely remove code.

```java
public class DeadCodeEliminator {
    public void eliminateDeadStores(ControlFlowGraph cfg) {
        DominatorTree domTree = new DominatorTree(computeDominators(cfg));
        LivenessAnalysis liveness = new LivenessAnalysis(cfg);
        
        for (BasicBlock block : cfg.getBlocks()) {
            for (Tree stmt : block.getStatements()) {
                if (stmt instanceof J.Assignment) {
                    J.Assignment assign = (J.Assignment) stmt;
                    String var = getVariableName(assign.getVariable());
                    
                    // Dead if variable not live after assignment
                    if (!liveness.isLiveAfter(var, stmt)) {
                        // Check if any dominated blocks use the variable
                        if (!isDominatedUse(domTree, block, var)) {
                            markForRemoval(stmt);
                        }
                    }
                }
            }
        }
    }
}
```

### Loop-invariant code motion

Move code out of loops when safe.

```java
public class LoopInvariantCodeMotion {
    public void hoistInvariantCode(Loop loop) {
        BasicBlock header = loop.getHeader();
        BasicBlock preheader = getOrCreatePreheader(loop);
        DominatorTree domTree = computeDominatorTree();
        
        for (BasicBlock block : loop.getBlocks()) {
            for (Tree stmt : new ArrayList<>(block.getStatements())) {
                if (isLoopInvariant(stmt, loop) && 
                    dominatesAllUses(stmt, block, domTree) &&
                    dominatesAllExits(block, loop, domTree)) {
                    
                    // Move to preheader
                    moveStatement(stmt, block, preheader);
                }
            }
        }
    }
}
```

### Partial redundancy elimination

Eliminate computations that are redundant on some paths.

```java
public class PartialRedundancyElimination {
    public void eliminatePartialRedundancies(ControlFlowGraph cfg) {
        // Find expressions that are redundant on some paths
        for (Expression expr : findAllExpressions(cfg)) {
            Set<BasicBlock> availableAt = computeAvailability(expr, cfg);
            Set<BasicBlock> anticipatedAt = computeAnticipability(expr, cfg);
            
            // Insert on paths where needed but not available
            for (BasicBlock block : cfg.getBlocks()) {
                if (anticipatedAt.contains(block) && !availableAt.contains(block)) {
                    if (shouldInsert(block, expr, availableAt)) {
                        insertComputation(block, expr);
                    }
                }
            }
        }
    }
}
```

## Next steps

* [Loop Analysis Techniques](loop-analysis.md) - Deep dive into loop structure analysis
* [Building Control Flow Graphs](building-cfgs.md) - Construct CFGs from source code
* [Data Flow Analysis](../data-flow/introduction.md) - See how dominance enables optimizations

:::tip
Dominance relationships are fundamental to many compiler optimizations. Understanding them well will help you implement sophisticated program transformations and analyses.
:::
