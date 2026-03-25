---
sidebar_label: "Add NuGet package reference"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add NuGet package reference

**OpenRewrite.Recipes.TUnit.Migration.FromXUnit.AddNuGetPackageReference**

_Adds a `<PackageReference>` element to .csproj files if not already present._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | PackageName | The NuGet package name to add. | `TUnit` |
| `String` | Version | *Optional*. The package version to add. If omitted, no Version attribute is set. | `1.0.0` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate xUnit NuGet dependencies to TUnit](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/tunit/migration/fromxunit/migratexunitdependencies)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.TUnit.Migration.FromXUnit.AddNuGetPackageReference"
  displayName="Add NuGet package reference"
  nugetPackage="OpenRewrite.TUnit"
/>
