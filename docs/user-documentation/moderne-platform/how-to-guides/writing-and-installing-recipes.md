---
sidebar_label: Writing and installing recipes
description: How to create your own recipes and how to deploy them to the Moderne Platform.
---

import VersionBanner from '@site/src/components/VersionBanner';

<VersionBanner version="v2" linkPath="/user-documentation/moderne-platform-v1/how-to-guides/writing-and-installing-recipes" />

# Writing and installing recipes

As a user of the Moderne Platform, you've probably run quite a few [recipes](https://docs.openrewrite.org/concepts-and-explanations/recipes). However, what if none of the recipes in [the catalog](https://docs.openrewrite.org/recipes) do what you want to do? In that case, you will need to write your own. 

In this short guide, we will walk through how to get started with writing recipes, and the steps you need to take after to make them appear in your Moderne Platform instance.

## Step 1: Write a recipe

:::tip
Before writing a new recipe, it's a good idea to double-check that the [recipe catalog](https://docs.openrewrite.org/recipes) doesn't have any recipes that do what you want or can be easily modified to meet your needs.
:::

If your new recipe idea can be composed of many other recipes or if it can be created by taking an existing recipe and removing pieces of it, check out our doc on [creating custom recipes with the recipe builder](./new-recipe-builder.md).

If your recipe is more complex than that, please check out the [OpenRewrite recipe authoring documentation](https://docs.openrewrite.org/authoring-recipes/recipe-development-environment). Make sure to read over the documentation on the [different types of recipes](https://docs.openrewrite.org/authoring-recipes/types-of-recipes) so that you can create a recipe that best meets your needs.

You may also find it beneficial to work through our [recipe authoring workshop](../../workshops/recipe-authoring.md) that will take you through the process of writing and running many different types of recipes.

:::tip
As a Moderne customer, you have access to the [Moderne recipe bom](https://central.sonatype.com/artifact/io.moderne.recipe/moderne-recipe-bom/versions) which can help you align versions of all Moderne recipe modules.
:::

## Step 2: Create a recipe JAR

After you're done writing your recipe(s), you will need to publish them to an artifact repository that is connected to your Moderne instance. An administrator from your organization should have configured this when they set up the Moderne Connector. For instructions on how to configure this connection, please see the [recipe marketplace repositories doc](../../../administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-recipe-marketplace-repositories.md).

Once the connection has been set up, you will need to ensure your repository publishes the recipe artifacts to the artifact repository mentioned above. 

The [rewrite-recipe-starter project](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/build.gradle.kts) can serve as an example of how to publish an artifact. This repository is configured to publish to Moderne's open artifact repository (via the [publishing task](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/build.gradle.kts#L77-L84) at the bottom of the `build.gradle.kts` file).

If your organization has not configured any Maven recipe marketplace repositories, Moderne SaaS instances fall back to the following defaults:

* `https://repo.maven.apache.org/maven2` (Maven Central — releases only)
* `https://central.sonatype.com/repository/maven-snapshots/` (Sonatype — snapshots only)

Once your administrator configures one or more Maven repositories, only those are searched — the defaults above are not merged in, so Maven Central and Sonatype snapshots must be listed explicitly to keep them. PyPI, NuGet, and NPM have no defaults.

If you publish a release artifact, make sure it goes to a repository that Moderne searches for releases. If you publish a snapshot, make sure it goes to a repository that Moderne searches for snapshots. If you need to use a different artifact repository, an administrator from your organization will need to [configure it as a recipe marketplace repository](../../../administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-recipe-marketplace-repositories.md).

You may also find it useful to read over these other artifact publishing docs:

* [Sonatype's instructions for publishing to Maven Central](https://maven.apache.org/repository/guide-central-repository-upload.html)
* [Gradle's instructions on the Gradle publishing plugin](https://docs.gradle.org/current/userguide/publishing_maven.html).

## Step 3: Deploying your recipe to the Moderne Platform

Uploading the recipe artifacts to the Moderne connected artifact repository is not enough for them to appear in the Moderne Platform. In order for them to become available in the platform, you will need to have an administrator from your organization [follow the instructions for importing external recipes](../../../administrator-documentation/moderne-platform/how-to-guides/importing-external-recipes.md). Once that's done, you should see the recipe in the recipe catalog – and you should be able to run in inside of the Moderne Platform or the Moderne CLI.
