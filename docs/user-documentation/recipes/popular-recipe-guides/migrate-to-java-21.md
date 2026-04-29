---
sidebar_label: Migrate to Java 21
description: How to upgrade Java codebases to Java 21 with the Moderne Platform or CLI.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to Java 21

Upgrading to Java 21 unlocks new language features such as sequenced collections and pattern matching for switch expressions and statements. It also forces you to replace APIs that have been deprecated for removal. Doing this by hand across an enterprise codebase is tedious and error-prone, since many of the changes are mechanical rewrites scattered across thousands of files.

The [`UpgradeToJava21`](../recipe-catalog/java/migrate/upgradetojava21.md) recipe applies these changes automatically: it adopts the new APIs, replaces deprecated ones with their modern equivalents, and updates build files and CI configuration to target Java 21.

In this guide, we will show you how to run this recipe on the Moderne Platform or with the Moderne CLI.

:::info
Codebases on Java 8, 11, or 17 are all valid starting points. `UpgradeToJava21` includes the earlier upgrade recipes transitively, so you do not need to chain multiple migrations.
:::

## What this recipe does

`UpgradeToJava21` is a composite recipe that bundles many smaller transformations. Some of the most visible changes this recipe makes to your code include:

* [Adopt `SequencedCollection`](../recipe-catalog/java/migrate/util/sequencedcollection.md) – replaces index-based access patterns with sequenced-collection methods like `getFirst()`, `getLast()`, `addFirst()`, and `removeLast()`.
* [Adopt switch pattern matching (JEP 441)](../recipe-catalog/java/migrate/switchpatternmatching.md) – converts type-checking `if`/`else` chains into pattern-matching switch statements.
* [Convert `new URL(String)` to `URI.create(String).toURL()`](../recipe-catalog/java/migrate/net/urlconstructortouricreate.md) – replaces a constructor that has been deprecated for removal.
* [Prefer `Locale.of(..)` over `new Locale(..)`](../recipe-catalog/java/migrate/util/uselocaleof.md) – uses the static factory introduced in Java 19.

Beyond the source code, the recipe also updates Maven and Gradle build files to target Java 21, bumps build plugins to Java 21-compatible versions, and updates GitHub Actions workflows. For the complete list of sub-recipes, see the [recipe catalog page](../recipe-catalog/java/migrate/upgradetojava21.md).

### Example

Here is a small class before and after `UpgradeToJava21` runs:

```java title="Before"
import java.net.URL;
import java.util.List;
import java.util.Locale;

class CountryService {
    Locale locale = new Locale("en", "US");

    String firstCountry(List<String> countries) {
        return countries.get(0);
    }

    URL endpoint() throws Exception {
        return new URL("https://example.com/api");
    }
}
```

```java title="After"
import java.net.URI;
import java.net.URL;
import java.util.List;
import java.util.Locale;

class CountryService {
    Locale locale = Locale.of("en", "US");

    String firstCountry(List<String> countries) {
        return countries.getFirst();
    }

    URL endpoint() throws Exception {
        return URI.create("https://example.com/api").toURL();
    }
}
```

## Running the recipe

<Tabs groupId="run-target" queryString="target">
<TabItem value="platform" label="Moderne Platform" default>

1. Sign in to your Moderne tenant or [app.moderne.io](https://app.moderne.io).
2. (Optionally) Use the **Organization** selector to scope the run to the repositories you want to upgrade.
3. Search for the `Migrate to Java 21` recipe ([Moderne Platform link](https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeToJava21)).
4. Click **Dry run**.

For a step-by-step walkthrough of the Moderne Platform UI, see [Quickstart: Using the Moderne Platform](../../moderne-platform/getting-started/running-your-first-recipe.md).

</TabItem>
<TabItem value="cli" label="Moderne CLI">

Make sure you have [built or downloaded Lossless Semantic Trees (LSTs)](../../moderne-cli/getting-started/cli-intro.md#building-lsts) for the repositories you want to upgrade.

<RunRecipe
  recipeName="org.openrewrite.java.migrate.UpgradeToJava21"
  displayName="Migrate to Java 21"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
/>

</TabItem>
</Tabs>

## Reviewing and committing the changes

Running the recipe never modifies your source repositories directly. Instead, the changes are presented as a diff that you can inspect before deciding what to commit. Review them with whatever workflow fits your team, then either [commit them from the Moderne Platform](../../moderne-platform/getting-started/running-your-first-recipe.md#step-7-commit-your-changes) or use commands like [`mod git`](../../moderne-cli/cli-reference.md#mod-git) in the CLI to commit the changes.

## Additional reading

* [Tracking migrations](../../moderne-platform/how-to-guides/track-migrations.md) – use data tables and visualizations to track the rollout of a Java 21 upgrade across many repositories.
