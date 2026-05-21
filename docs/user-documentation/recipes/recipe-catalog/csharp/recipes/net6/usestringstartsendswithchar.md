---
sidebar_label: "Use string.StartsWith(char)/EndsWith(char) overload"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use string.StartsWith(char)/EndsWith(char) overload

**OpenRewrite.Recipes.Net6.UseStringStartsEndsWithChar**

_Finds calls to `string.StartsWith("x")` and `string.EndsWith("x")` with a single-character string literal that could use the char overload for better performance._

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
  recipeName="OpenRewrite.Recipes.Net6.UseStringStartsEndsWithChar"
  displayName="Use string.StartsWith(char)/EndsWith(char) overload"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
