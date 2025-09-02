---
sidebar_label: "Module 3: Scanning recipes"
description: How to write recipes that analyze files before applying changes.
---

# Module 3: Scanning recipes

[Scanning recipes](https://docs.openrewrite.org/concepts-and-explanations/recipes#scanning-recipes) are used when a recipe needs to generate new source files or inspect all source files before making any changes. This is especially useful when a transformation in one file depends on content or structure in another. For example, a scanning recipe may examine a Maven `pom.xml` to check for a particular dependency and, based on its presence, update a YAML configuration file. This cross-file reasoning is a powerful capability unique to scanning recipes.

Before moving on to the following exercise, you should review the [OpenRewrite documentation](https://docs.openrewrite.org/concepts-and-explanations/recipes#scanning-recipes) for more details about the different phases of scanning recipes work and how they work.

## Exercise 3a: Explore a scanning recipe

In this exercise, you'll explore the [`AppendToReleaseNotes`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/AppendToReleaseNotes.java) recipe. This is a scanning recipe that appends release notes to a file based on a marker found elsewhere in the project. 

### Goals for this exercise

* Learn how scanning recipes differ from regular transformation recipes.
* Understand how scanning recipes enable reasoning across multiple files before making changes.
* See how to manage shared state across recipe phases using an accumulator.

### Steps

1. With the [`rewrite-recipe-starter`](https://github.com/moderneinc/rewrite-recipe-starter) still open in IntelliJ, open the `AppendToReleaseNotes` recipe.
   * You can find this recipe in [src/main/java/com/yourorg/AppendToReleaseNotes.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/AppendToReleaseNotes.java).
2. Review the `AppendToReleaseNotes` recipe and notice the differences from recipes you may have seen before.
   * Note that it extends `ScanningRecipe` rather than just `Recipe`, and that there is an `Accumulator` member defined to keep track of the data needed by the visitor.
   * Also, in addition to the `getVisitor()` method, there are three additional overrides: `generate()` and `getScanner()`. All three methods also define an `Accumulator` parameter. There is also an overridden `getInitialValue()` method that returns a new `Accumulator`.
3. Now open the unit tests for `AppendToReleaseNotes`.
   * You can find them in [src/test/java/com/yourorg/AppendToReleaseNotesTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/AppendToReleaseNotesTest.java).
4. Review the unit tests to see some of the specifics about testing a scanning recipe.
   * Notice how `@Test void createNewReleaseNotes() { ... }` uses `org.openrewrite.test.SourceSpecs.text(java.lang.String, java.lang.String, ...)` to provide a before and after text block, with the third parameter using `spec -> spec.path(Path.of("RELEASE.md")` to set the path where the source file either exists or should be created.
   * The before text block is `doesNotExist()` to indicate that the file does not exist initially. Conversely, you can pass in `doesNotExist()` as the second argument to indicate that the file should be deleted.

## Takeaways

* Scanning recipes enable inspection and generation across multiple files.
* A custom class can be used as an accumulator to allow state to be shared among the phases of a scanning recipe.
* Tests for scanning recipes can simulate creation or modification of files using `doesNotExist()` or empty strings.


## Exercise 3b: Write a scanning recipe

In this exercise, you'll write a scanning recipe to find any comments in Java source files that contain `TODO` and track them all together in a separate markdown file.

### Goals for this exercise

* Learn how to use a scanning recipe to collect data across source files.
* Understand how to use different visitor types for analyzing and generating files.
* See how scanning recipes support conditional file creation based on project structure.

### Steps

1. Open the unit test [src/test/java/com/yourorg/TrackJavaTodosFileTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/TrackJavaTodosFileTest.java) in IntelliJ IDEA.
   * Read through the tests, to get a feel for the cases you should cover.
   * One new concept you might notice is the addition of the `noTrim()` method on the [`SourceSpec`](https://docs.openrewrite.org/authoring-recipes/recipe-testing#sourcespec). This ensures that newlines are preserved in the test source strings so that end-of-file formatting will match in both the "before" and  "after" cases. 
   * Remove the `@Disabled` annotations, and run the tests to see that it fails. 
2. Now open the scanning recipe template [src/main/java/com/yourorg/TrackJavaTodosFile.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/TrackJavaTodosFile.java).
   * Using the knowledge gained in Exercise 3a, and the requirements from the test, write a scanning recipe that collects all the `TODO` comments and copies them in to a file called `TODO.md`.   
   * Note that it extends `ScanningRecipe` rather than just `Recipe`, and that there is an `Accumulator` member defined to keep track of the data needed by the visitor.
   * You'll need to override three methods: `getVisitor()`, `generate()` and `getScanner()`. All three methods also define an accumulator parameter class called `TodoComments`. The accumulator and the `getInitialValue()` method have already been defined for you.
   * In this case, the accumulator class (`TodoComments`) has members for both a `boolean` value to maintain whether the `TODO.md` file exists or not (similar to the previous exercise), as well as a list of strings to collect the comments that are found.
   * There is also an option already to defined that allows you to pass in a `String` to use as the header for the markdown file.
3. Add the necessary code inside `getScanner()` to traverse the necessary LST elements.
   * You'll need to use two different visitors: `JavaIsoVisitor` to visit all the Java source files, and `TreeVisitor` to visit the markdown file that you will be writing the comments to.
      * Since you can only return one visitor, you'll have to create an instance of one visitor type and then call `.visit(...)` on it from within the `visit(...)` method of the visitor that you will return.
   * The visitor for the plain text will be similar to the previous exercise to check if the markdown file already exists.
   * In the `JavaIsoVisitor`, you will be looking for any instances of a comment in the LST.
      * The Java LST has a `Comment` element that can be of either type `TextComment` or `JavadocComment`. You can choose to handle both if you'd like, but for the purposes of this exercise, collecting `TextComment`s only is just fine.
   * For every comment that you find, you'll want to store it in the list defined in your `TodoComments` accumulator class.
4. Add code inside `generate()` to create the `TODO.md` file if it doesn't already exist.
   * Use the `generate()` code from the `AppendToReleaseNotes` example in the previous exercise as a reference. This code will be extremely similar to that.
5. Finally, write the code for the `getVisitor()` method to transform write the collected comments to the markdown file.
   * Again, this will be similar to the previous example since you are also writing to a plain text file.
   * You can use the `.withText(...)` method to return a plain text file with a given `String`, but you'll need to build the `String` from the list of comments in your accumulator. It should contain the full contents of the markdown to write to the file.
6. Build your project and run the tests.
   * All tests should pass, and you should see a message that the project was successfully built.
   * If one or more of the tests fail, use the description of the failure to try to find where the problem is.
7. In case you get completely stuck or just need a reference, [here's an example of a completed `TrackJavaTodosFile.java` file](https://github.com/moderneinc/rewrite-recipe-starter/blob/workshop-solutions/src/main/java/com/yourorg/TrackJavaTodosFile.java).

### Takeaways

* Scanning recipes can combine analysis, state collection, and file generation.
* Visitors can be nested or composed to traverse different LST types.
