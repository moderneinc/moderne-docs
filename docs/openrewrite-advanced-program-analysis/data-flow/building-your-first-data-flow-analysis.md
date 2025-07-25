---
description: Step-by-step guide to implementing a data flow analysis recipe using OpenRewrite's analysis framework.
---

# Building your first data flow analysis

This tutorial walks you through creating a practical data flow analysis recipe that detects dead code in Java programs. We'll build a recipe that finds assignments to variables that are never used – a common code quality issue.

:::info Prerequisites
This tutorial assumes you've read the [Introduction to data flow analysis](./introduction.md) and understand basic concepts like forward vs. backward analysis, transfer functions, and the role of control flow graphs.
:::

## The problem: dead assignments

Dead assignments waste resources and clutter code. They often indicate bugs where a developer forgot to use a computed value.

```java
public double calculateTotal(List<Item> items) {
    double total = 0;
    double tax = 0.08;
    
    for (Item item : items) {
        double discount = getDiscount(item);  // Computed but never used!
        total += item.getPrice();
    }
    
    double finalTax = total * tax;  // Also dead - return doesn't use it
    return total;
}
```

We'll use liveness analysis (a backward data flow analysis) to find these dead assignments automatically.

## Step 1: create the recipe structure

Let's start with the basic recipe structure.

```java
package com.example.analysis;

import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.TreeVisitor;
import org.openrewrite.analysis.java.controlflow.ControlFlowSupport;
import org.openrewrite.analysis.java.dataflow.LivenessAnalysis;
import org.openrewrite.analysis.java.dataflow.LiveVariables;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.tree.J;
import org.openrewrite.marker.SearchResult;

public class FindDeadAssignments extends Recipe {
    
    @Override
    public String getDisplayName() {
        return "Find dead assignments";
    }
    
    @Override
    public String getDescription() {
        return "Finds assignments to variables that are never subsequently used.";
    }
    
    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new DeadAssignmentVisitor();
    }
    
    private static class DeadAssignmentVisitor extends JavaIsoVisitor<ExecutionContext> {
        // We'll implement this next
    }
}
```

## Step 2: implement the visitor

The visitor will examine each assignment and use liveness analysis to determine if it's dead.

```java
private static class DeadAssignmentVisitor extends JavaIsoVisitor<ExecutionContext> {
    
    @Override
    public J.Assignment visitAssignment(J.Assignment assignment, ExecutionContext ctx) {
        // Use ControlFlowSupport for automatic CFG caching and management
        Boolean isDead = ControlFlowSupport.analyze(getCursor(), false, 
            (cursor, cfg) -> {
                // Run liveness analysis on the control flow graph
                LivenessAnalysis analysis = new LivenessAnalysis(cfg);
                LiveVariables liveVars = analysis.analyze();
                
                // Check if this specific assignment is dead
                return isAssignmentDead(assignment, liveVars);
            });
        
        if (Boolean.TRUE.equals(isDead)) {
            return SearchResult.found(assignment, 
                "Dead assignment - value is never used");
        }
        
        return super.visitAssignment(assignment, ctx);
    }
    
    private boolean isAssignmentDead(J.Assignment assignment, LiveVariables liveVars) {
        // Extract the variable being assigned
        String varName = extractVariableName(assignment.getVariable());
        if (varName == null) {
            return false;  // Can't analyze complex assignments
        }
        
        // A variable is dead if it's not live after the assignment
        return !liveVars.isLive(varName, assignment);
    }
    
    private String extractVariableName(J expr) {
        if (expr instanceof J.Identifier) {
            return ((J.Identifier) expr).getSimpleName();
        } else if (expr instanceof J.FieldAccess) {
            // For now, only handle simple field access
            return ((J.FieldAccess) expr).getSimpleName();
        }
        return null;
    }
}
```

## Step 3: handle variable declarations

Dead assignments often occur in variable declarations with initializers.

```java
@Override
public J.VariableDeclarations.NamedVariable visitVariable(
        J.VariableDeclarations.NamedVariable variable, ExecutionContext ctx) {
    
    if (variable.getInitializer() == null) {
        return super.visitVariable(variable, ctx);  // No initializer to check
    }
    
    Boolean isDead = ControlFlowSupport.analyze(getCursor(), false,
        (cursor, cfg) -> {
            LivenessAnalysis analysis = new LivenessAnalysis(cfg);
            LiveVariables liveVars = analysis.analyze();
            
            // Check if the variable is ever live after initialization
            String varName = variable.getSimpleName();
            
            // The variable is dead if it's never used after declaration
            return !liveVars.isLive(varName, variable);
        });
    
    if (Boolean.TRUE.equals(isDead)) {
        return SearchResult.found(variable, 
            "Variable '" + variable.getSimpleName() + "' is never used after initialization");
    }
    
    return super.visitVariable(variable, ctx);
}
```

## Step 4: leverage the livevariables API

The `LiveVariables` result type provides convenient methods beyond basic queries.

```java
private void demonstrateAdvancedFeatures(LiveVariables liveVars) {
    // Find all dead assignments automatically
    List<J.Assignment> deadAssignments = liveVars.findDeadAssignments();
    
    // Find unused variable declarations
    List<J.VariableDeclarations.NamedVariable> deadVars = 
        liveVars.findDeadVariableDeclarations();
    
    // Get all variable names that are live somewhere
    Set<String> allLiveVars = liveVars.getAllLiveVariableNames();
    
    // Check what's live at method exit (potential return values)
    Set<String> liveAtExit = liveVars.getLiveAtExit();
}
```

## Step 5: create a comprehensive dead code recipe

Let's combine everything into a more complete recipe.

```java
public class ComprehensiveDeadCodeFinder extends Recipe {
    
    @Override
    public String getDisplayName() {
        return "Find all dead code";
    }
    
    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.MethodDeclaration visitMethodDeclaration(
                    J.MethodDeclaration method, ExecutionContext ctx) {
                
                // Analyze the entire method at once
                Set<J> deadCode = new HashSet<>();
                Map<J, String> messages = new HashMap<>();
                
                J.MethodDeclaration analyzed = ControlFlowSupport.analyze(getCursor(), method,
                    (cursor, cfg) -> {
                        LivenessAnalysis analysis = new LivenessAnalysis(cfg);
                        LiveVariables liveVars = analysis.analyze();
                        
                        // Collect dead code
                        for (J.Assignment dead : liveVars.findDeadAssignments()) {
                            deadCode.add(dead);
                            messages.put(dead, "Dead assignment detected");
                        }
                        
                        for (var dead : liveVars.findDeadVariableDeclarations()) {
                            deadCode.add(dead);
                            messages.put(dead, "Unused variable: " + dead.getSimpleName());
                        }
                        
                        return method;
                    });
                
                // Mark dead code if found
                if (!deadCode.isEmpty()) {
                    return (J.MethodDeclaration) new MarkAsSearchResult(deadCode, messages)
                        .visit(analyzed, ctx);
                }
                
                return analyzed;
            }
        };
    }
    
    private static class MarkAsSearchResult extends JavaIsoVisitor<ExecutionContext> {
        private final Set<J> targets;
        private final Map<J, String> messages;
        
        MarkAsSearchResult(Set<J> targets, Map<J, String> messages) {
            this.targets = targets;
            this.messages = messages;
        }
        
        @Override
        public J visit(@Nullable Tree tree, ExecutionContext ctx) {
            if (tree instanceof J && targets.contains(tree)) {
                return SearchResult.found((J) tree, messages.get(tree));
            }
            return super.visit(tree, ctx);
        }
    }
}
```

## Testing your recipe

Here's how to test your dead code finder.

```java
import org.junit.jupiter.api.Test;
import org.openrewrite.test.RecipeSpec;
import org.openrewrite.test.RewriteTest;

import static org.openrewrite.java.Assertions.java;

class FindDeadAssignmentsTest implements RewriteTest {
    
    @Override
    public void defaults(RecipeSpec spec) {
        spec.recipe(new FindDeadAssignments());
    }
    
    @Test
    void detectsDeadAssignment() {
        rewriteRun(
            java(
                """
                class Test {
                    void method() {
                        int x = 5;  // Dead - reassigned before use
                        x = 10;
                        System.out.println(x);
                    }
                }
                """,
                """
                class Test {
                    void method() {
                        ~~>int x = 5;  // Dead - reassigned before use
                        x = 10;
                        System.out.println(x);
                    }
                }
                """
            )
        );
    }
    
    @Test
    void detectsUnusedVariable() {
        rewriteRun(
            java(
                """
                class Test {
                    void calculate() {
                        int used = 10;
                        int unused = 20;  // Never used
                        return used * 2;
                    }
                }
                """,
                """
                class Test {
                    void calculate() {
                        int used = 10;
                        ~~>int unused = 20;  // Never used
                        return used * 2;
                    }
                }
                """
            )
        );
    }
    
    @Test
    void ignoresLiveAssignments() {
        rewriteRun(
            java(
                """
                class Test {
                    void process() {
                        String message = "Hello";  // Used below
                        System.out.println(message);
                        
                        int sum = 0;  // Used in loop
                        for (int i = 0; i < 10; i++) {
                            sum += i;
                        }
                        return sum;
                    }
                }
                """
            )
        );
    }
}
```

## Performance considerations

When implementing data flow analyses, keep these tips in mind:

### CFG construction and caching

Building CFGs is expensive. Always use `ControlFlowSupport` for automatic caching and lazy evaluation. See [Building Control Flow Graphs](../control-flow/building-cfgs.md) for detailed information about CFG caching strategies.

### Analyze at the right granularity

* For spot checks (is this assignment dead?), analyze individual statements
* For comprehensive analysis (find all dead code), analyze entire methods at once
* Avoid analyzing the same method multiple times

### Leverage result type methods

The specialized result types like `LiveVariables` provide optimized implementations of common queries. Use `findDeadAssignments()` instead of manually iterating through all assignments.

## Next steps

Now that you've built your first data flow analysis, you can:

1. **Extend to Other Analyses**: Try implementing reaching definitions or available expressions
2. **Add Inter-procedural Analysis**: Track liveness across method calls
3. **Optimize Further**: Add special handling for common patterns like loop variables
4. **Create Fix Recipes**: Don't just detect dead code – automatically remove it

:::tip Building on This Foundation
The pattern shown here works for any data flow analysis. Just swap `LivenessAnalysis` for `ReachingDefinitionsAnalysis`, `TaintAnalysis`, or your custom analysis. Always use `ControlFlowSupport` to ensure proper CFG caching.
:::

## Common pitfalls and solutions

### Field access complexity

This example handles only simple field access. Real implementations need to consider:
* Static vs. instance fields
* Qualified field access (`this.field`, `super.field`)
* Fields accessed through method calls

### Side effects

Some "dead" assignments might have side effects.

```java
int result = calculateAndLog();  // Method has side effects!
// Even if result is unused, we can't remove this
```

### Exception paths

Variables might be "live" only on exception paths.

```java
String message = "Starting process";
try {
    doRiskyOperation();
    message = "Success";  // Might seem dead but...
} catch (Exception e) {
    log.error(message);   // Used on exception path!
}
```

## Conclusion

You've successfully built a data flow analysis recipe that solves a real problem. The key takeaways:

1. Use `ControlFlowSupport` for CFG management
2. Leverage the convenient methods in result types like `LiveVariables`
3. Test thoroughly with various code patterns
4. Consider performance and edge cases

This same pattern applies to any data flow analysis – just choose the appropriate analysis type and use its result API to query the information you need.