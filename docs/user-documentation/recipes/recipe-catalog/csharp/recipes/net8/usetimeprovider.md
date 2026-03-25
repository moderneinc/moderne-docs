---
sidebar_label: "Use TimeProvider instead of DateTime/DateTimeOffset static properties"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use TimeProvider instead of DateTime/DateTimeOffset static properties

**OpenRewrite.Recipes.Net8.UseTimeProvider**

_Replace `DateTime.UtcNow`, `DateTime.Now`, `DateTimeOffset.UtcNow`, and `DateTimeOffset.Now` with `TimeProvider.System.GetUtcNow()`/`GetLocalNow()` equivalents. TimeProvider enables testability and consistent time sources. Available since .NET 8._

### Tags

* [modernization](/user-documentation/recipes/lists/recipes-by-tag#modernization)
* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net8.UseTimeProvider"
  displayName="Use TimeProvider instead of DateTime/DateTimeOffset static properties"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
