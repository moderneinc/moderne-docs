---
sidebar_label: "Remove NuGet package reference"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove NuGet package reference

**OpenRewrite.Recipes.TUnit.Migration.FromXUnit.RemoveNuGetPackageReference**

_Removes a `<PackageReference>` element from .csproj files._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | PackageName | The NuGet package name to remove. Supports glob patterns. | `xunit` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate xUnit NuGet dependencies to TUnit](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/tunit/migration/fromxunit/migratexunitdependencies)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.TUnit.Migration.FromXUnit.RemoveNuGetPackageReference"
  displayName="Remove NuGet package reference"
  nugetPackage="OpenRewrite.TUnit"
/>
