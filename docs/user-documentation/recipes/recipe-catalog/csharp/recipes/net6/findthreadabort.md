---
sidebar_label: "Find `Thread.Abort` usage (SYSLIB0006)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `Thread.Abort` usage (SYSLIB0006)

**OpenRewrite.Recipes.Net6.FindThreadAbort**

_Finds calls to `Thread.Abort()` which throws `PlatformNotSupportedException` in .NET 6+ (SYSLIB0006). Use `CancellationToken` for cooperative cancellation instead._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [net6](/user-documentation/recipes/lists/recipes-by-tag#net6)
* [threading](/user-documentation/recipes/lists/recipes-by-tag#threading)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 6](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net6/upgradetodotnet6)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net6.FindThreadAbort"
  displayName="Find `Thread.Abort` usage (SYSLIB0006)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
