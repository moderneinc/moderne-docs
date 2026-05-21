---
sidebar_label: "Use ArgumentException.ThrowIfNullOrEmpty()"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use ArgumentException.ThrowIfNullOrEmpty()

**OpenRewrite.Recipes.Net7.UseThrowIfNullOrEmpty**

_Replace `if (string.IsNullOrEmpty(s)) throw new ArgumentException("...", nameof(s))` guard clauses with `ArgumentException.ThrowIfNullOrEmpty(s)`. Available since .NET 7._

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
  recipeName="OpenRewrite.Recipes.Net7.UseThrowIfNullOrEmpty"
  displayName="Use ArgumentException.ThrowIfNullOrEmpty()"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
