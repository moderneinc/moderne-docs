---
sidebar_label: "Use ArgumentNullException.ThrowIfNull()"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use ArgumentNullException.ThrowIfNull()

**OpenRewrite.Recipes.Net6.UseThrowIfNull**

_Replace `if (x == null) throw new ArgumentNullException(nameof(x))` guard clauses with `ArgumentNullException.ThrowIfNull(x)` (CA1510). Handles `== null`, `is null`, reversed `null ==`, string literal param names, and braced then-blocks. Available since .NET 6._

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
  recipeName="OpenRewrite.Recipes.Net6.UseThrowIfNull"
  displayName="Use ArgumentNullException.ThrowIfNull()"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
