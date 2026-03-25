---
sidebar_label: "Use ArgumentOutOfRangeException.ThrowIfLessThan()"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use ArgumentOutOfRangeException.ThrowIfLessThan()

**OpenRewrite.Recipes.Net8.UseThrowIfLessThan**

_Replace `if (value < other) throw new ArgumentOutOfRangeException(nameof(value))` guard clauses with `ArgumentOutOfRangeException.ThrowIfLessThan(value, other)`. Also handles reversed `other > value` and `<=`/`ThrowIfLessThanOrEqual`. Available since .NET 8._

### Tags

* [modernization](/user-documentation/recipes/lists/recipes-by-tag#modernization)
* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net8/upgradetodotnet8)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net8.UseThrowIfLessThan"
  displayName="Use ArgumentOutOfRangeException.ThrowIfLessThan()"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
