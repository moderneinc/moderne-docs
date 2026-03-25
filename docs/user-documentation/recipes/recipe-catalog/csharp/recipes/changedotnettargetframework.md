---
sidebar_label: "Change .NET target framework"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Change .NET target framework

**OpenRewrite.Recipes.ChangeDotNetTargetFramework**

_Changes the `<TargetFramework>` or `<TargetFrameworks>` value in .csproj files. For multi-TFM projects, replaces the matching framework within the semicolon-delimited list._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | OldTargetFramework | The target framework moniker to replace (e.g., net8.0). | `net8.0` |
| `String` | NewTargetFramework | The target framework moniker to use instead (e.g., net9.0). | `net9.0` |


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
  recipeName="OpenRewrite.Recipes.ChangeDotNetTargetFramework"
  displayName="Change .NET target framework"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
