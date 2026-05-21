---
sidebar_label: "Use LINQ DistinctBy()"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use LINQ DistinctBy()

**OpenRewrite.Recipes.Net6.UseLinqDistinctBy**

_Replace `collection.GroupBy(selector).Select(g => g.First())` with `collection.DistinctBy(selector)`. Available since .NET 6._

### Tags

* [modernization](/user-documentation/recipes/lists/recipes-by-tag#modernization)
* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 6](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net6/upgradetodotnet6)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net6.UseLinqDistinctBy"
  displayName="Use LINQ DistinctBy()"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
