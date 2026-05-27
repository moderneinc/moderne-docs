---
sidebar_label: "Upgrade NuGet package version"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade NuGet package version

**OpenRewrite.CSharp.Recipes.UpgradeNuGetPackageVersion**

_Upgrades the version of a NuGet `<PackageReference>` or `<PackageVersion>` in .csproj and Directory.Packages.props files. Handles property references by updating the property value instead of the version attribute. Uses NuGet.Versioning for correct version semantics._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | PackageName | The NuGet package name to upgrade. Supports glob patterns. | `Newtonsoft.Json` |
| `String` | NewVersion | An exact version number, or a NuGet version range (e.g. '[14.0,)' for >= 14.0). Use 'latest' to upgrade to the latest available version from NuGet sources. | `14.0.0` |
| `Boolean` | IncludePrerelease | *Optional*. Whether to include prerelease versions when resolving 'latest' or ranges. |  |
| `Boolean` | RegenerateMarker | *Optional*. Whether to re-run `dotnet restore` after the edit to refresh the project's MSBuildProject marker. Defaults to `true`. Composite recipes that chain multiple csproj-mutating steps may set this to `false` on intermediate steps and finalize once with `EnsureCsprojAttestation`. |  |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net10/upgradetodotnet10)
* [Migrate to .NET 5](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net5/upgradetodotnet5)
* [Migrate to .NET 6](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/upgradetodotnet6)
* [Migrate to .NET 7](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net7/upgradetodotnet7)
* [Migrate to .NET 8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/upgradetodotnet8)
* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/upgradetodotnet9)
* [Migrate to .NET Core 3.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net3_0/upgradetodotnet3_0)
* [Migrate to .NET Core 3.1](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net3_1/upgradetodotnet3_1)


## Usage

<RunRecipe
  recipeName="OpenRewrite.CSharp.Recipes.UpgradeNuGetPackageVersion"
  displayName="Upgrade NuGet package version"
  nugetPackage="OpenRewrite.Recipes.CSharp.Migration.Dotnet"
/>
