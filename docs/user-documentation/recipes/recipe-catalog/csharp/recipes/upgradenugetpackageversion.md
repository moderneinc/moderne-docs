---
sidebar_label: "Upgrade NuGet package version"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade NuGet package version

**OpenRewrite.Recipes.UpgradeNuGetPackageVersion**

_Upgrades the version of a NuGet `<PackageReference>` or `<PackageVersion>` in .csproj and Directory.Packages.props files._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | PackageName | The NuGet package name to upgrade. Supports glob patterns. | `Newtonsoft.Json` |
| `String` | NewVersion | An exact version number or node-style semver selector used to select the version number. You can also use `latest.release` for the latest available version and `latest.patch` if the current version is a valid semantic version. | `latest.release` |
| `String` | VersionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example, setting 'newVersion' to "25-29" can be paired with a metadata pattern of "-jre" to select version 29.0-jre. | `-jre` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net10/upgradetodotnet10)
* [Migrate to .NET 5](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net5/upgradetodotnet5)
* [Migrate to .NET 6](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net6/upgradetodotnet6)
* [Migrate to .NET 7](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net7/upgradetodotnet7)
* [Migrate to .NET 8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net8/upgradetodotnet8)
* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)
* [Migrate to .NET Core 3.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net3_0/upgradetodotnet3_0)
* [Migrate to .NET Core 3.1](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net3_1/upgradetodotnet3_1)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.UpgradeNuGetPackageVersion"
  displayName="Upgrade NuGet package version"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
