---
sidebar_label: "Module 8: Imperative recipes"
description: Exploring and writing Refaster recipes
---

# Module 8: Imperative recipes

For use cases beyond what declarative recipes and Refaster templates can handle, you'll want to look at [writing a Java refactoring recipe](https://docs.openrewrite.org/authoring-recipes/writing-a-java-refactoring-recipe).

You might want to refresh your memory on [visitor pattern](https://docs.openrewrite.org/concepts-and-explanations/visitors) and [Lossless Semantic Trees](https://docs.openrewrite.org/concepts-and-explanations/lossless-semantic-trees) before you dive in.

These [imperative recipes](https://docs.openrewrite.org/concepts-and-explanations/recipes#imperative-recipes) use the visitor pattern to traverse the LSTs, and make changes to the code. The `JavaTemplate` class is used to [create new LST elements](https://docs.openrewrite.org/authoring-recipes/modifying-methods-with-javatemplate), that can replace existing LST elements.

## Exercise 8a: Explore an imperative recipe

Let's look at an existing imperative recipe in the starter project, and see how it's implemented.

### Goals for this exercise

* Understand LST elements and how to traverse them.
* See how JavaTemplates are used to create new LST elements.
* Make small adjustments and see how they affect the recipe.

### Steps

1. Open `src/main/java/com/yourorg/NoGuavaListsNewArrayList.java` in IntelliJ IDEA.
   * Read through the recipe, and see how it matches three variants of Guava's `Lists.newArrayList()`.
   * Three replacement [`JavaTemplate`s](https://docs.openrewrite.org/concepts-and-explanations/javatemplate) are provided, to replace each of the Guava calls with `new ArrayList<>(..)`.
2. We override `visitCompilationUnit` to print the tree.
   * Notice the call to `super.visitCompilationUnit`, which is necessary to traverse the tree.
   * Click through on `super.visitCompilationUnit` to see how the tree is traversed.
   * Comment out the `super.visitCompilationUnit` and see how the recipe fails to make any changes.
3. We override `visitMethodInvocation` to replace each of the Guava calls.
   * See how we apply Preconditions here too, through the Java API, to limit which source files are visited.
   * Notice how we pass in a `Cursor` and `JavaCoordinates` when we apply the `JavaTemplate`. This is necessary to ensure that the changes are made in the correct location. Briefly explore the other coordinates available.
   * Notice the type parameters passed in to the `JavaTemplate`s, and how those match the arguments passing into `apply`.
   * The calls to `maybeAddImport` and `maybeRemoveImport` are necessary to ensure that the imports are correctly updated. These will only be added or removed if the first or last LST element using the import is added/removed.
4. The returned value of `visitMethodInvocation` is the result of the `JavaTemplate` application, which is used to determine if the recipe made any changes.
   * When none of the methods are matched, we still call `super.visitMethodInvocation` to ensure that the tree is traversed. Replace this with `return method;` and see which of the test cases fails to make changes.
   * You can intentionally return the original LST element in cases where you don't want to traverse further down the tree.
5. Open `src/test/java/com/yourorg/NoGuavaListsNewArrayListTest.java`.
   * Recall the structure of the test class, how it extends `RewriteTest`, and uses recipe and source specifications.
   * Notice how `@Test void noChangeNecessary()` asserts that no changes are made if the desired state is already reached. A common mistake we see in recipe development is that folks unconditionally make changes, which a test like this guards against.
6. Set a breakpoint in the `visitMethodInvocation` method, and run each of the tests.
   * Explore the LST in the debugger, and see all the elements present on the current element.
   * Compare the LST printed to the console with the diagrams in [our Java LST examples doc](https://docs.openrewrite.org/concepts-and-explanations/lst-examples).
7. Add a `TreeVisitingPrinter.printTreeAll(method)` to the `visitMethodInvocation` method, to see elements in more detail.
   * Run the tests again, and see the tree printed to the console.

### Takeaways

* Imperative recipes use the visitor pattern to traverse the LSTs, and make changes to the code.
* You are in full control of tree traversal, and can decide whether to traverse further down the tree.
* JavaTemplates are used to create new LST elements, that can replace existing LST elements.
* The `maybeAddImport` and `maybeRemoveImport` methods are necessary to ensure that the imports are correctly updated.
* The `TreeVisitingPrinter` can be used to print the LST elements in more detail, to help you understand the structure of the tree.

## Exercise 8b: Create an imperative recipe

INTRO

### Goals for this exercise

* GOAL 1
* GOAL 2
* ...

### Steps

1. STEP 1
   * ...
2. STEP 2
   * ...

### Takeaways

* TAKEAWAY 1
* TAKEAWAY 2
* ...

## Learn More

Now that you've learned all the basics of building recipes, you may:

* Review [conventions and best practices](../../user-documentation/recipes/conventions-and-best-practices) for writing OpenRewrite recipes. 
* See how you can [contribute to the OpenRewrite community](../../user-documentation/recipes/contributing-to-openrewrite).
* Learn about some of the more complex and powerful features of OpenRewrite in the [advanced workshop](../advanced/).
<!-- Potentially add another CTA to schedule training, book a demo, etc. -->