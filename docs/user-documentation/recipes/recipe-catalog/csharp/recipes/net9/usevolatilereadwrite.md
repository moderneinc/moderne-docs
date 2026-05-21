---
sidebar_label: "Use Volatile.Read/Write (SYSLIB0054)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use Volatile.Read/Write (SYSLIB0054)

**OpenRewrite.Recipes.Net9.UseVolatileReadWrite**

_Replace `Thread.VolatileRead` and `Thread.VolatileWrite` with `Volatile.Read` and `Volatile.Write`. The Thread methods are obsolete in .NET 9 (SYSLIB0054)._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [threading](/user-documentation/recipes/lists/recipes-by-tag#threading)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net9.UseVolatileReadWrite"
  displayName="Use Volatile.Read/Write (SYSLIB0054)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
