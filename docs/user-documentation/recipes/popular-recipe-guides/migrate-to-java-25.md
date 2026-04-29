---
sidebar_label: Migrate to Java 25
description: How to upgrade Java codebases to Java 25 with the Moderne Platform or CLI.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to Java 25

Upgrading to Java 25 unlocks new language features such as instance main methods and the simplified `IO` console class. It also retires APIs that have been deprecated for removal – most notably the `SecurityManager` along with several legacy I/O patterns. The changes themselves are mechanical, but applying them across thousands of files by hand is slow and easy to get wrong.

The [`UpgradeToJava25`](../recipe-catalog/java/migrate/upgradetojava25.md) recipe applies these changes automatically: it adopts the new APIs, replaces deprecated ones with their modern equivalents, and updates build files to target Java 25.

In this guide, we will show you how to run this recipe on the Moderne Platform or with the Moderne CLI.

:::info
Codebases on Java 8, 11, 17, or 21 are all valid starting points. `UpgradeToJava25` includes the earlier upgrade recipes transitively, so you do not need to chain multiple migrations.
:::

## What this recipe does

`UpgradeToJava25` is a composite recipe that bundles many smaller transformations. Some of the most visible changes this recipe makes to your code include:

* [Migrate `public static void main(String[] args)` to instance `void main()`](../recipe-catalog/java/migrate/lang/migratemainmethodtoinstancemain.md) – takes advantage of JEP 512 to drop the `static` modifier and the unused `args` parameter from main methods.
* [Migrate `System.out.print` to Java 25 IO utility class](../recipe-catalog/java/migrate/io/replacesystemoutwithioprint.md) – swaps `System.out.print(ln)` calls for the new `IO.print(ln)` methods.
* [Use `Process#waitFor(Duration)`](../recipe-catalog/java/migrate/lang/migrateprocesswaitforduration.md) – replaces the legacy `(timeout, TimeUnit)` overload with the type-safe `Duration` overload.
* [Replace unused variables with underscore](../recipe-catalog/java/migrate/lang/replaceunusedvariableswithunderscore.md) – uses the `_` placeholder for unused lambda parameters and exception variables (JEP 456).

Beyond the source code, the recipe also updates Maven and Gradle build files to target Java 25 and bumps build plugins to Java 25-compatible versions. For the complete list of sub-recipes, see the [recipe catalog page](../recipe-catalog/java/migrate/upgradetojava25.md).

### Example

Here is a small class before and after `UpgradeToJava25` runs:

```java title="Before"
import java.util.concurrent.TimeUnit;

public class Greeter {
    public static void main(String[] args) throws Exception {
        Process p = new ProcessBuilder("echo", "hi").start();
        p.waitFor(5, TimeUnit.SECONDS);
        System.out.println("done");
    }
}
```

```java title="After"
import java.io.IO;
import java.time.Duration;

public class Greeter {
    void main() throws Exception {
        Process p = new ProcessBuilder("echo", "hi").start();
        p.waitFor(Duration.ofSeconds(5));
        IO.println("done");
    }
}
```

## Running the recipe

<Tabs groupId="run-target" queryString="target">
<TabItem value="platform" label="Moderne Platform" default>

1. Sign in to your Moderne tenant or [app.moderne.io](https://app.moderne.io).
2. (Optionally) Use the **Organization** selector to scope the run to the repositories you want to upgrade.
3. Search for the `Migrate to Java 25` recipe ([Moderne Platform link](https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeToJava25)).
4. Click **Dry run**.

For a step-by-step walkthrough of the Moderne Platform UI, see [Quickstart: Using the Moderne Platform](../../moderne-platform/getting-started/running-your-first-recipe.md).

</TabItem>
<TabItem value="cli" label="Moderne CLI">

Make sure you have [built or downloaded Lossless Semantic Trees (LSTs)](../../moderne-cli/getting-started/cli-intro.md#building-lsts) for the repositories you want to upgrade.

<RunRecipe
  recipeName="org.openrewrite.java.migrate.UpgradeToJava25"
  displayName="Migrate to Java 25"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
/>

</TabItem>
</Tabs>

## Reviewing and committing the changes

Running the recipe never modifies your source repositories directly. Instead, the changes are presented as a diff that you can inspect before deciding what to commit. Review them with whatever workflow fits your team, then use the Moderne Platform's commit options or the [`mod git`](../../moderne-cli/cli-reference.md) CLI commands to push the changes across the affected repositories.

## Additional reading

* [Tracking migrations](../../moderne-platform/how-to-guides/track-migrations.md) – use data tables and visualizations to track the rollout of a Java 25 upgrade across many repositories.
