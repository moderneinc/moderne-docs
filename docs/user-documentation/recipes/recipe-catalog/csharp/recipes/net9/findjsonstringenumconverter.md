---
sidebar_label: "Find non-generic JsonStringEnumConverter"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find non-generic JsonStringEnumConverter

**OpenRewrite.Recipes.Net9.FindJsonStringEnumConverter**

_Finds usages of the non-generic `JsonStringEnumConverter`. In .NET 9, the generic `JsonStringEnumConverter<TEnum>` is preferred for AOT compatibility._

### Tags

* [serialization](/user-documentation/recipes/lists/recipes-by-tag#serialization)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [net9](/user-documentation/recipes/lists/recipes-by-tag#net9)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net9.FindJsonStringEnumConverter"
  displayName="Find non-generic JsonStringEnumConverter"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
