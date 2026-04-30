---
sidebar_label: Migrate to Java 17
description: How to upgrade Java codebases to Java 17 with the Moderne Platform or CLI.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to Java 17

Java 17 is the long-term support release that broadly replaced Java 8 and Java 11 in production environments. Upgrading to it lets your codebase adopt records, sealed classes, `instanceof` pattern matching, and text blocks – while clearing out APIs that have been deprecated since the early days of Java. Most of these transformations are simple individually, but applying them consistently across thousands of files turns a routine version bump into weeks of grinding work.

The [`UpgradeToJava17`](../recipe-catalog/java/migrate/upgradetojava17.md) recipe applies these changes automatically: it adopts the new language features, replaces deprecated APIs with their modern equivalents, and updates build files to target Java 17.

In this guide, we will show you how to run this recipe on the Moderne Platform or with the Moderne CLI.

:::info
Codebases on Java 8 or Java 11 are valid starting points. `UpgradeToJava17` includes the Java 8 → 11 migration transitively, so you do not need to chain multiple migrations.
:::

## What this recipe does

`UpgradeToJava17` is a composite recipe that bundles many smaller transformations. Some of the most visible changes this recipe makes to your code include:

* [Adopt `instanceof` pattern matching](../recipe-catalog/staticanalysis/instanceofpatternmatch.md) – removes redundant casts after `instanceof` checks by binding the result directly to a typed variable (JEP 394).
* [Use text blocks](../recipe-catalog/java/migrate/lang/usetextblocks.md) – converts multi-line string concatenation into the `"""` text-block syntax introduced in Java 15.
* [Prefer `String.formatted(...)`](../recipe-catalog/java/migrate/lang/stringformatted.md) – swaps `String.format(template, args)` calls for the more readable `template.formatted(args)` form.
* [Add `@Serial` annotation to `serialVersionUID`](../recipe-catalog/staticanalysis/addserialannotationtoserialversionuid.md) – marks serialization-related fields and methods so the compiler can validate them.

Beyond your code, the recipe also updates Maven and Gradle build files to target Java 17, bumps build plugins to Java 17-compatible versions, and (for codebases coming from Java 8) adds explicit dependencies for J2EE libraries like JAXB that are no longer bundled with the JDK. For the complete list of sub-recipes, see the [recipe catalog page](../recipe-catalog/java/migrate/upgradetojava17.md).

### Example

Here is a small class before and after `UpgradeToJava17` runs:

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

## Running the recipe

<Tabs groupId="run-target" queryString="target">
<TabItem value="platform" label="Moderne Platform" default>

1. Sign in to your Moderne tenant or [app.moderne.io](https://app.moderne.io).
2. (Optionally) Use the **Organization** selector to scope the run to the repositories you want to upgrade.
3. Search for the `Migrate to Java 17` recipe ([Moderne Platform link](https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeToJava17)).
4. Click **Dry run**.

For a step-by-step walkthrough of the Moderne Platform UI, see [Quickstart: Using the Moderne Platform](../../moderne-platform/getting-started/running-your-first-recipe.md).

</TabItem>
<TabItem value="cli" label="Moderne CLI">

Make sure you have [built or downloaded Lossless Semantic Trees (LSTs)](../../moderne-cli/getting-started/cli-intro.md#building-lsts) for the repositories you want to upgrade.

<RunRecipe
  recipeName="org.openrewrite.java.migrate.UpgradeToJava17"
  displayName="Migrate to Java 17"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
/>

</TabItem>
</Tabs>

## Reviewing and committing the changes

Running the recipe never modifies your source repositories directly. Instead, the changes are presented as a diff that you can inspect before deciding what to commit. Review them with whatever workflow fits your team, then use the Moderne Platform's commit options or the [`mod git`](../../moderne-cli/cli-reference.md) CLI commands to push the changes across the affected repositories.

## Additional reading

* [Tracking migrations](../../moderne-platform/how-to-guides/track-migrations.md) – use data tables and visualizations to track the rollout of a Java 17 upgrade across many repositories.
