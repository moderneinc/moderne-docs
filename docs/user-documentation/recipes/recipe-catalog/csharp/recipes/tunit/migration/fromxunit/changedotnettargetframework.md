---
sidebar_label: "Change .NET target framework"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Change .NET target framework

**OpenRewrite.Recipes.TUnit.Migration.FromXUnit.ChangeDotNetTargetFramework**

_Changes the `<TargetFramework>` element in .csproj files._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | OldTargetFramework | The target framework to replace. | `net7.0` |
| `String` | NewTargetFramework | The target framework to use. | `net9.0` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate xUnit NuGet dependencies to TUnit](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/tunit/migration/fromxunit/migratexunitdependencies)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.TUnit.Migration.FromXUnit.ChangeDotNetTargetFramework"
  displayName="Change .NET target framework"
  nugetPackage="OpenRewrite.TUnit"
/>
