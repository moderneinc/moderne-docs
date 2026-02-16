---
sidebar_label: Managing recipe categories
description: How to create your own recipe categories in the Moderne Platform.
---

# How to manage recipe categories

When you publish recipes to the Moderne Platform, organizing them into meaningful categories helps users in your organization discover and run them. By default, recipes are categorized based on their package structure, but you can define a custom category hierarchy that better fits your organization's needs.

You can also re-categorize existing recipes from other modules (e.g., OpenRewrite recipes) without modifying their source code.

In this guide, we will walk you through how to define categories for your own recipes, how to re-categorize existing recipes under a custom structure, and how to deploy these categories to the Moderne Platform.

## Defining categories for your own recipes

To create your own categories, you will need to create a `category.yml` file that maps your Java package structure to human-readable category names. After that, you will need to generate a `recipes.csv` file that the Moderne Platform will read when displaying recipes in the Marketplace.

### Creating the `category.yml` file

To get started, create a category file in your recipe module at `src/main/resources/META-INF/rewrite/category.yml`. Each entry should have the type `specs.openrewrite.org/v1beta/category` and should map a Java package name to a category name:

```yaml
---
type: specs.openrewrite.org/v1beta/category
name: MyOrg Modernization
packageName: com.myorg.recipe.modernization
description: Recipes for modernizing MyOrg applications.

---
type: specs.openrewrite.org/v1beta/category
name: Framework Upgrades
packageName: com.myorg.recipe.modernization.upgrades
description: Framework upgrade recipes for MyOrg projects.
```

Recipes are assigned to categories based on their package names. When generating the [`recipes.csv`](../../moderne-cli/references/recipes-csv.md) file, each recipe's fully qualified name is compared against the entries in your `category.yml` file. If a package segment matches a `packageName`, the corresponding `name` will be used as the category.

For example, a recipe at `com.myorg.recipe.modernization.upgrades.UpgradeFramework` would match the `com.myorg.recipe.modernization.upgrades` entry above and appear under **Framework Upgrades**.

Any package segments without an explicit entry will automatically generate a fallback category from the capitalized package name.

:::tip
For a real-world example, see the [category.yml from rewrite-spring](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/category.yml), which shows how the Spring recipes build their category hierarchy.
:::

### Generating and validating the `recipes.csv` file

Once the `category.yml` file is ready, you will need to generate the CSV file using the Gradle task from the [OpenRewrite Build Plugin](https://github.com/openrewrite/rewrite-build-gradle-plugin):

```bash
./gradlew recipeCsvGenerate
```

This task will scan your recipe JAR and generate a `recipes.csv` file with `category1`, `category2`, ... `categoryN` columns derived from your `category.yml` file. Any manual adjustments you've made to the CSV file beforehand will be retained.

:::warning
`recipeCsvGenerate` only scans your own JAR — recipes from dependencies are not included.
:::

Validation will run automatically as part of `./gradlew check`. It will verify that the CSV file is synchronized with the JAR content and that formatting conventions are followed (e.g., display names should begin with a capital letter and descriptions should end with a period).

If any recipes appear in the CSV file but do not exist in the JAR ("phantom recipes"), the build will fail.

:::info
For more details, see the [recipes.csv reference](../../moderne-cli/references/recipes-csv.md), which covers both [CSV generation](../../moderne-cli/references/recipes-csv.md#generating-the-csv) and [automatic validation](../../moderne-cli/references/recipes-csv.md#automatic-validation).
:::

Once validation passes, you can [publish and deploy the artifact to the Moderne Platform](#deploying-recipe-artifacts-to-the-moderne-platform).

## Sorting existing recipes into your own categories

If you want to display existing recipes (such as OpenRewrite recipes) under your own organizational structure in the Marketplace, you can do so without forking or modifying the original modules. Instead, you will need to create a wrapper artifact that overwrites the category assignment via its `recipes.csv` file.

### Understanding how recipes are categorized

Each recipe in the `recipes.csv` file is uniquely identified by the combination of `ecosystem`, `packageName`, and `name`. The category columns define a hierarchy from left to right — from the most specific to the broadest level.

For example, a recipe with `name: org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_5` would be categorized as follows by default:

| category1       | category2 | category3 |
|-----------------|-----------|-----------|
| Spring Boot 3.x | Spring    | Java      |

To make this recipe appear under your own structure, you should replace the category columns:

| category1          | category2          | category3 |
|--------------------|--------------------|-----------|
| Framework Upgrades | Your Modernization | Custom    |

You should leave all other fields (`name`, `packageName`, `options`, `dataTables`, etc.) identical — only the categories should change. For more details on the CSV format, check out the [`recipes.csv` reference](../../moderne-cli/references/recipes-csv.md#csv-format).

### Creating a wrapper artifact

To re-categorize recipes from other modules, you will need to create a separate artifact that contains only your custom `recipes.csv` file (no recipe code of its own). This wrapper artifact declares dependencies on the recipe modules you want to re-categorize, which allows you to override their category assignments when you deploy it to the Moderne Platform.

The easiest way to get started is to create a new Gradle project based on the [rewrite-recipe-starter](https://github.com/moderneinc/rewrite-recipe-starter). You should add dependencies on the recipe artifacts you want to re-categorize. For example, in `build.gradle.kts`:

```kotlin
dependencies {
    implementation("org.openrewrite.recipe:rewrite-spring:LATEST")
    implementation("org.openrewrite.recipe:rewrite-java-dependencies:LATEST")
}
```

### Creating the `recipes.csv` file manually

:::warning
You **cannot** use `./gradlew recipeCsvGenerate` for the wrapper artifact. This task only scans its own JAR, and since your wrapper does not define any recipes of its own, it would generate an empty CSV file.

In addition, the build validation (`./gradlew check`) would reject any entry for a recipe from a dependency as a "phantom recipe".
:::

Instead, you should follow these steps:

1. **Extract the CSV file from the original JARs:** Unzip `META-INF/rewrite/recipes.csv` from the dependency JARs (e.g., from `rewrite-spring`, `rewrite-java-dependencies`). These will contain all recipe entries with correct `options` JSON and `dataTables`.
2. **Adjust the category columns:** Change only the `category1`, `category2`, ... `categoryN` columns and their descriptions. You should leave `options`, `dataTables`, `displayName`, `description`, and all other metadata **unchanged** — the `options` JSON is complex and should only be generated by the build plugin.
3. **Embed the CSV file:** Save the finished file at `src/main/resources/META-INF/rewrite/recipes.csv`.
4. **Disable build validation:** Remove the `rewrite-build-gradle-plugin` from the wrapper project or disable the validation tasks, otherwise the phantom recipe check will block the build.

### Understanding merge behavior

When you deploy the wrapper artifact, the original recipe artifacts may already be installed in the Marketplace. How you handle this will determine where recipes appear in the Marketplace. You have two options:

#### Replacing categories

If you want recipes to appear **only** under your new categories, you should uninstall the original artifacts from the Marketplace first, then install the wrapper artifact. This gives you full control over how recipes are organized.

#### Adding additional categories

If you want recipes to appear under **both** the original categories and your own, you can leave the original artifacts installed and deploy the wrapper artifact alongside them. This is useful if you want to add an organization-specific grouping without losing the default category structure.

The platform's merge mechanism only deduplicates recipes within the same category path — so a recipe that appears under two different category paths will show up in both places.

### Maintaining your wrapper artifact

You will need to keep the wrapper artifact in sync with the upstream recipe modules. If an upstream module adds, removes, or renames recipes, your manually maintained CSV file will become obsolete.

## Deploying recipe artifacts to the Moderne Platform

Whether you have built your own recipe artifact or a wrapper artifact for re-categorization, the deployment path is the same. You will need to publish the artifact to your artifact repository and then make it available in the Moderne Platform Marketplace.

### Publishing to your artifact repository

You should publish the recipe JAR to the artifact repository associated with your Moderne instance (e.g., Artifactory, Nexus, or a Maven-compatible repository). The [rewrite-recipe-starter](https://github.com/moderneinc/rewrite-recipe-starter) comes with a preconfigured publishing configuration that you can use as a starting point.

You will also need to ensure that your Moderne agent has access to this repository. An administrator should have [configured this when onboarding the agent](../../../administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configuring-artifactory-with-recipes.md).

### Making recipes available in the Marketplace

Once the artifact is in the connected repository, there are two ways to make it available in the Marketplace:

#### Via the admin interface

Navigate to the admin pages in the Moderne Platform, open the recipe deployment area, and enter the artifact coordinates. Then click "Deploy recipe artifact" to make it available.

#### Via the GraphQL API

You can also use the Moderne GraphQL API to automate deployment. The following mutation will install the artifact for a specific organization:

```graphql
mutation {
    installRecipesForOrganization(
        organizationId: "MY_ORG_ID"

        bundle: {
            maven: {
                groupId: "com.myorg.recipe"
                artifactId: "rewrite-myorg"
                version: "LATEST"
            }
        }
    ) {
        id
    }
}
```
