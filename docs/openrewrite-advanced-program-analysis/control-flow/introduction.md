---
description: Understanding control flow analysis and how it forms the foundation for advanced program analysis in OpenRewrite
---

# Introduction to Control Flow Analysis

Control flow analysis is a fundamental technique in program analysis that examines the order in which individual statements, instructions, or function calls are executed in a program. Think of it as creating a map of all possible paths through your code.

When you write a program, you're not just writing a linear sequence of instructions. You're creating a complex web of decisions, loops, and jumps. Control flow analysis helps us understand and reason about this web systematically.

## What is a Control Flow Graph?

A Control Flow Graph (CFG) is a representation of all paths that might be traversed through a program during its execution. If your program were a city, the CFG would be its road map, showing how you can travel from one location (statement) to another.

### Basic blocks: the core components

At the heart of a CFG are basic blocks. A basic block is a sequence of consecutive statements with an important property: if you execute the first statement, you must execute all the others in order. There's no way to jump into the middle of a basic block or leave before the end.

Consider this simple code:

```java
public int calculatePrice(int quantity) {
    int basePrice = 10;                        // Block 1 starts
    int discount = 0;                          // Block 1 continues
    
    if (quantity > 100) {                      // Block 1 ends
        discount = 5;                          // Block 2 (complete)
    } else {
        discount = 2;                          // Block 3 (complete)
    }
    
    int total = basePrice * quantity;          // Block 4 starts
    total = total - (total * discount / 100);  // Block 4 continues
    return total;                              // Block 4 ends
}
```

This method contains four basic blocks. The first three statements form one block because they always execute together. The if-statement creates a branch, leading to two separate blocks for the true and false cases. Finally, the last three statements form another block that always executes together.

### Control flow edges: the connections

Edges in a CFG represent the possible transfers of control between basic blocks. These aren't just simple arrows – they carry meaning about why control transfers from one block to another.

The main type of edges include:

* **Sequential edges** represent the normal flow from one statement to the next. When your if-statement completes, control flows to the next statement – that's a sequential edge.

* **Conditional edges** arise from decision points in your code. An if-statement creates two conditional edges: one for when the condition is true, another for when it's false. Switch statements can create many conditional edges, one for each case.

* **Loop edges** (also called **back edges**) occur when control can flow backward in the program, creating a cycle. These are crucial for understanding iteration.

* **Exception edges** represent the paths control can take when exceptions are thrown. These edges often lead to catch blocks or method exits.

:::info
Understanding edge types is crucial for many analyses. For example, loop optimization algorithms specifically look for back edges, while exception analysis focuses on exception edges.
:::

## Direct applications of control flow analysis

### Reachability analysis

One of the most fundamental questions we can ask about code is: "Can this statement ever execute?" Reachability analysis answers this by traversing the CFG from the entry point to see which blocks can be reached.

This isn't just academic – unreachable code is often a bug. Maybe a developer accidentally wrote a condition that's always false, or placed a statement after an unconditional return. Reachability analysis finds these issues automatically.

```java
public void process(String input) {
    if (input == null) {
        return;
    }

    //highlight-start
    if (input == null) {  // This check is unreachable!
        throw new IllegalArgumentException();
    }
    //highlight-end
    
    // Process the input...
}
```

### Loop analysis

Loops are where programs spend most of their time, making loop analysis critical for performance optimization. By analyzing the CFG, we can detect loops, understand their structure, and even estimate how many times they'll execute.

Loop analysis can identify nested loops (loops within loops), which are often performance hotspots. It can detect infinite loops by finding cycles in the CFG with no exit edges. It can even recognize common patterns like for-each loops or countdown loops, enabling specific optimizations.

### Exception flow analysis

Modern programs use exceptions extensively, but understanding how exceptions flow through a program can be challenging. Exception flow analysis traces the paths exceptions can take from where they're thrown to where they're caught (or where they escape the method).

This analysis helps identify methods that might throw undeclared exceptions, catch blocks that will never execute because the exception can't reach them, and resources that might leak when exceptions occur.

### Control dependency analysis

Sometimes we need to know which statements control the execution of other statements. For example, if statement B is inside an if-block controlled by condition A, then B is control-dependent on A. This relationship is crucial for many advanced analyses and transformations.

## Relationship to data flow analysis

Control flow graphs aren't just useful on their own – they form the foundation for data flow analysis. Data flow analysis tracks how data moves through your program, but it needs the CFG to know which paths the data can take.

**Forward data flow analyses** follow the direction of control flow. They're useful for tracking how values propagate through the program. Examples include:

* Reaching definitions (which assignments reach which uses)
* Available expressions (which computed values are still valid)
* Constant propagation (tracking constant values through the program)

**Backward data flow analyses** work against the direction of control flow. They're useful for understanding what the program needs at each point. Examples include:

* Liveness analysis (which variables will be used later)
* Very busy expressions (expressions computed on all paths forward)

Some analyses even work in both directions, gathering information from both predecessors and successors to achieve maximum precision.

:::tip
If you're new to program analysis, focus on understanding CFGs thoroughly before moving to data flow analysis. A solid grasp of control flow makes data flow concepts much easier to understand.
:::

## Next steps

Now that you understand the basics of control flow analysis, you can explore:

- [Building Control Flow Graphs](./building-cfgs.md) - Learn how to construct CFGs from source code
- [Reachability and Dominance Analysis](./reachability-dominance.md) - Dive deeper into graph algorithms
- [Loop Analysis Techniques](./loop-analysis.md) - Master the intricacies of loop detection and analysis
- [Data Flow Analysis](../data-flow/introduction.md) - See how CFGs enable powerful data analyses

:::info Want to Learn More?
For a deeper dive into the theory behind control flow analysis, check out the classic textbook "Compilers: Principles, Techniques, and Tools" by Aho, Lam, Sethi, and Ullman (often called the "Dragon Book"). Chapter 8 provides an excellent theoretical foundation.
:::