---
sidebar_label: "Migrate to .NET Core 3.0"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to .NET Core 3.0

**OpenRewrite.Recipes.Net3\_0.UpgradeToDotNet3\_0**

_Migrate C# projects from .NET Core 2.x to .NET Core 3.0, applying necessary API changes for removed and replaced types. See https://learn.microsoft.com/en-us/dotnet/core/compatibility/3.0._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET Core 3.1](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net3_1/upgradetodotnet3_1)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net3_0.UpgradeToDotNet3_0"
  displayName="Migrate to .NET Core 3.0"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
