---
sidebar_label: "Module 2: Data tables"
description: Extract structured insights from source code using data tables.
---

# Module 2: Data tables

Data tables allow you to extract structured insights from a codebase without modifying the code itself. Instead of applying transformations, you collect data and present it in tabular form that can easily be used for reporting, analytics, or (as you'll see later) visualizations. Every recipe run produces some default data tables (such as which source files had results), and every data table includes some common columns by default (like source path). Beyond these defaults, you can also define custom data tables with their own columns to capture additional information.

## Exercise 2a: Exploring data tables

In this exercise, you’ll review the use of a data table to extract superclass relationships and present them in a structured format.

### Goals for this exercise

* See how to define and populate data tables in recipes.
* See how a data table's structure is defined and how its contents are verified in tests.

### Steps

1. In the `rewrite-recipe-starter` project, open [`ClassHierarchy.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/ClassHierarchy.java) and note the `transient ClassHierarchyReport` member and the `.insertRow(...)` call in the visitor. (It is `transient` so it is not serialized, since it is only needed at runtime.)
2. Open [`table/ClassHierarchyReport.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/table/ClassHierarchyReport.java) to see how the data table is defined: each column has a `displayName`, `description`, and type, and an `enum` is used to give the data more semantic meaning than arbitrary strings.
3. Open [`ClassHierarchyTest.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/ClassHierarchyTest.java) and note how a `RecipeSpec` with `assertThat(rows).containsExactly(...)` verifies the data table contents.

### Takeaways

* Data tables extract insights without changing source code.
* They are ideal for visualizing patterns across a codebase.
* Recipes can define custom columns for targeted reporting.

## Exercise 2b: Writing a recipe that uses data tables

In this exercise, you'll write a recipe to find any comments in Java source files that contain `TODO` and capture them in a data table.

### Goals for this exercise

* Learn how to define and populate a data table from a recipe.
* Understand how to structure output using `DataTable` and `insertRow(...)`.

### Steps

1. Open the unit test [`TrackJavaTodosTest.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/TrackJavaTodosTest.java). The lines at the top test for the presence of the expected data table. Remove the `@Disabled` annotations and run the tests — they fail because the data table is missing.
2. Open [`table/TodoCommentsReport.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/table/TodoCommentsReport.java). This is provided for you and defines the data table fields you will populate. All members are `String`, and `sourcePath` is identical to the `ClassHierarchy` example.
3. Open [`TrackJavaTodos.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/TrackJavaTodos.java) and, using what you saw in Exercise 2a, add the `.insertRow(...)` statements to populate the data table.
   * Populate `sourcePath` the same way as the `ClassHierarchy` example.
   * For `elementType`, use `System.out.println()` or the debugger to find the right method. Hint: look at `.getTree().getClass()`.
4. Build your project and run the tests. They should all pass. If any fail, use the failure description to locate the problem.
5. If you get stuck, see the [completed `TrackJavaTodos.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/workshop-solutions/src/main/java/com/yourorg/TrackJavaTodos.java) for reference.

### Takeaways

* Data tables let recipes report metadata without modifying source files.
* Debugging tools (like printing or stepping through with a debugger) can help find the right fields to populate a table.
