---
title: "Add NuGet package reference"
sidebar_label: "Add NuGet package reference"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add NuGet package reference

**OpenRewrite.CSharp.Recipes.AddNuGetPackageReference**

_Adds a `<PackageReference>` element to .csproj files if not already present._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | PackageName | The NuGet package name to add. | `Newtonsoft.Json` |
| `String` | Version | *Optional*. The package version to add. If omitted, no Version attribute is set. | `13.0.3` |
| `Boolean` | RegenerateMarker | *Optional*. Whether to re-run `dotnet restore` after the edit to refresh the project's MSBuildProject marker. Defaults to `true`. Composite recipes that chain multiple csproj-mutating steps may set this to `false` on intermediate steps and finalize once with `EnsureCsprojAttestation`. |  |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate xUnit NuGet dependencies to TUnit](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/migratexunitdependencies)


## Usage

<RunRecipe
  recipeName="OpenRewrite.CSharp.Recipes.AddNuGetPackageReference"
  displayName="Add NuGet package reference"
  nugetPackage="OpenRewrite.Recipes.CSharp.CodeQuality"
/>
