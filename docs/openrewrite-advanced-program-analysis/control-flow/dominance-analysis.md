---
description: Master dominance relationships and control dependencies in control flow graphs for advanced program analysis.
---

# Dominance Analysis

Dominance relationships are fundamental to understanding control dependencies in programs. Think of dominance as a "gatekeeper" relationship: block A dominates block B if A acts as a mandatory checkpoint that every execution path must pass through to reach B. 

In simpler terms, if you want to execute block B, you have no choice but to execute block A first. This "must execute before" relationship forms the foundation for many advanced optimizations and program transformations.

## Overview

While reachability analysis (covered in detail in [Reachability Analysis](./reachability-analysis.md)) determines what code can execute, dominance analysis determines what code **must** execute before reaching a given point. This relationship is crucial for understanding control dependencies and enabling sophisticated program optimizations.

## Understanding dominance

Dominance relationships capture the "must pass through" structure of a program. When we say "block A dominates block B," we mean that block A acts as a mandatory gateway - there's no way to reach B without first going through A.

Imagine a building where block A is the main entrance and block B is a room deep inside. If the main entrance is the only way to get to that room, then the entrance "dominates" the room. No matter which route you take through the building, you must pass through the main entrance to reach that room.

### A concrete example

Consider this simple code:

```java
public int calculateDiscount(boolean isPremium, int orderTotal) {
    int discount = 0;                    // Block 1 (entry)
    
    if (isPremium) {                     // Block 1 continues (condition check)
        if (orderTotal > 100) {          // Block 2  
            discount = 20;               // Block 3
        } else {
            discount = 10;               // Block 4
        }
    }
    
    return discount;                     // Block 5 (exit)
}
```

In this example:
- **Block 1 dominates all other blocks** - every execution path must start here
- **Block 2 dominates blocks 3 and 4** - to reach either discount assignment, you must pass through the `orderTotal > 100` check
- **Block 5 is dominated only by Block 1** - you can reach the return without going through the inner conditions if `isPremium` is false

This dominance information tells us that Block 1 is a "gatekeeper" for the entire method, while Block 2 controls access to the premium discount logic.

### Immediate dominators

Every block (except the entry) has exactly one immediate dominator - the closest dominator on all paths from the entry. Think of the immediate dominator as the "direct parent" in the dominance hierarchy. While a block might be dominated by several other blocks, its immediate dominator is the one that directly controls access to it.

For example, if blocks A, B, and C all dominate block D, but B dominates C, then B is the immediate dominator of C, and C is the immediate dominator of D. The immediate dominator is always the "last checkpoint" you must pass through before reaching your destination.

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

The immediate dominator relationship forms a tree structure that's invaluable for many analyses. This tree provides a clear hierarchical view of control dependencies - each node represents a block, and the parent-child relationships show which blocks directly control access to others.

The dominator tree makes it easy to answer questions like "What blocks must execute before this one?" (follow the path to the root) and "What blocks does this one control?" (look at its subtree).

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

Post-dominance is the reverse relationship that answers the question "What must happen after?" Block B post-dominates block A if block B lies on every path from A to the program's exit.

Think of post-dominance as a "mandatory destination." If you execute block A, you're guaranteed to eventually reach block B before the program ends. This relationship is particularly useful for understanding cleanup code, exception handling, and resource management - you can identify what code will definitely execute regardless of which path the program takes.

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

Control dependence combines dominance and post-dominance to answer a crucial question: "Which conditions determine whether this code executes?" 

A statement is control dependent on a conditional branch if the branch's outcome determines whether the statement executes. This relationship helps identify which parts of your program depend on specific decisions, making it invaluable for program slicing, debugging, and understanding program behavior.

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

Dominance relationships help us safely identify and remove dead code by understanding the "must execute" relationships between program points. If a variable assignment dominates all its uses, we can be confident about when it's safe to eliminate unused assignments.

This analysis ensures we don't accidentally break the program by removing code that might be reachable through paths we didn't consider.

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

Dominance analysis enables us to safely move computations out of loops when they produce the same result on every iteration. By using dominance relationships, we can ensure that hoisted code will definitely execute and that it dominates all its uses within the loop.

This optimization can dramatically improve performance by avoiding redundant calculations in tight loops, but it requires careful analysis to ensure correctness.

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

This optimization eliminates computations that are redundant on some (but not all) execution paths. Dominance analysis helps find the best places to move these computations so they can be reused across multiple paths.

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

* [Loop Analysis Techniques](loop-analysis.md) - Detect and analyze loops in control flow graphs.
* [Data Flow Analysis](../data-flow/introduction.md) - See how dominance relationships enable powerful data flow optimizations.

:::tip
Dominance relationships are fundamental to many compiler optimizations. Understanding them well will help you implement sophisticated program transformations and analyses.
:::
