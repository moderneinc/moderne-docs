---
sidebar_label: "Use string.Contains(char) overload"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use string.Contains(char) overload

**OpenRewrite.Recipes.Net6.UseStringContainsChar**

_Finds calls to `string.Contains("x")` with a single-character string literal that could use the `string.Contains('x')` overload for better performance._

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
  recipeName="OpenRewrite.Recipes.Net6.UseStringContainsChar"
  displayName="Use string.Contains(char) overload"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
