---
description: Learn how to determine which parts of code can be reached during execution
---

# Reachability Analysis

Reachability analysis determines which parts of a program can actually be executed. It's one of the most fundamental control flow analyses, answering the simple but crucial question: "Can execution ever reach this point?" This analysis is essential for dead code detection, security analysis, and understanding program behavior.

## Understanding reachability

Imagine you're exploring a cave system with multiple passages. Some passages lead to dead ends, others loop back, and some are blocked by collapsed rocks. Reachability analysis creates a map showing which chambers you can actually reach from the entrance.

In code, unreachable statements are like blocked passages.
```java
public void process(String input) {
    if (input == null) {
        return;  // Exit here
        doCleanup();  // UNREACHABLE - after return
    }
    
    if (false) {
        launchMissiles();  // UNREACHABLE - condition always false
    }
    
    while (true) {
        if (checkCondition()) {
            break;
        }
    }
    
    finish();  // REACHABLE - loop can exit via break
}
```

## How reachability analysis works

Reachability analysis is a graph traversal problem on the Control Flow Graph (CFG). Starting from entry points, we mark all blocks we can reach by following edges.

### Basic algorithm

```java
public class ReachabilityAnalysis {
    private final ControlFlowGraph cfg;
    private final Set<BasicBlock> reachable = new HashSet<>();
    
    public Set<BasicBlock> findReachableBlocks() {
        // Start from entry block
        Queue<BasicBlock> worklist = new LinkedList<>();
        worklist.add(cfg.getEntryBlock());
        
        while (!worklist.isEmpty()) {
            BasicBlock current = worklist.poll();
            
            if (reachable.add(current)) {
                // First time reaching this block
                // Add all successors to worklist
                for (BasicBlock successor : cfg.getSuccessors(current)) {
                    if (!reachable.contains(successor)) {
                        worklist.add(successor);
                    }
                }
            }
        }
        
        return reachable;
    }
    
    public Set<BasicBlock> findUnreachableBlocks() {
        Set<BasicBlock> all = new HashSet<>(cfg.getAllBlocks());
        all.removeAll(findReachableBlocks());
        return all;
    }
}
```

### Handling different edge types

Not all edges are equal. Some represent normal flow, others exceptional flow.
```java
public class PreciseReachabilityAnalysis {
    // Track how blocks are reached
    private final Map<BasicBlock, Set<EdgeType>> reachabilityInfo = new HashMap<>();
    
    public void analyze() {
        Queue<Edge> worklist = new LinkedList<>();
        
        // Start with entry edges
        for (BasicBlock successor : cfg.getSuccessors(cfg.getEntryBlock())) {
            worklist.add(new Edge(cfg.getEntryBlock(), successor, EdgeType.NORMAL));
        }
        
        while (!worklist.isEmpty()) {
            Edge edge = worklist.poll();
            BasicBlock target = edge.getTo();
            
            // Track how this block was reached
            Set<EdgeType> types = reachabilityInfo.computeIfAbsent(
                target, k -> new HashSet<>());
            
            if (types.add(edge.getType())) {
                // New way of reaching this block
                
                // Propagate based on edge type
                if (edge.getType() == EdgeType.EXCEPTION) {
                    // Only follow exception edges
                    addExceptionSuccessors(target, worklist);
                } else {
                    // Follow normal edges
                    addNormalSuccessors(target, worklist);
                }
            }
        }
    }
}
```

## Common unreachability patterns

### Dead code after return

The most common pattern.
```java
public int calculate(int x) {
    if (x < 0) {
        return -1;
        System.out.println("Negative!");  // Unreachable
    }
    return x * 2;
}
```

### Impossible conditions

Static analysis can detect always-false conditions.
```java
public void process() {
    final boolean DEBUG = false;
    
    if (DEBUG) {
        // Unreachable when DEBUG is false
        expensiveDebugOutput();
    }
    
    int x = 5;
    if (x < 3 && x > 7) {
        // Unreachable - impossible condition
        impossible();
    }
}
```

### Infinite loops without breaks

Code after infinite loops is unreachable.
```java
public void server() {
    initialize();
    
    while (true) {
        handleRequest();
        // No break, return, or throw
    }
    
    cleanup();  // Unreachable
}
```

### Exception flow

Exception handling creates complex reachability patterns.
```java
public void example() {
    try {
        if (condition()) {
            throw new Exception();
        }
        doNormalProcessing();  // Reachable only if no exception
    } catch (Exception e) {
        handleError();  // Reachable only via exception
    }
    
    finish();  // Reachable from both paths
}
```

## Implementation in OpenRewrite

OpenRewrite provides reachability analysis through the CFG API.
```java
public class UnreachableCodeDetector extends Recipe {
    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.MethodDeclaration visitMethodDeclaration(
                    J.MethodDeclaration method, ExecutionContext ctx) {
                
                // Analyze to find unreachable code
                Set<Tree> unreachableStatements = new HashSet<>();
                
                ControlFlowSupport.analyze(getCursor(), method,
                    (cursor, cfg) -> {
                        // Find unreachable blocks
                        Set<BasicBlock> unreachable = findUnreachableBlocks(cfg);
                        
                        // Collect all unreachable statements
                        for (BasicBlock block : unreachable) {
                            unreachableStatements.addAll(block.getStatements());
                        }
                        
                        return method;
                    });
                
                // Mark unreachable statements
                if (!unreachableStatements.isEmpty()) {
                    return (J.MethodDeclaration) new JavaIsoVisitor<ExecutionContext>() {
                        @Override
                        public <T extends J> T visitStatement(Statement statement, ExecutionContext ctx) {
                            T s = super.visitStatement(statement, ctx);
                            if (unreachableStatements.contains(statement)) {
                                return SearchResult.found(s, "Unreachable code detected");
                            }
                            return s;
                        }
                    }.visit(method, ctx);
                }
                
                return method;
            }
            
            private Set<BasicBlock> findUnreachableBlocks(ControlFlowGraph cfg) {
                Set<BasicBlock> reachable = new HashSet<>();
                Queue<BasicBlock> worklist = new LinkedList<>();
                
                worklist.add(cfg.getEntryBlock());
                
                while (!worklist.isEmpty()) {
                    BasicBlock current = worklist.poll();
                    if (reachable.add(current)) {
                        worklist.addAll(cfg.getSuccessors(current));
                    }
                }
                
                Set<BasicBlock> all = new HashSet<>(cfg.getAllBlocks());
                all.removeAll(reachable);
                return all;
            }
        };
    }
}
```

## Advanced reachability concepts

### Conditional reachability

Some code is reachable only under certain conditions.
```java
public class ConditionalReachability {
    // Track conditions required to reach blocks
    private final Map<BasicBlock, PathCondition> reachabilityConditions = new HashMap<>();
    
    public void analyze(ControlFlowGraph cfg) {
        // Entry is always reachable
        reachabilityConditions.put(cfg.getEntryBlock(), PathCondition.TRUE);
        
        Queue<BasicBlock> worklist = new LinkedList<>();
        worklist.add(cfg.getEntryBlock());
        
        while (!worklist.isEmpty()) {
            BasicBlock current = worklist.poll();
            PathCondition currentCondition = reachabilityConditions.get(current);
            
            // Process edges with their conditions
            for (ControlFlowEdge edge : cfg.getOutgoingEdges(current)) {
                PathCondition edgeCondition = getEdgeCondition(edge);
                PathCondition targetCondition = currentCondition.and(edgeCondition);
                
                BasicBlock target = edge.getTo();
                PathCondition existing = reachabilityConditions.get(target);
                
                if (existing == null || !existing.implies(targetCondition)) {
                    // New or stronger condition
                    reachabilityConditions.put(target, 
                        existing == null ? targetCondition : existing.or(targetCondition));
                    worklist.add(target);
                }
            }
        }
    }
}
```

### Interprocedural reachability

Tracking reachability across method calls.
```java
public class InterproceduralReachability {
    private final CallGraph callGraph;
    private final Set<MethodId> reachableMethods = new HashSet<>();
    
    public void analyzeFromMain() {
        Queue<MethodId> worklist = new LinkedList<>();
        worklist.add(findMainMethod());
        
        while (!worklist.isEmpty()) {
            MethodId current = worklist.poll();
            
            if (reachableMethods.add(current)) {
                // Analyze method body to find calls
                Set<MethodId> calledMethods = findCalledMethods(current);
                
                for (MethodId called : calledMethods) {
                    if (!reachableMethods.contains(called)) {
                        worklist.add(called);
                    }
                }
            }
        }
    }
    
    public boolean isReachable(MethodId method) {
        return reachableMethods.contains(method);
    }
}
```

## Practical applications

### Dead code elimination

Remove code that can never execute.
```java
public class DeadCodeEliminator {
    public void eliminate(J.MethodDeclaration method) {
        ControlFlowGraph cfg = ControlFlowSupport.getCfg(method);
        Set<BasicBlock> unreachable = findUnreachableBlocks(cfg);
        
        // Remove unreachable statements
        for (BasicBlock block : unreachable) {
            for (Tree stmt : block.getStatements()) {
                removeStatement(stmt);
                logRemoval("Removed unreachable: " + stmt);
            }
        }
    }
}
```

### Security analysis

Ensure security checks aren't bypassed.
```java
public class SecurityCheckVerifier {
    public void verifySecurityChecks(ControlFlowGraph cfg) {
        // Find security check blocks
        Set<BasicBlock> securityChecks = findSecurityCheckBlocks(cfg);
        
        // Find sensitive operation blocks
        Set<BasicBlock> sensitiveOps = findSensitiveOperationBlocks(cfg);
        
        // Verify all paths to sensitive ops go through security checks
        for (BasicBlock sensitive : sensitiveOps) {
            if (!allPathsGoThrough(cfg.getEntryBlock(), sensitive, securityChecks)) {
                reportVulnerability("Sensitive operation reachable without security check");
            }
        }
    }
}
```

### Test coverage analysis

Identify code not covered by tests.
```java
public class CoverageAnalyzer {
    private final Set<BasicBlock> executed = new HashSet<>();
    
    public void recordExecution(BasicBlock block) {
        executed.add(block);
    }
    
    public CoverageReport analyzeCoverage(ControlFlowGraph cfg) {
        Set<BasicBlock> reachable = findReachableBlocks(cfg);
        Set<BasicBlock> uncovered = new HashSet<>(reachable);
        uncovered.removeAll(executed);
        
        return new CoverageReport(
            reachable.size(),
            executed.size(),
            uncovered
        );
    }
}
```

## Optimization techniques

### Early termination

Stop analysis once we've found what we're looking for.
```java
public boolean canReach(ControlFlowGraph cfg, BasicBlock from, BasicBlock to) {
    if (from.equals(to)) return true;
    
    Set<BasicBlock> visited = new HashSet<>();
    Queue<BasicBlock> worklist = new LinkedList<>();
    worklist.add(from);
    
    while (!worklist.isEmpty()) {
        BasicBlock current = worklist.poll();
        
        if (current.equals(to)) {
            return true;  // Found it!
        }
        
        if (visited.add(current)) {
            worklist.addAll(cfg.getSuccessors(current));
        }
    }
    
    return false;
}
```

### Caching results

Cache reachability information for repeated queries.
```java
public class CachedReachabilityAnalysis {
    private final ControlFlowGraph cfg;
    private final Map<BasicBlock, BitSet> reachableFrom = new HashMap<>();
    
    public boolean canReach(BasicBlock from, BasicBlock to) {
        BitSet reachable = reachableFrom.computeIfAbsent(from, 
            this::computeReachableFrom);
        return reachable.get(to.getId());
    }
    
    private BitSet computeReachableFrom(BasicBlock start) {
        BitSet reachable = new BitSet();
        // DFS to find all reachable blocks
        dfs(start, reachable, new HashSet<>());
        return reachable;
    }
}
```

## Common pitfalls

### Dynamic dispatch

Virtual method calls complicate reachability.
```java
interface Handler {
    void handle();
}

public void process(Handler handler) {
    handler.handle();  // Which implementation is called?
}
```

### Reflection and dynamic code

Some reachability is only determinable at runtime.
```java
public void dynamic(String className) {
    Class<?> clazz = Class.forName(className);
    Method method = clazz.getMethod("run");
    method.invoke(null);  // What code is reachable?
}
```

### Concurrent execution

Thread interactions affect reachability.
```java
volatile boolean flag = false;

void thread1() {
    while (!flag) {
        // Spin
    }
    doWork();  // Reachable only if thread2 sets flag
}

void thread2() {
    flag = true;
}
```

## Testing reachability analysis

Comprehensive tests ensure accuracy.
```java
@Test
void testUnreachableAfterReturn() {
    rewriteRun(
        java("""
            class Test {
                void method() {
                    if (true) {
                        return;
                        ~~>System.out.println("unreachable");
                    }
                }
            }
            """)
    );
}

@Test
void testReachableAfterBreak() {
    rewriteRun(
        java("""
            class Test {
                void method() {
                    while (true) {
                        if (condition()) {
                            break;
                        }
                    }
                    System.out.println("reachable");  // Should NOT be marked
                }
            }
            """)
    );
}
```

## Integration with other analyses

Reachability analysis forms the foundation for many other analyses:

### With dominance analysis
```java
// Block A dominates B if all paths to B go through A
boolean dominates(BasicBlock a, BasicBlock b) {
    return isReachable(entry, b) && 
           !canReachWithout(entry, b, a);
}
```

### With live variable analysis
```java
// Only analyze reachable blocks
for (BasicBlock block : reachableBlocks) {
    analyzeLiveness(block);
}
```

## Next steps

* [Reachability and Dominance Analysis](reachability-dominance.md) - Combined techniques for control dependencies
* [Building Control Flow Graphs](building-cfgs.md) - Foundation for reachability analysis
* [Liveness Analysis](../data-flow/liveness-analysis.md) - Finding dead code through data flow
