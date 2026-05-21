---
sidebar_label: "Remove NuGet package reference"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove NuGet package reference

**OpenRewrite.Recipes.RemoveNuGetPackageReference**

_Removes a `<PackageReference>` from .csproj files._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | PackageName | The NuGet package name to remove. Supports glob patterns. | `Swashbuckle.AspNetCore` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate Swashbuckle to built-in OpenAPI](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/migrateswashbuckletoopenapi)
* [Migrate to .NET Core 3.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net3_0/upgradetodotnet3_0)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.RemoveNuGetPackageReference"
  displayName="Remove NuGet package reference"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
