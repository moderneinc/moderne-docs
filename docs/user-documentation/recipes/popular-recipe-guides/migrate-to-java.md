---
sidebar_label: Migrate to a newer version of Java
description: How to upgrade Java codebases to the latest LTS or an intermediate version with the Moderne Platform or CLI.
keywords: [migrate to java, upgrade java version, java 25, java 21, java 17, java 11, java 8, java migration]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to a newer version of Java

Upgrading to a modern Java release lets your codebase adopt new language features and clears out APIs that have been deprecated for removal. Most of these transformations are mechanical individually, but applying them consistently across thousands of files by hand is slow and easy to get wrong.

Moderne's Java upgrade recipes are composite recipes that apply these changes automatically, and they are transitive: the recipe for a given target includes the upgrades for every earlier version. In most cases you should migrate straight to the latest long-term support (LTS) release, **Java 25**. If a dependency, runtime, or internal policy requires you to stop at an intermediate LTS such as Java 17 or Java 21, see [Targeting an earlier LTS](#targeting-an-earlier-lts) below.

In this guide, we will show you how to run these recipes on the Moderne Platform or with the Moderne CLI.

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

## Targeting an earlier LTS

Most teams should migrate straight to Java 25. If you need to stop at an intermediate long-term support release, run the recipe for that target instead. Each one is also transitive, so it includes the upgrades for all earlier versions up to its target. Run it the same way as described in [Running the recipe](#running-the-recipe) above, substituting the recipe shown below.

<Tabs groupId="java-lts">
<TabItem value="java21" label="Java 21" default>

The [`UpgradeToJava21`](../recipe-catalog/java/migrate/upgradetojava21.md) recipe adopts new APIs such as sequenced collections and pattern matching for `switch`, replaces APIs that have been deprecated for removal, and updates build files and CI configuration to target Java 21.

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

<RunRecipe
  recipeName="org.openrewrite.java.migrate.UpgradeToJava21"
  displayName="Migrate to Java 21"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
/>

On the Moderne Platform, search for the `Migrate to Java 21` recipe ([Moderne Platform link](https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeToJava21)).

</TabItem>
<TabItem value="java17" label="Java 17">

The [`UpgradeToJava17`](../recipe-catalog/java/migrate/upgradetojava17.md) recipe adopts records, sealed classes, `instanceof` pattern matching, and text blocks, replaces deprecated APIs with their modern equivalents, and updates build files to target Java 17. For codebases coming from Java 8, it also adds explicit dependencies for J2EE libraries like JAXB that are no longer bundled with the JDK.

```java title="Before"
class Greeter {
    String describe(Object obj) {
        if (obj instanceof String) {
            String s = (String) obj;
            return String.format("string of length %d", s.length());
        }
        return "unknown";
    }
}
```

```java title="After"
class Greeter {
    String describe(Object obj) {
        if (obj instanceof String s) {
            return "string of length %d".formatted(s.length());
        }
        return "unknown";
    }
}
```

<RunRecipe
  recipeName="org.openrewrite.java.migrate.UpgradeToJava17"
  displayName="Migrate to Java 17"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
/>

On the Moderne Platform, search for the `Migrate to Java 17` recipe ([Moderne Platform link](https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeToJava17)).

</TabItem>
</Tabs>

## Additional reading

* [Tracking migrations](../../moderne-platform/how-to-guides/track-migrations.md) – use data tables and visualizations to track the rollout of a Java upgrade across many repositories.
