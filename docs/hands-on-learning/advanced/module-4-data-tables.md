---
sidebar_label: "Module 4: Data tables"
description: Extract structured insights from source code using data tables.
---

# Module 4: Data tables

Data tables allow you to extract structured insights from a codebase without modifying the code itself. Instead of applying transformations, you collect data and present it in tabular form that can easily be used for reporting, analytics, or (as we'll see later) visualizations. Every recipe automatically emits some core metadata (like source path, project info, etc.), but you can also define custom data table columns to capture additional information.

## Exercise 4a: Exploring data tables

In this exercise, you’ll review the use of a data table to extract superclass relationships and present them in a structured format.

### Goals for this exercise

* See how to define and populate data tables in recipes.
* Learn how to run and inspect data table output using the Moderne platform or CLI.

### Steps

1. With the [`rewrite-recipe-starter`](https://github.com/moderneinc/rewrite-recipe-starter) still open in IntelliJ, open the `ClassHierarchy` recipe.
   * You can find this recipe in [src/main/java/com/yourorg/ClassHierarchy.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/ClassHierarchy.java).
2. Review the `ClassHierarchy` recipe to see how data tables are defined and populated.
   * Notice there is a `ClassHierarchyReport` member and that the `.insertRow(...)` method is called against it in the visitor.
   * This member is marked as `transient` to make sure it does not get serialized since it is only needed at runtime.
3. Now open [src/main/java/com/yourorg/table/ClassHierarchyReport.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/table/ClassHierarchyReport.java).
   * This is where the structure of the data table is defined. You can see that there is a `displayName` and `description` for each field, as well as a type.
   * In this case, there is also an `enum` defined. This can be a useful way to add more semantic meaning to the data instead of using arbitrary strings.
3. Now open the unit tests for `ClassHierarchy`.
   * You can find them in [src/test/java/com/yourorg/ClassHierarchyTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/ClassHierarchyTest.java).
   * You will also see that a `RecipeSpec` is provided using `assertThat(rows).containsExactly(...)` to test whether a data table is there and if it has the expected data or not.

### Takeaways

* Data tables extract insights without changing source code.
* They are ideal for visualizing patterns across a codebase.
* Recipes can define custom columns for targeted reporting.


## Exercise 4b: Writing a recipe that uses data tables

In this exercise, you'll expand on your recipe from the last module by also adding a data table to capture information as well.

### Goals for this exercise

* Learn how to define and populate a data table from a recipe.
* Understand how to structure output using `DataTable` and `insertRow(...)`.

### Steps

1. Open the unit test [src/test/java/com/yourorg/TrackTodosTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/TrackTodosTest.java) again.
   * Notice the code that is commented out at the top of each of the tests. Uncomment these lines in all six tests that are defined.
   * Just as in the example above, these lines test for the presence of the expected data tables.
   * Run the tests and see how they fail with an error that the expected data table is missing. You will need to add a data table that allows these tests to pass.
2. Now open [src/main/java/com/yourorg/table/TodoCommentsReport.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/table/TodoCommentsReport.java).
   * This code has been provided for you. It defines the fields for the data table that you will need to populate in the next step.
   * All of the members are type `String`, and the `sourcePath` one is identical to the example above.
3. Now open [src/main/java/com/yourorg/TrackTodos.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/TrackTodos.java) again.
   * Using the knowledge gained in Exercise 4a, add the necessary `.insertRow(...)` statements to populate the data table.
   * A convenient place to generate the data tables is in the `generate()` method since as the scanning phase is complete when at that point, so the accumulator is fully populated. This also cleanly separates the code that edits source from the code that outputs data tables.
   * Use the above example to help you populate `sourcePath`.
   * If you are having trouble with where to find the data for `elementType`, use `System.out.println()` or the debugger to find the right method that matches what the tests show.
      * Hint: Look at the `.getTree().getClass()` method.
4. Build your project and run the tests.
   * All tests should pass, and you should see a message that the project was successfully built.
   * If one or more of the tests fail, use the description of the failure to try to find where the problem is.
5. In case you get completely stuck or just need a reference, [here's an example of a completed `TrackTodos.java` file](https://github.com/moderneinc/rewrite-recipe-starter/blob/workshop-solutions/src/main/java/com/yourorg/TrackTodos.java).

### Takeaways

* Data tables let recipes report metadata without modifying source files.
* Debugging tools (like printing or stepping through with a debugger) can help find the right fields to populate a table.
