---
sidebar_label: "Migrate to .NET 6"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to .NET 6

**OpenRewrite.Recipes.Net6.UpgradeToDotNet6**

_Migrate C# projects to .NET 6, applying necessary API changes for obsoleted cryptographic types and other breaking changes. Includes all .NET Core 3.0, 3.1, and .NET 5 migration steps. See https://learn.microsoft.com/en-us/dotnet/core/compatibility/6.0._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 7](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net7/upgradetodotnet7)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net6.UpgradeToDotNet6"
  displayName="Migrate to .NET 6"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
