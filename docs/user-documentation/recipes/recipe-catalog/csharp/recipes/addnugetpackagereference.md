---
sidebar_label: "Add NuGet package reference"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add NuGet package reference

**OpenRewrite.Recipes.AddNuGetPackageReference**

_Adds a `<PackageReference>` to .csproj files if not already present._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | PackageName | The NuGet package name to add. | `Newtonsoft.Json` |
| `String` | Version | *Optional*. The version to add. If not specified, no version attribute is added. | `13.0.3` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate Swashbuckle to built-in OpenAPI](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/migrateswashbuckletoopenapi)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.AddNuGetPackageReference"
  displayName="Add NuGet package reference"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
