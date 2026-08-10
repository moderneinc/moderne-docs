---
sidebar_label: Recipe module versions
description: How to align the recipe module versions your recipe library depends on, and how those versions are resolved in the recipe marketplace.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Aligning recipe module versions

When you maintain your own recipe library, you depend on OpenRewrite and Moderne recipe modules – `rewrite-java`, `rewrite-static-analysis`, `rewrite-spring`, and so on. Each of these modules is individually versioned, and any of them may put out a new patch release in between Moderne's biweekly releases, so it is not obvious which combination of versions you should be building against. It is also not obvious which versions are used once your recipes run from the recipe marketplace in the Moderne CLI or the Moderne Platform.

In this guide, we will walk you through using a bill of materials (BOM) to align the modules your recipe library depends on, how the marketplace isolates recipe modules from one another at run time, and the one case where that isolation does not apply.

## Aligning your dependencies with a bill of materials

A bill of materials (BOM) is a published artifact that manages the versions of a related set of modules. You import the BOM once, then declare dependencies on individual modules without specifying their versions.

Moderne publishes [`io.moderne.recipe:moderne-recipe-bom`](https://artifacts.codegenomeproject.org/maven/io/moderne/recipe/moderne-recipe-bom/), which manages the versions of Moderne's recipe modules. It also imports [`org.openrewrite.recipe:rewrite-recipe-bom`](https://github.com/openrewrite/rewrite-recipe-bom), so a single import covers both the open source OpenRewrite modules and Moderne's proprietary ones.

<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

```groovy title="build.gradle"
dependencies {
    // Import Moderne's bill of materials, which also imports rewrite-recipe-bom
    implementation(platform("io.moderne.recipe:moderne-recipe-bom:latest.release"))

    // Declare recipe modules without a version - the BOM manages them
    implementation("org.openrewrite:rewrite-java")
    implementation("org.openrewrite.recipe:rewrite-static-analysis")
    implementation("io.moderne.recipe:rewrite-spring")
}
```

</TabItem>

<TabItem value="maven" label="Maven">

```xml title="pom.xml"
<dependencyManagement>
  <dependencies>
    <!-- Import Moderne's bill of materials, which also imports rewrite-recipe-bom -->
    <dependency>
      <groupId>io.moderne.recipe</groupId>
      <artifactId>moderne-recipe-bom</artifactId>
      <version>0.41.0</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>

<dependencies>
  <!-- Declare recipe modules without a version - the BOM manages them -->
  <dependency>
    <groupId>org.openrewrite</groupId>
    <artifactId>rewrite-java</artifactId>
  </dependency>
  <dependency>
    <groupId>org.openrewrite.recipe</groupId>
    <artifactId>rewrite-static-analysis</artifactId>
  </dependency>
  <dependency>
    <groupId>io.moderne.recipe</groupId>
    <artifactId>rewrite-spring</artifactId>
  </dependency>
</dependencies>
```

</TabItem>
</Tabs>

Check the [latest versions of every OpenRewrite module](../../lists/latest-versions-of-every-openrewrite-module.md) for the current `moderne-recipe-bom` version.

### Why the BOM versions matter

The versions the BOM manages are the versions Moderne tests together. They are also the versions that are loaded together when your recipe is deployed to the marketplace, and when your recipes are run directly. Building against the same set means what you tested locally is what runs at scale.

If your recipe library only depends on open source OpenRewrite modules, import `rewrite-recipe-bom` instead. See [setting up your recipe development environment](./recipe-development-environment.md) for a fuller starter build configuration.

:::info
`moderne-recipe-bom` and the Moderne recipe modules it manages are distributed through the Code Genome Project, which requires authentication. See [configuring the Code Genome Project repository](../../lists/latest-versions-of-every-openrewrite-module.md#configure-the-code-genome-project-repository) for the repository and credential setup.
:::

## How recipe modules are isolated in the marketplace

The recipe marketplace does not resolve every installed recipe module against one shared set of dependency versions. Each recipe artifact is loaded together with the dependencies it was published with, isolated from the other artifacts in the marketplace.

This isolation is what allows recipe modules to coexist even when they depend on different versions of other recipe modules. Moderne releases most recipe modules on a biweekly cadence, but not every module follows it. The Quarkus recipe modules, for example, release independently and are often behind the current biweekly release, so they may still be built against an older version of a shared module. Isolation means they run against the version they were built for, while the modules from the current release run against theirs.

For your own recipe library, the practical consequence is that you do not need to match your dependency versions to whatever else happens to be deployed in your marketplace. Your recipes run against the versions you published them with, in both the CLI and the Platform.

## How standalone YAML recipes resolve

The exception to this isolation is a declarative YAML recipe that is installed on its own, rather than packaged inside a recipe artifact.

A YAML recipe references the recipes it includes by name, not by artifact version. YAML that is packaged inside a recipe JAR resolves those names against that JAR's classpath, so it stays isolated like any other recipe artifact. A standalone YAML recipe has no classpath of its own, so its references are resolved when the recipe runs, against whatever versions your marketplace currently has installed.

You will run into this in two places:

* **The [recipe builder](../../../moderne-platform/how-to-guides/new-recipe-builder.md)**: composing a new recipe, or customizing an existing one, produces a YAML recipe. Its sub-recipes are resolved against the versions deployed in your marketplace, which can be newer or older than the versions the original recipe was compiled against.
* **YAML you copied from somewhere else**: a recipe pasted from a chat message, a docs page, or a colleague carries no version information either. Installing it with `mod config recipes yaml install` adds its recipes to your marketplace, where they resolve against the recipe modules you already have installed.

In both cases the recipe can pick up different – newer or older – versions of recipe modules than the ones it was originally written or compiled against.

:::warning
A standalone YAML recipe is not pinned to the recipe module versions it was written against. Re-test these recipes after you update the recipe modules in your marketplace, since the sub-recipes they resolve to can change. Packaging the YAML into a recipe JAR instead gives it the same version isolation as any other recipe artifact.
:::

## Keeping your marketplace up to date

Because standalone YAML recipes resolve against what is deployed, it is worth knowing how deployed versions change:

* **Moderne CLI**: `mod config recipes upgrade` re-resolves and reinstalls each installed artifact that was requested at a dynamic version. See [curating the recipe marketplace](../../../moderne-cli/how-to-guides/curate-recipe-marketplace.md) for how to control which recipes your developers see and which versions they get.
* **Moderne Platform**: an administrator re-deploys the recipe artifact, as described in [importing external recipes](../../../../administrator-documentation/moderne-platform/how-to-guides/importing-external-recipes.md). Deploying with a version of `RELEASE` re-resolves to the newest stable release, while `LATEST` re-resolves to the newest available build, including snapshots.

:::note
Only artifacts requested at a dynamic version – `LATEST` or `RELEASE` – are re-resolved. An artifact installed at an exact version stays on that version until you reinstall it with `mod config recipes jar install`. That is what you want when you are deliberately holding a team on a validated release, but it also means `upgrade` alone will not move it.
:::

## Next steps

* [Setting up your recipe development environment](./recipe-development-environment.md): the full build configuration for a new recipe library.
* [Writing and installing recipes](../../../moderne-platform/how-to-guides/writing-and-installing-recipes.md): publishing your recipe library and deploying it to the Moderne Platform.
* [Using multiple versions of a library in a project](../advanced-authoring/multiple-versions.md): depending on several versions of the same library within one recipe library.
