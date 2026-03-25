---
sidebar_label: "Find `Assembly.CodeBase`/`EscapedCodeBase` usage (SYSLIB0012)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `Assembly.CodeBase`/`EscapedCodeBase` usage (SYSLIB0012)

**OpenRewrite.Recipes.Net6.FindAssemblyCodeBase**

_Finds usages of `Assembly.CodeBase` and `Assembly.EscapedCodeBase` which are obsolete (SYSLIB0012). Use `Assembly.Location` instead._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [reflection](/user-documentation/recipes/lists/recipes-by-tag#reflection)
* [net6](/user-documentation/recipes/lists/recipes-by-tag#net6)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 6](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net6/upgradetodotnet6)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net6.FindAssemblyCodeBase"
  displayName="Find `Assembly.CodeBase`/`EscapedCodeBase` usage (SYSLIB0012)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
