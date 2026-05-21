---
sidebar_label: "Find `JsonSerializerOptions.IgnoreNullValues` usage (SYSLIB0020)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `JsonSerializerOptions.IgnoreNullValues` usage (SYSLIB0020)

**OpenRewrite.Recipes.Net6.FindIgnoreNullValues**

_Finds usages of `JsonSerializerOptions.IgnoreNullValues` which is obsolete in .NET 6 (SYSLIB0020). Use `DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull` instead._

### Tags

* [serialization](/user-documentation/recipes/lists/recipes-by-tag#serialization)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [net6](/user-documentation/recipes/lists/recipes-by-tag#net6)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 6](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net6/upgradetodotnet6)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net6.FindIgnoreNullValues"
  displayName="Find `JsonSerializerOptions.IgnoreNullValues` usage (SYSLIB0020)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
