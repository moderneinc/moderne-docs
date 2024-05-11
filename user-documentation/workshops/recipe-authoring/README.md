# OpenRewrite recipe authoring workshop

## Basics

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
