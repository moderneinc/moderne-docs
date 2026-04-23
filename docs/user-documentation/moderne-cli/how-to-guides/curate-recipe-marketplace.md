---
sidebar_label: Curating the recipe marketplace
description: Learn how to expose a smaller, curated subset of recipes to your developers using the CLI.
---

# Curating the recipe marketplace

Curating your recipe marketplace lets you expose a smaller, focused subset of recipes to your developers. It surfaces only the migrations your organization has endorsed, not the full OpenRewrite and Moderne catalog. This is especially useful for developers who are new to recipes and only need to run a handful of sanctioned migrations for their team.

In this guide, we will walk you through building a curated `recipes-v5.csv` file for your organization, distributing it to your developers, running recipes against it, and updating it safely over time.

## When to curate

Curating your recipe marketplace is most useful when you want to guide developers toward a specific set of sanctioned recipes. Consider it when:

* Your developers mainly need to run a small set of approved migrations (for example, "Migrate to Java 25" or "Upgrade to Spring Boot 4.0"), and seeing the full catalog gets in the way of finding them.
* You want `mod config recipes search` to surface only the recipes your organization endorses.
* You want to highlight specific internal recipes over more general ones.

If your developers are recipe authors or power users who benefit from seeing the full catalog, the default behavior of `mod config recipes search` is the right fit, and no curation is needed. Curating your marketplace is also not the right tool if you need to add your own recipe code or apply custom category hierarchies to existing recipes. See [managing recipe categories](../../moderne-platform/how-to-guides/categorize-recipes.md) for those patterns.

## Workflow overview

Curating a marketplace has two sides:

* **Curator:** produces a `recipes-v5.csv` file containing only the recipes your organization exposes, and publishes it somewhere your developers can access (an internal repository, a shared file location, or an artifact store).
* **End user:** imports that file into their local CLI marketplace, replacing any previous curated marketplace.

You distribute updates by publishing new versions of the CSV. Each end user re-imports the new version on demand.

## Building your curated marketplace

The simplest starting point is an existing marketplace that already contains the recipes you want to expose. You will copy the rows you care about into a new CSV and ship that file.

### Starting from your full marketplace

If you already have the Moderne or OpenRewrite catalog installed locally, your current marketplace lives at `~/.moderne/cli/recipes-v5.csv`. This is a well-formed CSV following the [recipe marketplace format](../references/recipes-csv.md). You can query it directly with [DuckDB](https://duckdb.org/) or [SQLite](https://www.sqlite.org/index.html), both of which can read CSV files natively.

For example, to extract just the "Migrate to Java 25" row into a new file:

```bash
duckdb -c "
COPY (
    SELECT *
    FROM read_csv('~/.moderne/cli/recipes-v5.csv', header=true, all_varchar=true)
    WHERE name = 'org.openrewrite.java.migrate.UpgradeToJava25'
)
TO 'recipes-java25.csv' (HEADER, QUOTE '\"', ESCAPE '\"');
"
```

To include multiple recipes, list them in an `IN (...)` clause:

```bash
duckdb -c "
COPY (
    SELECT *
    FROM read_csv('~/.moderne/cli/recipes-v5.csv', header=true, all_varchar=true)
    WHERE name IN (
        'org.openrewrite.java.migrate.UpgradeToJava25',
        'io.moderne.java.spring.boot4.UpgradeSpringBoot_4_0',
        'org.openrewrite.staticanalysis.CommonStaticAnalysis',
        'org.openrewrite.java.dependencies.DependencyVulnerabilityCheck'
    )
)
TO 'recipes-core.csv' (HEADER, QUOTE '\"', ESCAPE '\"');
"
```

:::tip
You only need to include the top-level composite recipes that your developers will invoke. Sub-recipes do not need to appear in the CSV - they are resolved from the underlying JARs at run time. See [how composite recipes execute](#how-composite-recipes-execute) below for details.
:::

### Verifying the curated CSV

Before distributing the file, confirm that it parses cleanly and contains what you expect:

```bash
duckdb -c "SELECT name, displayName, recipeCount FROM read_csv('recipes-core.csv', header=true, all_varchar=true)"
```

The output lists only the recipes you selected, with their display names and sub-recipe counts.

:::warning
Do not hand-write recipe rows from scratch. The `options` and `dataTables` columns contain complex JSON that the OpenRewrite build plugins generate mechanically, and a typo will cause the recipe to fail at run time. Always start from an existing, well-formed CSV row.
:::

## Distributing the curated marketplace

Once your CSV is ready, your developers install it with two commands:

```bash
mod config recipes delete
mod config recipes import csv recipes-core.csv
```

The first command clears any previously installed recipe marketplace. The second imports your curated file as the new marketplace.

:::note
`mod config recipes import csv` is a merge operation - it adds or replaces rows by recipe name but never removes existing rows. If your developers skip `mod config recipes delete`, leftover recipes from a previous marketplace will remain alongside your curated set. For a clean, reproducible state, always pair `delete` with `import`.
:::

### First run on a fresh machine

On a machine that has never installed the referenced recipe JARs, the first `mod run` will download them lazily. The CLI maintains its own Maven cache at `~/.moderne/cli/maven-cache/`, independent of the user's `~/.m2/repository/`.

On a cold cache, installing the recipe marketplace is very fast as it does not download any recipe artifacts. Running a recipe from the marketplace will download the necessary recipe artifact and any dependencies, and subsequent runs reuse the cached JARs and complete in seconds.

### Keeping developers' recipes up-to-date automatically

We recommend leaving the `requestedVersion` column set to `LATEST` (or blank, which behaves the same way) in your curated CSV. The CLI resolves `LATEST` at install time, so each time a developer re-imports your marketplace they pick up the most recent upstream release - including bug fixes and newly added sub-recipes - without you having to republish the CSV for every upstream version bump.

:::note
`LATEST` is resolved the first time a recipe artifact is downloaded. Once the recipe artifact is cached locally, the CLI will continue using that version indefinitely. It does not poll for newer releases on subsequent recipe runs.

To pick up newer upstream versions after the initial install, end users should periodically run:

```bash
mod config recipes upgrade
```

This upgrades all currently-installed recipes to their latest available versions.
:::

If you need to hold a recipe at a specific upstream version - for example, to keep a team on a validated release while a newer one is being evaluated - set `requestedVersion` to the exact version string instead. This trades automatic updates for strict reproducibility.

## Curating multiple marketplaces for different audiences

A single curated marketplace may not fit every group in your organization. A common pattern is to publish several CSVs targeted at different audiences and let individual developers pick the one - or the combination - that fits their work. For example:

* A starter marketplace with just a handful of high-impact migrations for developers who are new to recipes.
* Tech-stack specific marketplaces such as JavaScript recipes relevant to your front-end and Node.js teams.
* A power user marketplace containing the full catalog, for recipe authors and engineers composing their own recipes.

### Publishing each marketplace

Build each marketplace using the process described in [building your curated marketplace](#building-your-curated-marketplace), producing one CSV per audience - for example `recipes-starter.csv`, `recipes-javascript.csv`, and `recipes-power-user.csv`. Publish each file at a known, versioned location so your developers can fetch the one they want.

### Installing a single marketplace

A developer who only needs one marketplace installs it with the standard two-command pattern:

```bash
mod config recipes delete
mod config recipes import csv recipes-starter.csv
```

### Combining multiple marketplaces

Because `mod config recipes import csv` merges rows by recipe name, developers can layer marketplaces together by importing them in sequence. For example, a JavaScript developer who also wants the starter recipes available would run:

```bash
mod config recipes delete
mod config recipes import csv recipes-starter.csv
mod config recipes import csv recipes-javascript.csv
```

Both sets of recipes are now visible to `mod config recipes search` and runnable via `mod run`. If the same recipe name appears in multiple CSVs, the row from the last import wins.

### Switching marketplaces

To switch from one marketplace to another - for example, graduating from the starter marketplace to the power user marketplace - clear the existing marketplace before importing the new one:

```bash
mod config recipes delete
mod config recipes import csv recipes-power-user.csv
```

Skipping `mod config recipes delete` would leave the previous marketplace's recipes in place alongside the new set, producing a blended marketplace rather than a clean switch.

## How composite recipes execute

A curated CSV controls discovery, not execution. When your developer runs a composite recipe from the curated marketplace, the CLI:

1. Looks up the composite recipe by name in the CSV. This works as long as the row is present.
2. Loads the recipe class from the underlying JAR, downloading it lazily if needed.
3. Instantiates the recipe, which resolves its sub-recipes from the JAR's classpath - not from the CSV.

This means `org.openrewrite.java.migrate.UpgradeToJava25` (which has almost one thousand sub-recipes) runs fully even when only its top-level row is in the CSV. The same applies to much larger composites like `io.moderne.java.spring.boot4.UpgradeSpringBoot_4_0`.

### What curation prevents

Recipes that are not in the CSV cannot be invoked directly:

```bash
mod run . --recipe=org.openrewrite.java.migrate.UpgradeJavaVersion
# → FAILURE: Unable to find recipe org.openrewrite.java.migrate.UpgradeJavaVersion
```

Sub-recipes still run internally as children of a composite, but they are not exposed as top-level, runnable recipes. This is exactly the allowlist behavior a curated marketplace is intended to provide.

## Updating a curated marketplace

When you release a new version of your curated marketplace, your developers need a way to adopt it. The right workflow depends on whether your update adds recipes, removes them, or both.

### Adding recipes

If your new CSV only adds recipes with no removals, developers can import it directly without clearing the existing marketplace:

```bash
mod config recipes import csv recipes-core-v2.csv
```

Existing recipes remain installed. Recipes with the same name are replaced by the new version. This is the lightest-weight update path.

### Removing recipes

If your new CSV drops a recipe that was in the previous version (for example it previously included a `MigrateToJava21` and you want to replace it with the new `MigrateToJava25` recipe), developers must clear the marketplace before importing:

```bash
mod config recipes delete
mod config recipes import csv recipes-core-v2.csv
```

Without `mod config recipes delete`, `import` has no way to know that a recipe was intentionally removed; it merges, leaving the retired recipe in place. Call this out in your release notes whenever you publish an update that retires a recipe.

## Tips and caveats

* **Keep `options` and `dataTables` intact.** When copying rows from an existing CSV, leave these columns unchanged. They are generated mechanically by the OpenRewrite build plugins, and hand-editing them reliably breaks recipes.
* **Platform Marketplace distribution is a separate pattern.** If you publish recipes through the Moderne Platform Marketplace instead of CSV distribution via the CLI, see [managing recipe categories](../../moderne-platform/how-to-guides/categorize-recipes.md) for the wrapper JAR publishing workflow.

## Next steps

* [`recipes.csv` reference](../references/recipes-csv.md): full CSV format, column semantics, and validation rules.
* [Managing recipe categories](../../moderne-platform/how-to-guides/categorize-recipes.md): for re-organizing recipes under custom category hierarchies.
* [CLI reference](../cli-reference.md#mod-config-recipes): full command documentation for `mod config recipes`.
