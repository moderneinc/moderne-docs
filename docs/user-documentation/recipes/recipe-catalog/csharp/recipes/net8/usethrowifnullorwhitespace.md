---
sidebar_label: "Use ArgumentException.ThrowIfNullOrWhiteSpace()"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use ArgumentException.ThrowIfNullOrWhiteSpace()

**OpenRewrite.Recipes.Net8.UseThrowIfNullOrWhiteSpace**

_Replace `if (string.IsNullOrWhiteSpace(s)) throw new ArgumentException("...", nameof(s))` guard clauses with `ArgumentException.ThrowIfNullOrWhiteSpace(s)`. Available since .NET 8._

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
  recipeName="OpenRewrite.Recipes.Net8.UseThrowIfNullOrWhiteSpace"
  displayName="Use ArgumentException.ThrowIfNullOrWhiteSpace()"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
