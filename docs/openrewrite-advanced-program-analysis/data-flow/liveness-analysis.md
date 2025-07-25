---
description: Deep dive into liveness analysis - determining which variables are "live" at each program point.
---

# Liveness analysis

Liveness analysis is a fundamental backward data flow analysis that determines which variables might be used in the future at each point in a program. A variable is "live" at a program point if its current value may be read before it's overwritten. This analysis is crucial for dead code elimination, register allocation, and understanding data dependencies.

## Understanding liveness

Think of liveness like tracking which ingredients in your kitchen will be used before they expire. If you have flour that won't be used before you buy new flour, the current flour is "dead" – you could throw it away without affecting any future recipes.

### Intuition through examples

Let's build intuition with progressively complex examples.

```java
// Example 1: Simple linear flow
int x = 5;      // Point A: Is x live? Look ahead...
int y = 10;     // Point B: Is y live?
int z = x + y;  // Point C: x and y are used here
return z;       // Point D: z is used here

// Working backward:
// - At D: nothing is live (end of method)
// - At C: z is live (used at D)
// - At B: x and y are live (used at C)
// - At A: y is live (used at C), x is NOT live (overwritten at A)
```

The key insight: we work **backward** through the program, propagating liveness information against the flow of control.

## The mathematics of liveness

### Formal definition

For each program point, we track a set of live variables. The analysis computes:

* **LIVE_IN[B]**: Variables live at the entry of basic block B
* **LIVE_OUT[B]**: Variables live at the exit of basic block B

### Transfer function

The transfer function for a basic block B is.

```
LIVE_IN[B] = GEN[B] ∪ (LIVE_OUT[B] - KILL[B])
```

Where:
* **GEN[B]**: Variables used in B before being defined
* **KILL[B]**: Variables defined in B

### Data flow equations

For the exit of a block.

```
LIVE_OUT[B] = ∪ LIVE_IN[S] for all successors S of B
```

This is a "may" analysis using union – a variable is live if it's live on **any** path forward.

## Implementation in OpenRewrite

Here's how liveness analysis is implemented in OpenRewrite.

```java
public class LivenessAnalysis extends BackwardDataFlowAnalysis<LiveVariable, LiveVariables> {
    
    public LivenessAnalysis(ControlFlowGraph cfg) {
        super(cfg);
    }
    
    @Override
    protected Set<LiveVariable> transfer(BasicBlock block, Set<LiveVariable> exitLive) {
        // Start with what's live at block exit
        Set<LiveVariable> result = new HashSet<>(exitLive);
        
        // Process statements in reverse order (backward analysis)
        List<Tree> statements = new ArrayList<>(block.getStatements());
        Collections.reverse(statements);
        
        for (Tree stmt : statements) {
            // KILL: Remove variables defined in this statement
            Set<String> defined = findDefinedVariables(stmt);
            result.removeIf(lv -> defined.contains(lv.getVariableName()));
            
            // GEN: Add variables used in this statement
            Set<LiveVariable> used = findUsedVariables(stmt);
            result.addAll(used);
        }
        
        return result;
    }
    
    @Override
    protected Set<LiveVariable> merge(Set<LiveVariable> facts1, Set<LiveVariable> facts2) {
        // Union for "may" analysis
        Set<LiveVariable> result = new HashSet<>(facts1);
        result.addAll(facts2);
        return result;
    }
}
```

## Working with livevariables results

The `LiveVariables` result type provides rich querying capabilities:

### Basic queries

```java
LivenessAnalysis analysis = new LivenessAnalysis(cfg);
LiveVariables liveVars = analysis.analyze();

// Check if a variable is live at a specific point
boolean isLive = liveVars.isLive("counter", statement);

// Get all live variables at a statement
Set<String> liveAtStatement = liveVars.getLiveVariableNames(statement);

// Get live variables at block entry/exit
Set<String> liveAtEntry = liveVars.getLiveVariableNames(block);
```

### Advanced queries

```java
// Find all dead assignments automatically
List<J.Assignment> deadAssignments = liveVars.findDeadAssignments();

// Find unused variable declarations
List<J.VariableDeclarations.NamedVariable> unusedVars = 
    liveVars.findDeadVariableDeclarations();

// Get variables live at method exit (potential return values)
Set<String> liveAtExit = liveVars.getLiveAtExit();

// Check if any variables are live
boolean hasLiveVars = liveVars.hasLiveVariables();
```

## Common patterns and edge cases

### Assignment chains

```java
int x = 5;      // Dead - immediately overwritten
x = 10;         // Live - used below
int y = x * 2;  // x is used here
```

Liveness analysis correctly identifies that the first assignment is dead.

### Conditional assignments

```java
int result;
if (condition) {
    result = computeA();  // Live if condition is true
} else {
    result = computeB();  // Live if condition is false
}
return result;  // result used here
```

Both assignments are live because `result` is used after the if-statement.

### Loop variables

```java
for (int i = 0; i < n; i++) {
    sum += i;  // i is used
    // At loop end: i is live (used in increment and condition)
}
// After loop: i is dead (out of scope)
```

Loop variables have special liveness patterns due to back edges.

### Field access

Field access requires careful handling.

```java
class Container {
    int value;
    
    void process() {
        this.value = 10;    // Is this dead?
        other.value = 20;   // Different object's field
        // Need field-sensitive analysis
    }
}
```

OpenRewrite's implementation tracks fields separately when possible.

## Practical applications

### Dead code elimination

The most direct application.

```java
public void optimizeMethod() {
    LiveVariables liveVars = new LivenessAnalysis(cfg).analyze();
    
    // Remove dead assignments
    for (J.Assignment dead : liveVars.findDeadAssignments()) {
        removeStatement(dead);
    }
    
    // Remove unused variables
    for (var unused : liveVars.findDeadVariableDeclarations()) {
        removeDeclaration(unused);
    }
}
```

### Register allocation

Compilers use liveness for efficient register allocation.

```java
// Variables with non-overlapping live ranges can share registers
int x = compute1();  // Live: lines 1-3
use(x);
// x dead after here
int y = compute2();  // Live: lines 4-6
use(y);
// x and y can use the same register!
```

## Advanced topics

### Liveness with aliasing

When variables can alias, liveness becomes more complex.

```java
int[] arr1 = new int[10];
int[] arr2 = arr1;  // arr2 aliases arr1
arr2[0] = 5;        // Also affects arr1
// Both arr1 and arr2 are live if either is used
```

### Inter-procedural liveness

Tracking liveness across method calls.

```java
public int compute(int x) {
    int y = transform(x);  // Is x live after this?
    // Depends on whether transform modifies x
    // or if x is used after the call
    return y;
}
```

### Liveness in concurrent programs

Thread interactions affect liveness.

```java
volatile int shared;

void thread1() {
    shared = 10;  // Can't be dead - other threads might read
}
```

## Performance optimization

### Sparse representations

For large methods, use sparse representations.

```java
// Instead of tracking all variables at all points
Map<ProgramPoint, Set<Variable>> allLiveness;  // Dense

// Track only where changes occur
Map<ProgramPoint, LivenessChange> changes;     // Sparse
```

### Incremental updates

When code changes, update liveness incrementally.

```java
public void updateLiveness(Statement changed) {
    BasicBlock block = findContainingBlock(changed);
    
    // Only recompute from this block
    invalidateBlock(block);
    propagateChanges(block);
}
```

## Common pitfalls

### Side effects in expressions

Not all "dead" assignments can be removed.

```java
int x = sideEffect();  // Can't remove even if x is dead!
// The method call might have important effects
```

### Exception paths

Variables might be live only on exception paths.

```java
String error = "Starting";
try {
    error = "Processing";
    riskyOperation();
    error = "Success";  // Might seem dead but...
} catch (Exception e) {
    log.error(error);   // Used on exception path!
}
```

### Implicit uses

Some uses aren't obvious in the AST.

```java
public String toString() {
    return name;  // Implicit use of 'this.name'
}
```

## Testing liveness analysis

Always test with various patterns.
```java
@Test
void testConditionalLiveness() {
    rewriteRun(
        java("""
            class Test {
                int method(boolean flag) {
                    int x = 1;
                    if (flag) {
                        x = 2;
                    }
                    return x;  // x is live through all paths
                }
            }
            """)
    );
    
    // Verify both assignments are marked as live
}
```

## Integration with other analyses

Liveness analysis combines well with other analyses:

### With reaching definitions

```java
// Find uninitialized variable uses
if (liveVars.isLive(var, point) && !reachingDefs.hasDefinition(var, point)) {
    reportError("Uninitialized variable: " + var);
}
```

### With constant propagation

```java
// Only propagate constants to live variables
if (liveVars.isLive(var, point) && constants.isConstant(var)) {
    replaceWithConstant(var, constants.getValue(var));
}
```

## Next steps

* [Reaching Definitions Analysis](./reaching-definitions.md) - The complementary forward analysis
* [Building Your First Data Flow Analysis](./building-your-first-data-flow-analysis.md) - Hands-on tutorial using liveness
