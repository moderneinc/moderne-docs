---
sidebar_label: CSV recipe marketplace
description: Learn how the CLI CSV recipe marketplace works.
---

# Defining the recipe marketplace with a CSV file

Starting with CLI version `3.55.0`, the recipe marketplace in the Moderne CLI is defined via a CSV file rather than a binary Lucene index. This provides several benefits:

* **Faster bootstrapping** - Installing recipes only requires appending entries to a CSV file rather than rebuilding a binary index.
* **Lazy JAR loading** - Recipe JARs are downloaded on-demand when running recipes, rather than requiring all JARs to be present upfront.
* **Human-readable format** - The marketplace can be easily inspected and debugged using standard tools.

:::info
From a user perspective, all CLI commands remain the same. The CSV format is an internal optimization that improves performance without changing how you interact with the CLI.
:::

## How it works

When you install a recipe JAR using `mod config recipes jar install`, the CLI checks whether the JAR contains an embedded `recipes.csv` file:

* **If present**: The CLI extracts the CSV and appends its contents to your **global marketplace file** ([see below](#marketplace-file-location)).
* **If absent**: The CLI falls back to classpath scanning to discover recipes in the JAR (the previous behavior). This is significantly slower to parse than the CSV approach.

Most OpenRewrite recipe modules now include an embedded `recipes.csv` file. Third-party recipe libraries that don't use the OpenRewrite build plugin will still work via the fallback mechanism.

## Marketplace file location

The global recipe marketplace is stored at:

```
~/.moderne/cli/recipes-v5.csv
```

For new CLI installations, this file starts empty and grows as you install recipe JARs. For existing installations, the CLI automatically migrates your previous marketplace (v4) to the new format the first time you run any marketplace-related command (`jar install`, `search`, `run`, etc.).

## CSV format

The `recipes-v5.csv` file contains one row per recipe with the following columns:

| Column                                                                 | Required | Description                                                                            |
|------------------------------------------------------------------------|----------|----------------------------------------------------------------------------------------|
| `ecosystem`                                                            | Yes      | The package ecosystem identifier (e.g., `maven`, `npm`, `yaml`).                       |
| `packageName`                                                          | Yes      | The package coordinates (e.g., `org.openrewrite.recipe:rewrite-java-dependencies`).    |
| `name`                                                                 | Yes      | The fully qualified recipe name (e.g., `org.openrewrite.java.dependencies.AddDependency`). |
| `displayName`                                                          | No       | A human-readable recipe title.                                                         |
| `description`                                                          | No       | A brief explanation of what the recipe does.                                           |
| `recipeCount`                                                          | No       | The number of recipes (direct + transitive) if this is a composite recipe.             |
| `category1`, `category2`, ... `categoryN`                              | No       | Hierarchical category columns. `category1` is the deepest (most specific) level; higher numbers represent broader parent categories. |
| `category1Description`, `category2Description`, ... `categoryNDescription` | No       | Optional descriptions for each corresponding category level.                           |
| `options`                                                              | No       | A JSON array of recipe options and their metadata.                                     |
| `dataTables`                                                           | No       | A JSON array of data tables the recipe produces.                                       |
| `version`                                                              | No       | The resolved package version.                                                          |
| `requestedVersion`                                                     | No       | The version constraint used when installing (e.g., `LATEST`).                          |
| `team`                                                                 | No       | A team identifier for marketplace partitioning.                                        |

### Example entries

**Minimal entry** - Only the required columns are needed to identify a recipe:

```csv
ecosystem,packageName,name
maven,org.openrewrite:rewrite-java,org.openrewrite.java.cleanup.UnnecessaryParentheses
```

**With metadata and categories** - Includes human-readable information and hierarchical categorization:

```csv
ecosystem,packageName,name,displayName,description,recipeCount,category1,category2,requestedVersion,version
maven,org.openrewrite:rewrite-java,org.openrewrite.java.format.AutoFormat,Auto-format Java code,Formats Java source code according to style guidelines.,15,Formatting,Java,LATEST,8.45.0
```

**With recipe options** - Recipes that accept parameters include a JSON array in the `options` column:

```csv
ecosystem,packageName,name,displayName,description,options
maven,org.openrewrite.recipe:rewrite-java-dependencies,org.openrewrite.java.dependencies.AddDependency,Add Gradle or Maven dependency,Add a dependency to a Gradle or Maven project.,"[{""name"":""groupId"",""type"":""String"",""displayName"":""Group ID"",""description"":""The group ID of the dependency."",""required"":true},{""name"":""artifactId"",""type"":""String"",""displayName"":""Artifact ID"",""description"":""The artifact ID of the dependency."",""required"":true},{""name"":""version"",""type"":""String"",""displayName"":""Version"",""description"":""The version of the dependency.""}]"
```

For more examples, see the [Recipe Marketplace CSV Format ADR](https://github.com/openrewrite/rewrite/blob/main/doc/adr/0006-recipe-marketplace-csv-format.md#examples).

## For recipe authors

If you maintain a recipe library and want to include an embedded `recipes.csv` file in your JAR, the [OpenRewrite Gradle build plugin](https://github.com/openrewrite/rewrite-build-gradle-plugin) provides tasks to generate and validate the CSV.

### Generating the CSV

To create or update your `recipes.csv` file, run:

```bash
./gradlew recipeCsvGenerate
```

This task scans your recipe JAR and generates the CSV, preserving any manual customizations you've made (such as custom category assignments).

### Automatic validation

Once a `recipes.csv` file exists, validation runs automatically as part of the standard Gradle `check` task. This means every build will verify that:

* **Content formatting is correct** - Display names start with uppercase, descriptions end with periods, etc.
* **The CSV is in sync with the JAR** - No phantom recipes (in CSV but not in JAR) or missing recipes (in JAR but not in CSV).

If validation fails, the build will fail with detailed error messages.

For more details, see the [Recipe Marketplace CSV Gradle Tasks ADR](https://github.com/openrewrite/rewrite-build-gradle-plugin/blob/main/adr/0001-recipe-marketplace-csv-gradle-tasks.md).

:::note
There is currently no Maven plugin equivalent. Organizations not using the Gradle plugin will need to implement similar functionality themselves or rely on the CLI's fallback classpath scanning.
:::

## Advanced: manually managing the recipe marketplace

:::warning
The following approach is not recommended and is not something we will help you set up.
:::

In some cases, organizations may want to bootstrap CLI installations with a pre-computed marketplace file rather than installing individual JARs. You can do this by placing a `recipes-v5.csv` file directly in `~/.moderne/cli/`.

When `mod run` executes a recipe, it downloads any missing JARs at runtime based on the `ecosystem`, `packageName`, and `version` columns in the CSV. This means you can have a marketplace file that references JARs you haven't explicitly installed - they will be fetched on demand.

However, this approach has significant drawbacks:

* The CSV must be kept in sync with available artifact versions manually.
* Debugging issues become more difficult without standard installation paths.
* You lose the validation that occurs during normal `jar install` operations.

For most use cases, the standard `mod config recipes jar install` workflow is strongly recommended.

## Additional resources

* [ADR 0006: Recipe Marketplace CSV Format](https://github.com/openrewrite/rewrite/blob/main/doc/adr/0006-recipe-marketplace-csv-format.md) - Technical specification for the CSV format.
* [Recipe Marketplace CSV Gradle Tasks ADR](https://github.com/openrewrite/rewrite-build-gradle-plugin/blob/main/adr/0001-recipe-marketplace-csv-gradle-tasks.md) - Gradle plugin tasks for recipe authors.
