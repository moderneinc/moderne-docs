---
sidebar_label: "Module 4: Traits"
description: How to use traits to match semantically related elements.
---

# Module 4: Traits

Traits are a powerful abstraction that allow you to define higher-level semantic groupings in OpenRewrite’s LSTs (Lossless Syntax Trees). They let you build reusable logic for elements that are semantically similar but structurally different. Instead of embedding utility logic in unrelated classes or expanding the core LST APIs, traits act as opt-in behavior layers. This keeps your recipes modular, discoverable, and semantically rich.

For example, if you want to operate on all classes annotated with `@Bean`, regardless of their structure or placement, traits allow you to define a matcher that groups those together. We will look at this example in this module.

## Exercise 4a: Explore a recipe that uses Traits

In this exercise, you'll use the `Annotated.Matcher` trait that the [`FindSpringBeans`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/FindSpringBeans.java) recipe uses to identify classes annotated with `@Bean` and marks them using `SearchResult.found`.

### Goals for this exercise

* Understand the purpose of traits and when to use them.
* See how the `Annotated.Matcher` trait is used to build reusable match logic.

### Steps

1. With the [`rewrite-recipe-starter`](https://github.com/moderneinc/rewrite-recipe-starter) still open in IntelliJ, open the `FindSpringBeans` recipe.
   * You can find this recipe in [src/main/java/com/yourorg/FindSpringBeans.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/FindSpringBeans.java).
2. Review the `FindSpringBeans` recipe and note the comments in the file that describe how traits are being used.
   * Notice that the `getVisitor()` method returns an `Annotated.Matcher`. The `Annotated` trait provided by OpenRewrite allows for matching annotations or annotated elements. `SearchResult.found` is used to return a modified LST element with an added search result marker for matches. 
   * Notice how a `SearchResult` is returned. This will add a special marker comment to the code. This code also uses a data table to store the matches that it finds.
3. Now open the unit tests for `FindSpringBeans`.
   * You can find them in [src/test/java/com/yourorg/FindSpringBeansTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/FindSpringBeansTest.java).
   * See what the special comments that the `SearchResult` add look like in the expected after code: `/*~~(bean)~~>*/`.
   * You will also see an additional `RecipeSpec` provided to with an `assertThat` statement. This is testing for the presence of the expected data table. You will learn more about how to test data tables in the next module.

### Takeaways

* Traits provide higher-level abstraction over raw LSTs.
* The `Annotated.Matcher` trait can be used for annotation matching.
* Recipes that use traits can be more modular and maintainable.


## Exercise 4b: Write a recipe using traits

In the last exercise, you wrote a scanning recipe to track `TODO` comments in Java source files. What if you wanted to find these comments across not only Java, but also any XML and YAML files in your projects? It is possible to write different matching rules and then just expand your scanner and visitor methods to use those as they navigate the XML and YAML LSTs to find the comments. However, this is a good example of where using a trait can help simplify the recipe code and also create an opportunity for reuse in similar use cases.

In this exercise, you will write the code for a `TodoComment` trait that defines how to match `TODO` comments across Java, YAML, and XML source files. Then you will write a recipe that builds upon your Java-only recipe but instead uses this new trait to collect the comments from across all three different file types and capture it both in a file and a data table.

### Goals for this exercise

* Learn how to define a Trait to encapsulate cross-language patterns in the LST.
* Understand how Matcher classes generalize visitor logic across multiple source types.
* See how traits simplify scanning recipe logic by providing a consistent matching abstraction.

### Steps

1. Open the unit test [src/test/java/com/yourorg/TrackTodosTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/TrackTodosTest.java) in IntelliJ IDEA.
   * The first two tests should look familiar since they are the same as the tests from your exercise in the last modules.
   * Read through the additional tests, to get a feel for the new cases that need to be covered.
   * Notice how the `SourceSpecs` specify what kind of file is being tested (`java`, `yaml`, or `xml`).
   * Remove the `@Disabled` annotations, and run the tests to see that they fail. 
2. Now open the [src/main/java/com/yourorg/trait/TodoComment.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/trait/TodoComment.java) file.
   * You will see some of the code has been started for you. The `TodoComment` class implements a `Trait` with `cursor` and `todos` members to use while searching for values in the `Matcher` class that extends `SimpleTraitMatcher`.
   * The `test(Cursor cursor)` method has been overridden and partially filled in to help get you started. It starts by getting the value of the cursor that is passed in and then checking to see what type the value is to determine how you will need to match a comment depending on what kind of file it is.
3. Fill in the code for each section to match a `TODO` comment similarly to how you did in the last module, but for each different file type.
   * For the Java type, you can borrow some code from `JavaIsoVisitor` in the `getScanner(...)` method from `TrackJavaTodosFile.java` that you wrote in the last module.  
   * For the Xml and Yaml types, you'll have to explore the LST model a bit to determine how to match a comment.
      * The debugger or `TreeVisitingPrinter()` you learned about in the first module will help you understand more about the different LST models.
      * Hint: For Yaml, take a look at the `getPrefix(...)` method. For Xml, look at the `getMisc()` method in `Xml.Prolog` and the `getContent()` method in `Xml.Tag`.     
4. Now open the recipe template [src/main/java/com/yourorg/TrackTodos.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/TrackTodos.java).
   * Using the knowledge gained in Exercise 4a, and the requirements from the new tests, write a new version of a scanning recipe that collects all the `TODO` comments from all Java, XML, and YAML files and copies them in to the `TODO.md` file. For each comment found, also add it to a data table similarly to how you did in Module 2.
   * The code for the `getScanner()` method should be a lot simpler since you won't need to use two visitor types.
   * You'll still have similar code for handling the `TODO.md` file, but now instead of using two visitors to traverse both Java and text files, you can use a single `TreeVisitor` that uses `TodoComment.Matcher()` to match `TODO` comments regardless of what kind the file type (as long as it's Java, XML, or YAML).
   * Your `generate()` method will be the same as in your `TrackJavaTodosFile.java` file from the last module. Even `getVisitor()` should be almost identical. (The only difference is that you'll have a little bit of extra work to unravel your list of comments since it will now be a list of lists.)
5. Build your project and run the tests.
   * All tests should pass, and you should see a message that the project was successfully built.
   * If one or more of the tests fail, use the description of the failure to try to find where the problem is.
6. In case you get completely stuck or just need a reference, here's an example of a [completed `TrackTodos.java` file](https://github.com/moderneinc/rewrite-recipe-starter/blob/workshop-solutions/src/main/java/com/yourorg/TrackTodos.java), and a [completed `TodoComment.java` traits file](https://github.com/moderneinc/rewrite-recipe-starter/blob/workshop-solutions/src/main/java/com/yourorg/trait/TodoComment.java).

### Takeaways

* Traits help express reusable logic across multiple source types (e.g. Java, XML, YAML).
* Instead of writing multiple visitor implementations, you can use a single matcher to find relevant nodes.
* Scanning recipes can become simpler and more maintainable when combined with traits.
