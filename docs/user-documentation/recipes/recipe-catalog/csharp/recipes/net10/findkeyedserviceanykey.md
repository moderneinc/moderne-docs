---
sidebar_label: "Find `KeyedService.AnyKey` behavior change"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `KeyedService.AnyKey` behavior change

**OpenRewrite.Recipes.Net10.FindKeyedServiceAnyKey**

_Finds usages of `KeyedService.AnyKey` which has changed behavior in .NET 10. `GetKeyedService(AnyKey)` now throws `InvalidOperationException` and `GetKeyedServices(AnyKey)` no longer returns AnyKey registrations._

### Tags

* [net10](/user-documentation/recipes/lists/recipes-by-tag#net10)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [di](/user-documentation/recipes/lists/recipes-by-tag#di)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net10/upgradetodotnet10)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net10.FindKeyedServiceAnyKey"
  displayName="Find `KeyedService.AnyKey` behavior change"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
