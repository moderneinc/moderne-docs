---
sidebar_label: "Module 6: Imperative recipes"
description: Exploring and writing imperative recipes.
---

# Module 6: Imperative recipes

For use cases beyond what declarative recipes and Refaster templates can handle, you'll want to look at [writing a Java refactoring recipe](https://docs.openrewrite.org/authoring-recipes/writing-a-java-refactoring-recipe).

These [imperative recipes](https://docs.openrewrite.org/concepts-and-explanations/recipes#imperative-recipes) use the visitor pattern to traverse the Lossless Semantic Trees (LSTs), and make changes to the code. The `JavaTemplate` class is used to [create new LST elements](https://docs.openrewrite.org/authoring-recipes/modifying-methods-with-javatemplate) that can replace existing LST elements while preserving the code style and formatting around it.

The following concepts in the [OpenRewrite documentation](https://docs.openrewrite.org/) are important to understand, particularly when writing imperative OpenRewrite recipes:

1. [Lossless Semantic Trees](https://docs.openrewrite.org/concepts-and-explanations/lossless-semantic-trees)
   * [Java LST examples](https://docs.openrewrite.org/concepts-and-explanations/lst-examples)
   * [YAML LST examples](https://docs.openrewrite.org/concepts-and-explanations/yaml-lst-examples)
   * [TreeVisitingPrinter](https://docs.openrewrite.org/concepts-and-explanations/tree-visiting-printer)
2. [Visitors](https://docs.openrewrite.org/concepts-and-explanations/visitors)
   * [Cursoring](https://docs.openrewrite.org/concepts-and-explanations/visitors#cursoring)
   * [Isomorphic vs. non-isomorphic](https://docs.openrewrite.org/concepts-and-explanations/visitors#isomorphic-vs-non-isomorphic-visitors)
3. [Recipes](https://docs.openrewrite.org/concepts-and-explanations/recipes)

These concepts should give you some sense as to the importance of exact type attribution, and how visitors are used to traverse and modify the LST. Without these, it would be next to impossible to write recipes that make changes to your code reliably.

## Exercise 6a: Explore an imperative recipe

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
   * The call to `TreeVisitingPrinter.printTree(cu)` returns a string that is then printed to the console.
   * Notice the call to `super.visitCompilationUnit`, which is necessary to traverse the tree.
   * Click through on `super.visitCompilationUnit` to see how the tree is traversed.
   * Comment out the `return super.visitCompilationUnit` line (and uncomment `return cu;`) and see how the recipe fails to make any changes.
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

### Takeaways

* Imperative recipes use the visitor pattern to traverse the LSTs, and make changes to the code.
* You are in full control of tree traversal, and can decide whether to traverse further down the tree.
* JavaTemplates are used to create new LST elements, that can replace existing LST elements.
* The `maybeAddImport` and `maybeRemoveImport` methods are necessary to ensure that the imports are correctly updated.
* The `TreeVisitingPrinter` can be used to print the LST elements in more detail, to help you understand the structure of the tree.

## Exercise 6b: Write an imperative recipe

Let's write an imperative recipe in Java that replaces uses of `new Integer(x)` with `Integer.valueOf(x)` when `x` is an `int`, and `Integer.parseInt(x)` when `x` is a `String`.

### Goals for this exercise

* Get experience building new code elements (like method calls) to replace existing ones.
* Practice building an imperative recipe using JavaTemplate to transform LST elements.

### Steps

1. Open the unit test [src/test/java/com/yourorg/UseIntegerValueOfTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/UseIntegerValueOfTest.java) in IntelliJ IDEA.
   * Read through the tests, to get a feel for the cases you should cover.
   * Remove the `@Disabled` annotation, and run the tests to see that it fails. 
2. Now open the imperative recipe template [src/main/java/com/yourorg/UseIntegerValueOf.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/UseIntegerValueOf.java).
   * Using the knowledge gained in Exercise 6a, and the requirements from the test, write an imperative recipe that uses `JavaTemplate` to match the `Integer` boxing constructors and replace them with the correct method calls.
   * Start by overriding and populating the `getDisplayName()` and `getDescription()` methods.
   * Now override the `getVisitor()` method. This is where you will define all of the logic for what changes to make to the LST.
3. Add the necessary code inside `getVisitor()` to transform the LST accordingly.
   * Consider including a precondition so the recipe only visits source files that use the constructor.
   * Determine whether to use a `JavaVisitor` or a `JavaIsoVisitor`. (Here's a hint in [the OpenRewrite documentation](https://docs.openrewrite.org/concepts-and-explanations/visitors#isomorphic-vs-non-isomorphic-visitors).)
   * Decide what method to overwrite depending on what type of LST elements you need to visit. You can reference the complete list of [Java LST examples](https://docs.openrewrite.org/concepts-and-explanations/lst-examples#java-lst-types) for help.
   * Don't forget the call to the superclass version of the method as in Exercise 6a.
   * Consider using a method from `org.openrewrite.java.tree.TypeUtils` to help make decisions based on element or argument types. 
   * You will use `JavaTemplate.builder(...).build().apply(...)` to make the necessary changes and return that result.
4. Build your project and run the tests.
   * All tests should pass, and you should see a message that the project was successfully built.
   * If one or more of the tests fail, use the description of the failure to try to find where the problem is.
5. In case you get completely stuck or just need a reference, [here's an example of a completed `UseIntegerValueOf.java` file](https://github.com/moderneinc/rewrite-recipe-starter/blob/workshop-solutions/src/main/java/com/yourorg/UseIntegerValueOf.java).
6. _(Optional)_ This recipe is useful as an example for the purposes of this workshop, but it actually could more easily have been written as a Refaster recipe rather than as an imperative one. See if you can write a recipe that does the same thing only using Refaster templates instead.

### Takeaways

* `JavaVisitor` (or `JavaIsoVisitor`) targets specific LST nodes, and `JavaTemplate` builds replacements with preserved formatting.
* Type inspection with `TypeUtils` can enable conditional logic in your transformations.
* Tests help define the expected behavior of your recipe and ensure it handles all relevant cases correctly.

## Learn More

Now that you've learned all the basics of building recipes, you may:

* Review [conventions and best practices](../../user-documentation/recipes/conventions-and-best-practices) for writing OpenRewrite recipes. 
* See how you can [contribute to the OpenRewrite community](../../user-documentation/recipes/contributing-to-openrewrite).
* Learn about some of the more complex and powerful features of OpenRewrite in the [advanced workshop](../advanced/).
