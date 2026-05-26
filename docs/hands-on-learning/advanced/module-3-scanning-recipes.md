---
sidebar_label: "Module 3: Scanning recipes"
description: How to write recipes that analyze files before applying changes.
---

# Module 3: Scanning recipes

[Scanning recipes](https://docs.openrewrite.org/concepts-and-explanations/recipes#scanning-recipes) are used when a recipe needs to generate new source files or inspect all source files before making any changes. This is especially useful when a transformation in one file depends on content or structure in another. For example, a scanning recipe may examine a Maven `pom.xml` to check for a particular dependency and, based on its presence, update a YAML configuration file. This cross-file reasoning is a powerful capability unique to scanning recipes.

Before moving on to the following exercise, you should review the [OpenRewrite documentation](https://docs.openrewrite.org/concepts-and-explanations/recipes#scanning-recipes) for more details about the different phases of scanning recipes and how they work.

## Exercise 3a: Explore a scanning recipe

In this exercise, you'll explore the [`AppendToReleaseNotes`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/AppendToReleaseNotes.java) recipe. This is a scanning recipe that appends release notes to a file based on a marker found elsewhere in the project.

### Goals for this exercise

* Learn how scanning recipes differ from regular transformation recipes.
* Understand how scanning recipes enable reasoning across multiple files before making changes.
* See how to manage shared state across recipe phases using an accumulator.

### Steps

1. In the `rewrite-recipe-starter` project, open [`AppendToReleaseNotes.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/AppendToReleaseNotes.java). Note that it extends `ScanningRecipe` rather than `Recipe`, has an `Accumulator` member to share state across phases, and overrides `getInitialValue()`, `getScanner()`, `generate()`, and `getVisitor()` (each passing the `Accumulator`).
2. Open [`AppendToReleaseNotesTest.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/AppendToReleaseNotesTest.java) and look at `createNewReleaseNotes()`. It uses `SourceSpecs.text(before, after, spec -> spec.path(Path.of("RELEASE.md")))` to set the file path, with `doesNotExist()` as the before block to indicate the file is created (pass it as the after block instead to indicate deletion).

### Takeaways

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

1. Open the unit test [`TrackJavaTodosFileTest.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/TrackJavaTodosFileTest.java), read through the cases you need to cover, then remove the `@Disabled` annotations and run the tests to see them fail.
2. Open the scanning recipe template [`TrackJavaTodosFile.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/TrackJavaTodosFile.java). Using Exercise 3a and the test requirements, write a scanning recipe that collects all `TODO` comments into a file called `TODO.md`.
   * You'll override `getScanner()`, `generate()`, and `getVisitor()`. The `TodoComments` accumulator and `getInitialValue()` are already defined for you. `TodoComments` has a `boolean` for whether `TODO.md` exists and a list of strings for the collected comments, plus an option for a `String` markdown header.
3. In `getScanner()`, use two visitors: a `JavaIsoVisitor` to visit Java source files and a `TreeVisitor` for the markdown file. Since you can only return one visitor, create one and call `.visit(...)` on it from within the `visit(...)` of the visitor you return.
   * The plain-text visitor checks whether `TODO.md` already exists (as in Exercise 3a).
   * In the `JavaIsoVisitor`, look for `Comment` elements and store each match in the accumulator's list. A `Comment` is either a `TextComment` or `JavadocComment`; collecting only `TextComment`s is fine here.
4. In `generate()`, create `TODO.md` if it doesn't already exist — this is nearly identical to the `AppendToReleaseNotes` `generate()` from Exercise 3a.
5. In `getVisitor()`, write the collected comments to the markdown file. Use `.withText(...)` to return the plain-text file, building the full markdown `String` from the accumulator's list of comments.
6. Build your project and run the tests. They should all pass. If any fail, use the failure description to locate the problem.
7. If you get stuck, see the [completed `TrackJavaTodosFile.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/workshop-solutions/src/main/java/com/yourorg/TrackJavaTodosFile.java) for reference.

### Takeaways

* Scanning recipes can combine analysis, state collection, and file generation.
* Visitors can be nested or composed to traverse different LST types.
