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

## How the recipe builder resolves recipes

The exception to this isolation is the [recipe builder](../../../moderne-platform/how-to-guides/new-recipe-builder.md).

Declarative YAML recipes reference the recipes they include by name, not by artifact version. When you compose a new recipe in the recipe builder, or customize an existing one, the result is a YAML recipe, and the recipes it references are resolved against the versions currently deployed in your marketplace.

That means a customized recipe can pick up different – newer or older – versions of recipe modules than the ones the original recipe was compiled against.

:::warning
A recipe customized in the recipe builder is not pinned to the versions of the recipe it was derived from. Re-test customized recipes after you update the recipe modules in your marketplace, since the sub-recipes they resolve to can change.
:::

## Keeping your marketplace up to date

Because the recipe builder resolves against what is deployed, it is worth knowing how deployed versions change:

* **Moderne CLI**: `mod config recipes upgrade` re-resolves `LATEST` for each installed artifact and reinstalls it. See [curating the recipe marketplace](../../../moderne-cli/how-to-guides/curate-recipe-marketplace.md) for how to control which recipes your developers see and which versions they get.
* **Moderne Platform**: an administrator re-deploys the recipe artifact, as described in [importing external recipes](../../../../administrator-documentation/moderne-platform/how-to-guides/importing-external-recipes.md). Deploying with a version of `LATEST` re-resolves to the newest published version.

## Next steps

* [Setting up your recipe development environment](./recipe-development-environment.md): the full build configuration for a new recipe library.
* [Writing and installing recipes](../../../moderne-platform/how-to-guides/writing-and-installing-recipes.md): publishing your recipe library and deploying it to the Moderne Platform.
* [Using multiple versions of a library in a project](../advanced-authoring/multiple-versions.md): depending on several versions of the same library within one recipe library.
