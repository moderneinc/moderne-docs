---
sidebar_label: "Remove NuGet package reference"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove NuGet package reference

**OpenRewrite.CSharp.Recipes.RemoveNuGetPackageReference**

_Removes a `<PackageReference>` element from .csproj files._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | PackageName | The NuGet package name to remove. Supports glob patterns. | `Newtonsoft.Json` |
| `Boolean` | RegenerateMarker | *Optional*. Whether to re-run `dotnet restore` after the edit to refresh the project's MSBuildProject marker. Defaults to `true`. Composite recipes that chain multiple csproj-mutating steps may set this to `false` on intermediate steps and finalize once with `EnsureCsprojAttestation`. |  |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET Core 3.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net3_0/upgradetodotnet3_0)


## Usage

<RunRecipe
  recipeName="OpenRewrite.CSharp.Recipes.RemoveNuGetPackageReference"
  displayName="Remove NuGet package reference"
  nugetPackage="OpenRewrite.Recipes.CSharp.Migration.Dotnet"
/>
