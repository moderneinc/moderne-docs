---
sidebar_label: "Use LINQ CountBy()"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use LINQ CountBy()

**OpenRewrite.Recipes.Net9.UseLinqCountBy**

_Replace `collection.GroupBy(selector).Select(g => g.Count())` with `collection.CountBy(selector)`. Available since .NET 9._

### Tags

* [modernization](/user-documentation/recipes/lists/recipes-by-tag#modernization)
* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net9.UseLinqCountBy"
  displayName="Use LINQ CountBy()"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
