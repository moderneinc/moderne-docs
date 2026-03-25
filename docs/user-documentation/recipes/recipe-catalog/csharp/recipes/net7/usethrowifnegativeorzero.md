---
sidebar_label: "Use ArgumentOutOfRangeException.ThrowIfNegativeOrZero()"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use ArgumentOutOfRangeException.ThrowIfNegativeOrZero()

**OpenRewrite.Recipes.Net7.UseThrowIfNegativeOrZero**

_Replace `if (value <= 0) throw new ArgumentOutOfRangeException(nameof(value))` guard clauses with `ArgumentOutOfRangeException.ThrowIfNegativeOrZero(value)`. Also handles reversed `0 >= value`. Available since .NET 7._

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
  recipeName="OpenRewrite.Recipes.Net7.UseThrowIfNegativeOrZero"
  displayName="Use ArgumentOutOfRangeException.ThrowIfNegativeOrZero()"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
