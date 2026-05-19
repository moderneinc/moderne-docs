---
sidebar_label: "Bonus: Traits"
description: How to use traits to match semantically related elements.
---

# Bonus module: Traits

:::info
This is an optional bonus module that builds directly on the scanning recipe you wrote in [Module 3](./module-3-scanning-recipes.md). Modules 1–3 cover the core advanced workshop content — complete those first, then come back here if you want to go further.
:::

Traits are a higher-level abstraction over OpenRewrite's LSTs (Lossless Semantic Trees) that let you build reusable logic for elements that are semantically similar but structurally different. Instead of embedding utility logic in unrelated classes or expanding the core LST APIs, traits act as opt-in behavior layers — keeping your recipes modular, discoverable, and semantically rich. For example, to operate on every class annotated with `@Bean` regardless of structure or placement, a trait can define a single matcher that groups them all together. You'll work through that example next.

## Exercise 4a: Explore a recipe that uses Traits

In this exercise, you'll use the `Annotated.Matcher` trait that the [`FindSpringBeans`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/FindSpringBeans.java) recipe uses to identify classes annotated with `@Bean` and marks them using `SearchResult.found`.

### Goals for this exercise

* Understand the purpose of traits and when to use them.
* See how the `Annotated.Matcher` trait is used to build reusable match logic.

### Steps

1. In the `rewrite-recipe-starter` project, open [`FindSpringBeans.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/FindSpringBeans.java) and read the comments describing how traits are used. Note that `getVisitor()` returns an `Annotated.Matcher` (OpenRewrite's `Annotated` trait matches annotations and annotated elements) and `SearchResult.found` is used to mark matches and write them to a data table.
2. Open [`FindSpringBeansTest.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/FindSpringBeansTest.java) and note the `SearchResult` marker syntax in the expected after-blocks (`/*~~(bean)~~>*/`), plus the `RecipeSpec` `assertThat` that verifies the data table contents (data tables are covered in [Module 2](./module-2-data-tables.md)).

### Takeaways

* Traits provide higher-level abstraction over raw LSTs.
* The `Annotated.Matcher` trait can be used for annotation matching.
* Recipes that use traits can be more modular and maintainable.


## Exercise 4b: Write a recipe using traits

The Java-only `TODO` scanning recipe from [Module 3](./module-3-scanning-recipes.md) could be extended to handle XML and YAML by adding more visitors and matching rules, but a trait is a cleaner fit — it encapsulates the cross-language match logic in one reusable place. In this exercise, you'll write a `TodoComment` trait that matches `TODO` comments across Java, YAML, and XML, then build a recipe that uses it to collect those comments into a file and a data table.

### Goals for this exercise

* Learn how to define a Trait to encapsulate cross-language patterns in the LST.
* Understand how Matcher classes generalize visitor logic across multiple source types.
* See how traits simplify scanning recipe logic by providing a consistent matching abstraction.

### Steps

1. Open the unit test [`TrackTodosTest.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/TrackTodosTest.java). The first two tests should look familiar from Module 3; the additional tests cover XML and YAML cases, and the `SourceSpecs` indicate which file type (`java`, `yaml`, or `xml`) is being tested. Remove the `@Disabled` annotations and run the tests — they fail.
2. Open [`trait/TodoComment.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/trait/TodoComment.java) — a `Trait` with `cursor` and `todos` members and a nested `Matcher` extending `SimpleTraitMatcher`. The `test(Cursor cursor)` method is partially filled in: it reads the cursor's value and branches on its LST type to decide how to match a comment.
3. Fill in each section to match `TODO` comments for that file type. For Java, you can borrow the `JavaIsoVisitor` logic from `TrackJavaTodosFile.getScanner(...)` (Module 3). For XML and YAML, explore the LST model with the debugger or `TreeVisitingPrinter` from Module 1.
   * Hint: For YAML, look at `getPrefix(...)`. For XML, look at `Xml.Prolog.getMisc()` and `Xml.Tag.getContent()`.
4. Open the recipe template [`TrackTodos.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/TrackTodos.java) and write a scanning recipe that collects `TODO` comments from Java, XML, and YAML files into `TODO.md` and also records each comment in a data table (as in [Module 2](./module-2-data-tables.md)).
   * `getScanner()` is simpler than in Module 3: a single `TreeVisitor` using `TodoComment.Matcher()` handles all three file types, so you no longer need two visitor types.
   * `generate()` is identical to `TrackJavaTodosFile.generate()` from Module 3, and `getVisitor()` is nearly identical — you'll just need to flatten what is now a list of lists of comments.
5. Build your project and run the tests. They should all pass. If any fail, use the failure description to locate the problem.
6. If you get stuck, see the completed [`TrackTodos.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/workshop-solutions/src/main/java/com/yourorg/TrackTodos.java) and [`TodoComment.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/workshop-solutions/src/main/java/com/yourorg/trait/TodoComment.java) for reference.

### Takeaways

* Traits help express reusable logic across multiple source types (e.g. Java, XML, YAML).
* Instead of writing multiple visitor implementations, you can use a single matcher to find relevant nodes.
* Scanning recipes can become simpler and more maintainable when combined with traits.
