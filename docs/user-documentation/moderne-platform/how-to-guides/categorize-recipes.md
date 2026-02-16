---
sidebar_label: Manage recipe categories
description: Create your own recipe categories in the Moderne Platform Marketplace.
---

# Manage recipe categories

If you provide recipes in the Moderne Platform Marketplace, you probably don't want to hide them somewhere among
thousands of other entries. Using `recipes.csv` and the `category.yml`, you can define your own category structure that
fits your organization perfectly. In this article, you see three things: how to create categories for your own recipes,
how to sort existing recipes into your categories, and how to deploy the whole thing on the Moderne Platform.

## Define categories for your own recipes

Categories in the Marketplace are controlled by two mechanisms that work together: a `category.yml` in your recipe
module and the `recipes.csv` generated from it, which is embedded in the finished JAR.

### Create the `category.yml`

Create a category file in your recipe module under `src/main/resources/META-INF/rewrite/category.yml`.
This file describes the hierarchical category structure under which your recipes appear in the Marketplace. Each entry
has the type `specs.openrewrite.org/v1beta/category` and links a Java package name to a human-readable category name:

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

Recipes are assigned to categories via their package names. The mechanism works as follows: When generating
`recipes.csv`, the fully qualified name of each recipe is broken down into package segments and gradually compared
against `category.yml` content. If a package segment matches a `packageName`, the `name` of the descriptor is used as
the category. Segments without an explicit descriptor automatically generate a fallback category from the capitalized
package name.
A good example is
the [category.yml from rewrite-spring](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/category.yml) —
there you can see how the Spring recipes build their category hierarchy.

### Generate the `recipes.csv`

Once the `category.yml` is ready, generate the CSV file using the Gradle task of
the [OpenRewrite Build Plugin](https://github.com/openrewrite/rewrite-build-gradle-plugin):

```bash
./gradlew recipeCsvGenerate
```

The task scans your recipe JAR and generates a `recipes.csv` with the appropriate `category1`, `category2`, ...
`categoryN` columns derived from your `category.yml`. Any manual adjustments you made to the CSV beforehand will be
retained.

> **Important:** `recipeCsvGenerate` only scans your own JAR — recipes from dependencies are not included.

> **Reference:
** [Generating the CSV](https://docs.moderne.io/user-documentation/moderne-cli/references/recipes-csv/#generating-the-csv)

### Validation

Validation runs automatically as part of `./gradlew check`. It checks whether the CSV is synchronized with the JAR
content and whether formatting conventions are adhered to — for example, that display names begin with a capital letter
and descriptions end with a period. Recipes that are in the CSV but do not exist in the JAR (“phantom recipes”) will
result in a build error.

> **Reference:** [Automatic validation](https://docs.moderne.io/user-documentation/moderne-cli/references/recipes-csv/#
> automatic-validation)

If everything is green, you can publish the artifact and deploy it to the Moderne Platform — more on this
in [Section 3](#3-deploying-recipe-artifacts-to-the-modern-platform).

## Sort existing recipes into your own categories

Perhaps you don't want to write any new recipes, but rather display existing OpenRewrite recipes under your own
organizational structure in the Marketplace. To do this, you don't need to fork or modify the original modules. Instead,
you create a thin wrapper artifact that overwrites the category assignment via its `recipes.csv`.

### How recipes are identified and categorized

Each recipe in `recipes.csv` is uniquely identified by the combination of `ecosystem`, `packageName`, and `name`. The
category columns define a **hierarchy from left to right — from the most specific to the broadest level**:

```
category1 (lowest level)  →  category2  →  ...  →  categoryN (broadest level)
```

A recipe with `name: org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_5` would be sorted as follows by default:

| category1       | category2 | category3 |
|-----------------|-----------|-----------|
| Spring Boot 3.x | Spring    | Java      |

To make this recipe appear under your own structure, replace the category columns:

| category1          | category2          | category3 |
|--------------------|--------------------|-----------|
| Framework Upgrades | Your Modernization | Custom    |

All other fields (`name`, `packageName`, `options`, `dataTables`, etc.) remain identical — only the categories change.

> **Reference:
** [CSV format specification](https://docs.moderne.io/user-documentation/moderne-cli/references/recipes-csv/#csv-format)

### Create a wrapper artifact

Create a new Gradle project based on the [rewrite-recipe-starter](https://github.com/moderneinc/rewrite-recipe-starter).
This module does not need its own recipe code — it only declares dependencies on the recipe artifacts you want to
recategorize.

For example, in `build.gradle.kts`:

```kotlin
dependencies {
    implementation("org.openrewrite.recipe:rewrite-spring:LATEST")
    implementation("org.openrewrite.recipe:rewrite-java-dependencies:LATEST")
}
```

### Create the `recipes.csv` manually

> **Important:** You **cannot** use `./gradlew recipeCsvGenerate` for the wrapper artifact. This task only scans its own
> JAR, and since your wrapper does not define any recipes of its own, it would generate an empty CSV. In addition, the
> build validation (`./gradlew check`) would reject any entry for a recipe from a dependency as a "phantom recipe".

Instead, the approach is as follows:

1. **Extract CSV from the original JARs:** Unzip `META-INF/rewrite/recipes.csv` from the dependency JARs (e.g., from
   `rewrite-spring`, `rewrite-java-dependencies`) . These contain all recipe entries with correct `options` JSON and
   `dataTables`.
2. **Adjust category columns:** Change only the `category1`, `category2`, ... `categoryN` columns and their
   descriptions. Leave `options`, `dataTables`, `displayName`, `description`, and all other metadata **unchanged** — the
   `options` JSON is complex and must have been generated by the build plugin.
3. **Embed CSV:** Save the finished file under `src/main/resources/META-INF/rewrite/recipes.csv`.
4. **Disable build validation:** Remove the `rewrite-build-gradle-plugin` from the wrapper project or disable the
   validation tasks, otherwise the phantom recipe check will block the build.

### Understanding merge behavior

There are two scenarios when deploying the wrapper artifact:

#### Scenario A — Uninstall originals first (changed categorization)

Uninstall the original artifacts from the Marketplace, then install the wrapper artifact. Recipes will appear
exclusively under your new categories.

#### Scenario B — Install wrapper additionally (additive categorization)

Leave the original artifacts installed and install the wrapper artifact additionally. Recipes will then appear in **both
** categories — the original and your own. This may be desirable if you want to group existing recipes under an
additional organization-specific structure without losing the default categories.
The platform's merge mechanism only deduplicates within the same category. Both entries are retained across different
category paths.

### Maintenance

The wrapper artifact must be kept in sync with the upstream recipe modules. If an upstream module adds, removes, or
renames recipes, your manually maintained CSV will become obsolete.

## 3. Deploying recipe artifacts to the Moderne Platform

Whether you have built your own recipe artifact (section 1) or a wrapper artifact for recategorization (section 2), the
deployment path is the same: publish the artifact to your repository, then make it available in the Moderne Platform
Marketplace.

### Publish to the artifact repository

Publish the recipe JAR to the artifact repository associated with your Moderne instance (e.g., Artifactory, Nexus, or a
Maven-compatible repository). The [rewrite-recipe-starter](https://github.com/moderneinc/rewrite-recipe-starter) comes
with a preconfigured publishing configuration that you can use as a starting point.
Ensure that your Moderne agent has access to this repository. An administrator should have configured this when
onboarding the agent.

> **Reference:
** [Configure an agent with Artifactory access: recipes](https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-artifactory-access-recipes/)

### Deploy to the Moderne Platform

Once the artifact is in the connected repository, there are two ways to make it available in the Platform Marketplace:

#### Via the admin interface

Navigate to the admin pages in the Moderne Platform, open the recipe deployment area, and enter the artifact
coordinates. Click on “Deploy recipe artifact” to make it available.

#### Via the GraphQL API

The Modern GraphQL API is suitable for automation. The mutation installs the artifact either for a specific organization
or globally:

```graphql
# For a specific organization
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