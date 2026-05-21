---
sidebar_label: "Use LINQ Order() and OrderDescending()"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use LINQ Order() and OrderDescending()

**OpenRewrite.Recipes.Net7.UseLinqOrder**

_Replace `collection.OrderBy(x => x)` with `collection.Order()` and `collection.OrderByDescending(x => x)` with `collection.OrderDescending()`. Available since .NET 7._

### Tags

* [modernization](/user-documentation/recipes/lists/recipes-by-tag#modernization)
* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 7](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net7/upgradetodotnet7)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net7.UseLinqOrder"
  displayName="Use LINQ Order() and OrderDescending()"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
