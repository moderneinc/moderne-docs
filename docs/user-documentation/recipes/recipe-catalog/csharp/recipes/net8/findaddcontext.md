---
sidebar_label: "Find `JsonSerializerOptions.AddContext` usage (SYSLIB0049)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `JsonSerializerOptions.AddContext` usage (SYSLIB0049)

**OpenRewrite.Recipes.Net8.FindAddContext**

_Finds calls to `JsonSerializerOptions.AddContext<T>()` which is obsolete in .NET 8 (SYSLIB0049). Use `TypeInfoResolverChain` or `TypeInfoResolver` instead._

### Tags

* [serialization](/user-documentation/recipes/lists/recipes-by-tag#serialization)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [net8](/user-documentation/recipes/lists/recipes-by-tag#net8)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net8/upgradetodotnet8)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net8.FindAddContext"
  displayName="Find `JsonSerializerOptions.AddContext` usage (SYSLIB0049)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
