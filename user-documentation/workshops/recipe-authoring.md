# OpenRewrite recipe authoring workshop

OpenRewrite is a framework for writing and running code transformations.
Recipes are the unit of work in OpenRewrite, and can be written in YAML, Refaster, or imperative Java.

In this workshop, we'll look at various aspects of writing recipes;
from simple YAML recipes, to more complex imperative recipes, and how to test, debug and run recipes at scale.

This workshop is designed to be hands-on, so you can follow along with the examples in your own environment.
The workshop consists of the materials you see here, and a set of exercises to help you practice what you've learned.
Be sure to also follow links to the [OpenRewrite documentation](https://docs.openrewrite.org/) for more in-depth information.
Feel free to skip around to the sections that interest you most, based on your needs and experience level.
If you get stuck, or have questions, feel free to ask in the [OpenRewrite Slack](https://join.slack.com/t/rewriteoss/shared_invite/zt-nj42n3ea-b~62rIHzb3Vo0E1APKCXEA) or [Discord](https://discord.gg/xk3ZKrhWAb).

## Running existing recipes

Before writing your own recipes it can be helpful to know what recipes are already available and how to run them.
The [OpenRewrite recipe catalog](https://docs.openrewrite.org/recipes) contains a list of recipes that are available to run.
You can also browse the rich view at [app.moderne.io](https://app.moderne.io/marketplace) to immediately see the recipes in action.

There's various ways to run recipes, depending on your needs.

1. The Open Source [Rewrite Maven plugin](https://docs.openrewrite.org/reference/rewrite-maven-plugin) and [Rewrite Gradle plugin](https://docs.openrewrite.org/reference/gradle-plugin-configuration) allow you to run recipes against a single local project.
   - Both plugins are free and open source, and can be used on any project, without any connection to Moderne.
   - Build up an in memory model of your project for every recipe run.

2. The [OpenRewrite IntelliJ IDEA plugin](https://plugins.jetbrains.com/plugin/23814-openrewrite) allows you to run recipes against a single project, and to write and run recipes in the IDE.
    - Free to use on any project, without any connection to Moderne.
    - Supports writing and running YAML recipes only, for now.

3. The [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) allows you to run recipes against multiple projects locally, and to debug recipes at scale.
   - Free to use on Open Source projects, and [requires a Moderne CLI license](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/moderne-cli-license) for private projects.
   - Serializes the LST of your project to disk, and runs recipes against that serialized LST.

4. The Moderne Platform allows you to run recipes at scale through a UI, create data visualizations, and track progress over time.
   - Supports some 37.000 Open Source projects and organizations for free
   - Requires a company subscription for private projects.

Learn more about [the differences between OpenRewrite and Moderne](https://docs.openrewrite.org/#refactoring-at-scale-with-moderne).

### Exercise 1: Run a recipe from the OpenRewrite recipe catalog against your own project.
There's a wealth of recipes available to run, so to get comfortable running recipes, try running some of the recipes from the [OpenRewrite recipe catalog](https://docs.openrewrite.org/recipes) against your own projects.

#### Goals for this exercise
- See what recipes are already available in the OpenRewrite recipe catalog.
- See the types of changes that can be made to your code.
- Explore the options available to run recipes against your own project(s).

#### Steps
1. Pick a project you'd like to run a recipe against.
   - Ideally a smallish Java project using Maven or Gradle.
   - If you don't have a project handy, you can use [the Spring PetClinic](https://github.com/spring-projects/spring-petclinic)
2. Ensure you have a fresh checkout of your project, with no uncommitted changes.
3. Choose a recipe from the [OpenRewrite recipe catalog](https://docs.openrewrite.org/recipes) that you'd like to run.
   - For example, [upgrade to Java 21](https://docs.openrewrite.org/recipes/java/migrate/upgradetojava21).
   - Or [order imports](https://docs.openrewrite.org/recipes/java/orderimports).
   - Or [migrate to AssertJ](https://docs.openrewrite.org/recipes/java/testing/assertj/assertj), from Hamcrest & JUnit.
   - Resolve [common static analysis issues](https://docs.openrewrite.org/recipes/staticanalysis/commonstaticanalysis), as seen in the [SonarQube rules](https://rules.sonarsource.com/java).
   - Or apply [Spring Boot 3.x best practices](https://docs.openrewrite.org/recipes/java/spring/boot3/springboot3bestpractices).
   - Or [optimize your logging statements](https://docs.openrewrite.org/recipes/java/logging/slf4j/slf4jbestpractices).
   - Any of the other [popular recipes guides](https://docs.openrewrite.org/running-recipes/popular-recipe-guides).
4. Follow the instructions on the recipe page to run the recipe against your project.
   - Note that you can run without changing the build for both [Maven](https://docs.openrewrite.org/running-recipes/running-rewrite-on-a-maven-project-without-modifying-the-build) and [Gradle](https://docs.openrewrite.org/running-recipes/running-rewrite-on-a-gradle-project-without-modifying-the-build).
   - The Moderne CLI [requires a one time `mod build .`](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro#build) to serialize the LST of your project, before you can `mod run` recipes.
   - The OpenRewrite IntelliJ IDEA plugin shows a runnable icon next to recipes in a `rewrite.yml` file.
     <details>
       <summary>Example `rewrite.yml` file</summary>

       ```yaml
       type: specs.openrewrite.org/v1beta/recipe
       name: org.myUser.MyRecipe
       displayName: My custom recipe
       description: Fix all the things.
       recipeList:
       - org.openrewrite.java.OrderImports
       ```
     </details>
   - The Moderne Platform requires you to [sign in with a GitHub account](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/running-your-first-recipe), before running recipes.
5. Review the changes made by the recipe, and ensure they are what you expected.
6. Optionally, commit the changes made by the recipe to a new branch in your project, or discard them.
7. Go back to the recipe page; click on the link to the source code of the recipe on GitHub.
   - See if you can correlate the changes made by the recipe with the code in the recipe.

#### Takeaways
- There's some 2500 recipes already available to run, covering a wide range of use cases.
- Recipes can make changes to Java source files, properties files, XML files, build files and more.
- It's not necessary to change your build to run recipes, but it can be helpful to add the plugins when running recipes repeatedly.
- Any recipe page in the docs links to the source code of the recipe on GitHub, so you can see how it's implemented.
- The tests for the recipe are also available, so you can see how the recipe behaves in various scenarios.
- The Moderne CLI and Platform allow you to run recipes at scale, to see how recipes behave in practice.
- Notice how most recipes are packaged into separate rewrite recipe modules, that you add as plugin dependency or `recipeArtifactCoordinates`.
  - There's separate modules for static code analysis, Spring recipes, Java recipes, testing recipes, logging recipes, and [many more under the OpenRewrite GitHub organization](https://github.com/openrewrite/).

If you're specifically interested in migrating Spring Boot applications, then we have a dedicated workshop you can follow to [migrate your own project to Spring Boot 3.x](https://docs.moderne.io/user-documentation/workshops/migrate-your-own-project).

## Recipe development environment

Now that you've seen how to run recipes, let's look at how to write your own recipes.

You'll want to have the following installed:

- Java 17 or higher, as our [RewriteTests](https://docs.openrewrite.org/authoring-recipes/recipe-testing#rewritetest-interface) use text blocks
  - Recipes use Java 8 source level, such that they can run on Java 8 and higher
- IntelliJ IDEA 2024.1+ Ultimate
    - In particular [the OpenRewrite plugin](https://plugins.jetbrains.com/plugin/23814-openrewrite), to run and write YAML recipes
    - Optionally, [the Moderne plugin](https://plugins.jetbrains.com/plugin/17565-moderne), for faster recipe development
- A local git clone of https://github.com/moderneinc/rewrite-recipe-starter, as a starting point for your own recipe module
- Optionally, [the Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro), to run recipes at scale locally, and debug against serialized LSTs

### Exercise 2: Create your own recipe module

#### Goals for this exercise:
- Set up a new recipe module in your IDE, based on the [rewrite-recipe-starter](https://github.com/moderneinc/rewrite-recipe-starter) project.
- Run the unit tests for the recipe module, to ensure everything is set up correctly.
- Install your recipe module to your local Maven repository, to run it against your own projects.

#### Steps
1. Git clone the [rewrite-recipe-starter](https://github.com/moderneinc/rewrite-recipe-starter).
   - You can either clone the project at is, or use it as a template to create a new GitHub repository.
2. Open the project in IntelliJ IDEA.
   - You have the option to import the project as a Maven project, or as a Gradle project. Pick the one you're most comfortable with.
3. Next you'll want to [customize your IntelliJ IDEA settings](https://docs.openrewrite.org/authoring-recipes/recipe-development-environment).
   - Then [follow these tips for faster feedback](https://docs.openrewrite.org/reference/building-openrewrite-from-source#developing-tips) from your unit tests.
4. Run the unit tests in the project, to ensure everything is set up correctly.
   - All tests should pass, and you should see a message that the project was successfully built.
5. Customize the project `groupId` and `artifactId` in the `pom.xml` file, or `build.gradle` and `settings.gradle` file.
   - This helps make the project your own, and allows you to version and share your recipes without conflicts.
6. Install the project to your local Maven repository.
   - Run `mvn install` from the root of the project, or `./gradlew publishToMavenLocal` if you're using Gradle.
   - You should see a message that the project was successfully installed to your local Maven repository.
7. Run recipe `com.yourorg.AssertEqualsToAssertThat` against your project from Exercise 1.
   - You'll need to add a dependency on your recipe module to your project, or provide `-Drewrite.recipeArtifactCoordinates=com.yourorg:rewrite-recipe-starter:LATEST` on the commandline.
   - You should see limited changes to your project if you were using JUnit's `Assertions assertEquals(..)` method.
8. Briefly look over the various recipes and tests in the starter project; We'll visit these in more details in upcoming exercises.

#### Takeaways
- The Rewrite recipe starter project is a good starting point for your own recipe module.
- There's various types of recipes included in the starter project, to give you a feel for how they're implemented.
- The unit tests in the starter project take in text blocks that assert the state before and after running a recipe.

## Fundamental concepts
Before we dive into writing recipes, let's take a look at some fundamental concepts that underpin OpenRewrite.

Read up on the following concepts in the [OpenRewrite documentation](https://docs.openrewrite.org/), to get a better understanding of how OpenRewrite works:

1. [Lossless Semantic Trees](https://docs.openrewrite.org/concepts-explanations/lossless-semantic-trees)
   - [Java LST examples](https://docs.openrewrite.org/concepts-explanations/lst-examples)
   - [Yaml LST examples](https://docs.openrewrite.org/concepts-explanations/yaml-lst-examples)
   - [TreeVisitingPrinter](https://docs.openrewrite.org/concepts-explanations/tree-visiting-printer)
2. [Visitors](https://docs.openrewrite.org/concepts-explanations/visitors)
   - [Cursoring](https://docs.openrewrite.org/concepts-explanations/visitors#cursoring)
   - [Isomorphic vs. non-isomorphic](https://docs.openrewrite.org/concepts-explanations/visitors#isomorphic-vs.-non-isomorphic-visitors)
3. [Recipes](https://docs.openrewrite.org/concepts-explanations/recipes)

These concepts should give you some sense as to the importance of exact type attribution, and how visitors are used to traverse and modify the LST.
Without these, it would be next to impossible to write recipes that make changes to your code reliably.

### Three types of recipes
It's important to note there are different types of recipes, each with their own tradeoffs.
1. [Declarative recipes](https://docs.openrewrite.org/authoring-recipes/types-of-recipes#declarative-recipes) are the simplest to write, and are the most common type of recipe. They are written in YAML, and often tie together existing recipe building blocks with some light configuration.
2. [Refaster rules ](https://docs.openrewrite.org/authoring-recipes/types-of-recipes#refaster-templates)bring you the benefit of compiler support, and work best for straightforward replacements. They generate recipes that can also be used as a starting point for more complex recipe implementations.
3. [Imperative recipes](https://docs.openrewrite.org/authoring-recipes/types-of-recipes#imperative-recipes) are the most powerful, and allow you to write Java code to implement your recipe. By [using the `JavaTemplate` builder](https://docs.openrewrite.org/authoring-recipes/modifying-methods-with-javatemplate), you can keep complexity down, as you define arbitrary code changes.

No matter which method of recipe development you choose, you can always [write unit tests for your recipe](https://docs.openrewrite.org/authoring-recipes/recipe-testing).
Beyond that there are [best practices for writing recipes](https://docs.openrewrite.org/authoring-recipes/recipe-conventions-and-best-practices), such as ensuring idempotence, and avoiding harmful changes.

## Declarative YAML recipes
As a best practice, if your recipe can be declarative (meaning it can be built out of other recipes), then you should make it declarative.
Generally, the declarative building blocks handle the heavy lifting, and your recipe just ties them together with some configuration.
The building blocks have also been vetted to handle various cases correctly, such as only adding dependencies as needed, or correctly changing the Lossless Semantic Tree element types.

### Exercise 3: Write a declarative YAML recipe
Let's have a look at a simple declarative YAML recipe, and expand that to cover an additional use case.

#### Goals for this exercise
- Write a declarative YAML recipe that ties together existing recipes.
- Configure a recipe with options, to convert and additional use case.

#### Steps
1. Open the `rewrite-recipe-starter` project in IntelliJ IDEA
   - If you don't have IntelliJ IDEA 2024.1 Ultimate, you'll lack bundled editor support for writing and running recipes.
   - You can also compose recipes in [the Moderne Platform recipe builder](https://app.moderne.io/recipes/builder), and run them against Open Source projects.
2. Open the Rewrite yaml file `src/main/resources/META-INF/rewrite/stringutils.yml`.
   - Notice how the file is structured, with a `type`, `name`, `displayName`, `description`, and `recipeList` fields.
   - Comment out the `type:` and see how that disables the OpenRewrite support.
3. Note how the `recipeList` field is a list of fully qualified class names of recipes, with options.
   - Click through on the `AddDependency` and `ChangeType` recipes to open their definition.
   - Have your IDE suggest options to existing recipes by triggering auto-completion.
4. The migration recipe is a great start, but far from complete; 
   Let's add a recipe to change from [Spring's `trimWhitepace(String)`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/util/StringUtils.html#trimWhitespace(java.lang.String)) to [Apache Common's `StringUtils.strip(String)`](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/StringUtils.html#strip-java.lang.String-).
   - Add a new recipe to the end of the `recipeList` field, [for `org.openrewrite.java.ChangeMethodName`](https://docs.openrewrite.org/recipes/java/changemethodname).
   - Pass in `methodPattern: org.apache.commons.lang3.StringUtils trimWhitespace(java.lang.String)` and `newMethodName: strip`.
   - Notice how [the method pattern](https://docs.openrewrite.org/reference/method-patterns) refers to a method that does not exist: Apache Commons does not have a `trimWhitespace` method, but the Spring does. That's because we first execute the `ChangeType`, which updates the LST type elements which we match against in subsequent recipes. That's important to keep in mind when chaining recipes together.
5. Open the unit test `src/test/java/com/yourorg/UseApacheStringUtilsTest.java`.
   - Notice how we implement `RewriteTest`, override `defaults(RecipeSpec)` to run our recipe, configure a classpath for the tests that has both `commons-lang3` and `spring-core` on it.
   - Run the first test; note how we invoke `rewriteRun(SourceSpecs...)`, pass in a single `java(String, String)` source specification, that takes in a before and after text block.
   - The `//language=java` [language injection](https://www.jetbrains.com/help/idea/using-language-injections.html) enables syntax highlighting and code completion in the text block.
   - All together, this asserts that when we run the recipe, that we assert that an input `before` text block, is converted into the `after` text block.
6. Add a unit test for the `ChangeMethodName` recipe we added for `trimWhitespace` to `strip`.
   <details>
   <summary> `@Test void trimWhitespace() { ... }` </summary>

   ```java
   @Test
   void trimWhitespace() {
       rewriteRun(
         //language=java
         java(
           """
             import org.springframework.util.StringUtils;
             
             class A {
                 boolean test(String s) {
                     return StringUtils.trimWhitespace(s);
                 }
             }
             """,
           """
             import org.apache.commons.lang3.StringUtils;
             
             class A {
                 boolean test(String s) {
                     return StringUtils.strip(s);
                 }
             }
             """
         )
       );
   }
   ```
   </details>
   - Run the new unit test, and verify that the correct changes are indeed made. 

#### Takeaways
- Declarative recipes are the simplest to write, and are the most common type of recipe.
- Common building blocks can be configured and combined to compose more complex migrations.
- Recipes can be chained together, to make multiple changes to your code in a single run.
- When changing types, keep in mind the order of recipes, and the types to match partway through a migration in subsequent recipes.
- Unit tests as always are a great way to ensure your recipe behaves as expected.

### Preconditions
[Preconditions](https://docs.openrewrite.org/reference/yaml-format-reference#preconditions) are used to limit which source files a recipe is run on.
This is commonly used to target specific files or directories, but any recipe which is not a `ScanningRecipe` can be used as a precondition.

When a recipe is used as a precondition, any file it would make a change to is considered to meet the precondition. When more than one recipe are used as preconditions, all of them must make a change to the file for it to be considered to meet the precondition.

Preconditions also mean other recipes don't all individually need to support options to limit themselves to particular paths for instance, as the precondition can do that for them.

### Exercise 4: Adding preconditions to a recipe
Let's update the `stringutils.yml` recipe to only run on sources that are likely tests, by adding a precondition using [the `org.openrewrite.java.search.IsLikelyTest` recipe](https://docs.openrewrite.org/recipes/java/search/islikelytest).

#### Goals for this exercise
- Discover common preconditions, and how to combine those with recipes.

#### Steps
1. Open the Rewrite yaml file `src/main/resources/META-INF/rewrite/stringutils.yml` once again.
2. Add a `preconditions` field to the recipe, in between the `description` and `recipeList` fields.
   - Add a single `org.openrewrite.java.search.IsLikelyTest` recipe to the list of preconditions, with no options.
   - Ignore the `Schema validation: Property 'precondition' is not allowed` from IntelliJ; it very much is allowed.
3. Open the unit test `src/test/java/com/yourorg/UseApacheStringUtilsTest.java`.
   - Run the tests; verify that neither test makes any changes right now.
   - Add static import on `org.openrewrite.java.Assertions.srcTestJava`
   - Wrap the `java(String, String)` methods with `srcTestJava()` to indicate that the sources are tests.
   - Run the tests again, and verify that they now pass.
4. Explore other `Find` recipes in the OpenRewrite recipe catalog
   - [org.openrewrite.FindSourceFiles](https://docs.openrewrite.org/recipes/core/findsourcefiles), to match specific files or directories.
   - [org.openrewrite.java.migrate.search.FindJavaVersion](https://docs.openrewrite.org/recipes/java/migrate/search/findjavaversion), to match specific Java versions.
   - [org.openrewrite.java.search.FindTypes](https://docs.openrewrite.org/recipes/java/search/findtypes), to find type references by name.

#### Takeaways
- Preconditions are used to limit which source files a recipe is run on.
- Common preconditions can be used to target specific files or directories.
- When a recipe is used as a precondition, any file it would make a change to is considered to meet the precondition.
- Preconditions themselves do not make changes to the source code, but are used to limit which files a recipe is run on.

## Testing recipes
When developing recipes, it's very important to test them to ensure that they not only make the expected changes but that they also don't make unnecessary changes.

OpenRewrite has extensive support for [testing recipes through the `RewriteTest` interface](https://docs.openrewrite.org/authoring-recipes/recipe-testing), which allows you to write tests that assert the state of the LST before and after running a recipe.
In addition to verifying the textual output, the unit testing framework also makes assertions on the underlying types and structure of the LST, as that might otherwise negatively affect recipe composition.
The testing framework will tell you when there are issues with the type information, and help you to correct them.

There's various ways to provide a [recipe specification](https://docs.openrewrite.org/authoring-recipes/recipe-testing#recipespec); from reading a recipe from any YAML resource through `recipeFromResources`, to reading a recipe from a specific resource, or constructing a Java recipe directly and passing that in.

Similarly, there's various ways to pass in [source specifications](https://docs.openrewrite.org/authoring-recipes/recipe-testing#sourcespec);
each parser has an `Assertions` class to provide test source files of a specific type.
Source specifications can take in a single text block to assert no changes are made to a file, or a pair of text blocks to assert that a file is changed from one state to another.
An optional final argument can consume a [`SourceSpec`](https://github.com/openrewrite/rewrite/blob/main/rewrite-test/src/main/java/org/openrewrite/test/SourceSpec.java) to provide additional configuration, or make assertions before or after the recipe is run.

### Exercise 5: Explore the various unit tests in the starter project
Let's explore the unit tests in the starter project, to see what elements you can take from each for your own tests. 

#### Goals for this exercise
- Understand how to write unit tests for your recipes.
- Learn how to assert the state of the LST before and after running a recipe.
- Explore the various ways to provide recipe and source specifications.

#### Steps
1. Open `src/test/java/com/yourorg/AppendToReleaseNotesTest.java`.
   - Notice how the recipe specification directly constructs a `JavaRecipe` and passes that in. This is most convenient when testing imperative recipes.
   - Notice how `@Test void createNewReleaseNotes() { ... }` uses `org.openrewrite.test.SourceSpecs.text(java.lang.String, java.lang.String)` to provide a before and after text block.
   - The before text block is `null` to indicate that the file does not exist initially. Conversely, you can pass in `null` as the second argument to indicate that the file should be deleted.
   - `@Test void editExistingReleaseNotes()` uses an additional `spec -> spec.path(Paths.get("RELEASE.md")` to set the source file, such that the recipe will match.
2. Open `src/test/java/com/yourorg/AssertEqualsToAssertThatTest.java`.
   - Note how `.parser(JavaParser.fromJavaVersion().classpath("junit-jupiter-api"))` is called on the recipe specification.
   - Try commenting out the `classpath("junit-jupiter-api")` and run the test.
   - The resulting `java.lang.IllegalStateException: LST contains missing or invalid type information` indicates that the type information is missing, and that the test classpath is likely not correctly set up.
3. Open `src/test/java/com/yourorg/NoGuavaListsNewArrayListTest.java`.
   - Read the various comments throughout this test class.
   - Try to make minimal changes in the recipe and see how they affect the tests.
4. Open `src/test/java/com/yourorg/ClassHierarchyTest.java`.
   - Note how each `rewriteRun` consumes a `Recipespec` to assert the `dataTable` rows produced in the recipe run.
   - Correlate this to the `insertRow` calls in the recipe, to see how the recipe produces the expected output.
5. Open `src/test/java/com/yourorg/SimplifyTernaryTest.java`.
   - Note how the instantiated recipe is a generated class, not the Refaster template class itself.
   - See how `@Test void unchanged() { ... }` asserts no changes are made where those would be unsafe to make.

#### Takeaways
- The `RewriteTest` interface allows you to write tests that assert the state of the LST before and after running a recipe.
- `RecipeSpec`s can be constructed in various ways, for each of the recipe types.
- `SourceSpec`s can take one, two or three arguments, depending on the type of assertion you want to make.
- Each parser has an `Assertions` class to provide test source files of a specific type.
- The testing framework will tell you when there are issues with the type information, and help you to correct them.

## Refaster recipes
OpenRewrite has support for [writing Refaster recipes](https://docs.openrewrite.org/authoring-recipes/refaster-recipes), which are a way to write code transformations in Java, and have them run as recipes.

Refaster recipes are an easy step-up to writing imperative recipes, as they are written in Java, and can be run as recipes.
Your compiler will help you catch syntax errors, and you can use your IDE to navigate to definitions and references.
The generated recipes can also be used as a starting point for more complex recipe implementations.

### Exercise 6: Explore Refaster recipe support
Let's look at an existing Refaster recipe in the starter project, and see how it's implemented.

#### Goals for this exercise
- Understand how OpenRewrite supports Refaster recipes.
- See how Refaster recipes are written in Java, and how they can be run as recipes.

#### Steps
1. Open the Refaster template `src/main/java/com/yourorg/SimplifyTernary.java`
   - Read through the template, and see how it matches a ternary expression that can be simplified.
   - Note how we're only using a limited subset of Refaster's capabilities, as not everything is supported yet.
2. Open the unit test `src/test/java/com/yourorg/SimplifyTernaryTest.java`
   - Read through the test, and see how each tenary is simplified, and wrapped as necessary.
3. Click through on the `com.yourorg.SimplifyTernaryRecipes` class, to see the generated recipe.
   - Note how the `SimplifyTernaryRecipes` extends `Recipe` and overrides `getRecipeList()` to return two recipes.
   - Each inner recipe returns a visitor that extends `AbstractRefasterJavaVisitor`.
   - There's before and after `JavaTemplate`s that are used to match and replace the ternary expressions.
   - The `visitTernary` method is overridden to match the ternary expressions, and replace them with the simplified version.
4. Click through on the `org.openrewrite.java.template.internal.AbstractRefasterJavaVisitor`.
   - Notice the embedding options, and how those call out to subsequent visitors for cleanups and simplifications.
   - Now look back at the visitors in `SimplifyTernaryRecipes` to see which embedding options are enabled there.
5. Open the build files `pom.xml` and `build.gradle` to see how the Refaster recipes are generated.
   - Notice the [`rewrite-templating`](https://github.com/openrewrite/rewrite-templating) dependency and annotation processor. This is what enables generating the Refaster template recipes.
6. If you have [the Moderne plugin 4.0+](https://plugins.jetbrains.com/plugin/17565-moderne) for IntelliJ IDEA installed, you can generate Refaster recipes directly from the IDE.
   - Right click on any Java element in your editor, and select "Generate... > Create Recipe (Refaster Style)"
   - A scratch file will be created that you can customize, and add to your recipe module.
7. See if you can write a Refaster recipe that standardizes various ways to check if a String is empty or not.
   - You can have multiple `@BeforeTemplate` methods, to match different ways to check for an empty string.
   - Compare the generated recipe with the template you wrote, and write tests to cover the various cases.

#### Takeaways
- Refaster templates are converted into regular OpenRewrite recipes, and can be run as such.
- Common base classes, and embedding options lighten the load in implementing Refaster templates.
- Some 400+ recipes from [Picnic's ErrorProne Support](https://error-prone.picnic.tech/) have made it into [rewrite-third-party](https://github.com/openrewrite/rewrite-third-party) and [the app.moderne.io marketplace](https://app.moderne.io/marketplace/tech.picnic.errorprone.refasterrules). 

## Imperative recipes
For use cases beyond what declarative recipes and Refaster templates can handle, you'll want to look at [writing a Java refactoring recipe](https://docs.openrewrite.org/authoring-recipes/writing-a-java-refactoring-recipe).
You might want to refresh your memory on [visitor pattern](https://docs.openrewrite.org/concepts-explanations/visitors) and [Lossless Semantic Trees](https://docs.openrewrite.org/concepts-explanations/lossless-semantic-trees) before you dive in.
These [imperative recipes](https://docs.openrewrite.org/concepts-explanations/recipes#imperative-recipes) use the visitor pattern to traverse the LSTs, and make changes to the code.
The `JavaTemplate` class is used to [create new LST elements](https://docs.openrewrite.org/authoring-recipes/modifying-methods-with-javatemplate), that can replace existing LST elements.

### Exercise 7: Explore an imperative recipe
Let's look at an existing imperative recipe in the starter project, and see how it's implemented.

#### Goals for this exercise
- Understand LST elements and how to traverse them.
- See how JavaTemplates are used to create new LST elements.
- Make small adjustments and see how they affect the recipe.

#### Steps
1. Open `src/main/java/com/yourorg/NoGuavaListsNewArrayList.java` in IntelliJ IDEA.
   - Read through the recipe, and see how it matches three variants of Guava's `Lists.newArrayList()`.
   - Three replacement [`JavaTemplate`s](https://docs.openrewrite.org/concepts-explanations/javatemplate) are provided, to replace each of the Guava calls with `new ArrayList<>(..)`.
2. We override `visitCompilationUnit` to print the tree.
   - Notice the call to `super.visitCompilationUnit`, which is necessary to traverse the tree.
   - Click through on `super.visitCompilationUnit` to see how the tree is traversed.
   - Comment out the `super.visitCompilationUnit` and see how the recipe fails to make any changes.
3. We override `visitMethodInvocation` to replace each of the Guava calls.
   - See how we apply Preconditions here too, through the Java API, to limit which source files are visited.
   - Notice how we pass in a `Cursor` and `JavaCoordinates` when we apply the `JavaTemplate`. This is necessary to ensure that the changes are made in the correct location. Briefly explore the other coordinates available.
   - Notice the type parameters passed in to the `JavaTemplate`s, and how those match the arguments passing into `apply`.
   - The calls to `maybeAddImport` and `maybeRemoveImport` are necessary to ensure that the imports are correctly updated. These will only be added or removed if the first or last LST element using the import is added/removed. 
4. The returned value of `visitMethodInvocation` is the result of the `JavaTemplate` application, which is used to determine if the recipe made any changes.
   - When none of the methods are matched, we still call `super.visitMethodInvocation` to ensure that the tree is traversed. Replace this with `return method;` and see which of the test cases fails to make changes.
   - You can intentionally return the original LST element in cases where you don't want to traverse further down the tree.
5. Open `src/test/java/com/yourorg/NoGuavaListsNewArrayListTest.java`.
   - Recall the structure of the test class, how it extends `RewriteTest`, and uses recipe and source specifications.
   - Notice how `@Test void noChangeNecessary()` asserts that no changes are made if the desired state is already reached. A common mistake we see in recipe development is that folks unconditionally make changes, which a test like this guards against.
6. Set a breakpoint in the `visitMethodInvocation` method, and run each of the tests.
   - Explore the LST in the debugger, and see all the elements present on the current element.
   - Compare the LST printed to the console with the diagrams in [our Java LST examples doc](https://docs.openrewrite.org/concepts-explanations/lst-examples).
7. Add a `TreeVisitingPrinter.printTreeAll(method)` to the `visitMethodInvocation` method, to see elements in more detail.
   - Run the tests again, and see the tree printed to the console.

#### Takeaways
- Imperative recipes use the visitor pattern to traverse the LSTs, and make changes to the code.
- You are in full control of tree traversal, and can decide whether to traverse further down the tree.
- JavaTemplates are used to create new LST elements, that can replace existing LST elements.
- The `maybeAddImport` and `maybeRemoveImport` methods are necessary to ensure that the imports are correctly updated.
- The `TreeVisitingPrinter` can be used to print the LST elements in more detail, to help you understand the structure of the tree.

## Advanced recipe development
Beyond the basics of writing recipes, there are a number of advanced topics that you might want to explore on your own.

### Working with dependencies
When writing recipes, you might want to add dependencies to your project, to use types from those dependencies in your recipes.
When you need to support recipes across multiple major versions, you'll want to look at [using multiple versions of a library in a project](https://docs.openrewrite.org/authoring-recipes/multiple-versions).

### Scanning recipes
When creating new recipes, you may find it desirable to examine multiple source files, potentially of different types, to make key decisions in your visitor.
For example, you may want to look for a particular condition to be present in a Maven POM file and, if that condition is met, alter an application property in a YAML file.
This is where [scanning recipes](https://docs.openrewrite.org/authoring-recipes/writing-recipes-over-multiple-source-file-types) come in.
The rewrite-recipe starter contains an example in the form of `src/main/java/com/yourorg/AppendToReleaseNotes.java` that you might want to explore.

### Data tables
Sometimes you're more interested in extracting insights from across your projects, rather than directly making code changes.
In those cases [data tables](https://docs.openrewrite.org/running-recipes/data-tables) come in handy, as they allow you to extract data from your projects, and analyze it in a tabular format.
The `src/main/java/com/yourorg/ClassHierarchy.java` recipe in the starter project is a good example of how to use data tables.

### Debugging recipes
When you're developing recipes, you might want to debug them to see how they behave in practice against real projects.
The Moderne IntelliJ IDEA plugin has support for [running recipes in debug mode](https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/moderne-intellij-plugin), to see how they behave in practice.
This leverages [the Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) for recipe runs against a serialized LST, skipping the time-consuming parsing step.

### Running at scale
Once you have your recipes developed, you'll likely want to run them against not just one project, but many projects.

[The Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) is a great way to run recipes across projects from your local machine. This uses serialized LSTs to allow repeated recipe runs against the same model, and create commits and push up changes across many repositories.
There's also [the Moderne CLI workshop](./moderne-cli-exercise.md) that goes into more depth on how to use the CLI to run recipes at scale.

[The Moderne Platform](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/running-your-first-recipe) allows you to [run recipes against Open Source projects](https://app.moderne.io/marketplace), and see how they behave in practice.
You can preview the changes and choose to create a pull request, or discard the changes.
You can also generate reports and visualizations, and track progress towards migration goals across time through the DevCenter.
See [the DevCenter for Apache Maven](https://app.moderne.io/devcenter/Apache%20Maven) as an example of goals being tracked and made actionable through recipes.
Follow the [Moderne Platform workshop](./moderne-platform-exercise.md) to learn more about how to use the Platform to run recipes at scale.

## Recipe conventions and best practices
We've documented the most important [recipe conventions and best practices](https://docs.openrewrite.org/authoring-recipes/recipe-conventions-and-best-practices) to help you write recipes that are safe, idempotent, and efficient.
Where possible, we've automated these checks in the unit testing framework, to help you catch issues early.

You can also run recipe against your rewrite recipe module, to see resolve issues automatically where possible.
These are based on a collection of [best practices for writing OpenRewrite recipes](https://docs.openrewrite.org/recipes/recipes/openrewritebestpractices).
You can apply these recommendations to your recipes by running the following command for Gradle
```bash
./gradlew rewriteRun -Drewrite.activeRecipe=org.openrewrite.recipes.OpenRewriteBestPractices
```
or for Maven
```bash
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-recommendations:RELEASE -Drewrite.activeRecipes=org.openrewrite.recipes.OpenRewriteBestPractices
```

## Contributing to OpenRewrite
Now that you've written your own recipes, you might want to contribute back to the OpenRewrite community.
For any new contribution, the first thing to check is whether there is already a corresponding [issue on the backlog](https://github.com/orgs/openrewrite/projects/4/views/10), perhaps with some pointers on an implementation.
If not, you can [create a new issue](https://github.com/openrewrite/rewrite-spring/issues/new/choose) to discuss the recipe you'd like to develop.
We have some [good first issues](https://github.com/orgs/openrewrite/projects/4/views/10?filterQuery=-label%3A%22parser*%22+label%3A%22good+first+issue%22) in particular that are great when you're just starting out and want feedback on your work to help improve your skills.

Note that there are separate modules for Spring recipes, Java recipes, testing recipes, logging recipes, and many more.
It helps to browse the existing modules for any related work that might be similar and start from there.
For any further questions, feel free to ask in the [OpenRewrite Slack](https://join.slack.com/t/rewriteoss/shared_invite/zt-nj42n3ea-b~62rIHzb3Vo0E1APKCXEA) or [Discord](https://discord.gg/xk3ZKrhWAb).
Hope to see you there!