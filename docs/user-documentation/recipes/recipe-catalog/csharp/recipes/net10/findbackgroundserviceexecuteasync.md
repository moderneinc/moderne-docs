---
sidebar_label: "Find `BackgroundService.ExecuteAsync` behavior change"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `BackgroundService.ExecuteAsync` behavior change

**OpenRewrite.Recipes.Net10.FindBackgroundServiceExecuteAsync**

_Finds methods that override `ExecuteAsync` from `BackgroundService`. In .NET 10, the entire method runs on a background thread; synchronous code before the first `await` no longer blocks host startup._

### Tags

* [net10](/user-documentation/recipes/lists/recipes-by-tag#net10)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [hosting](/user-documentation/recipes/lists/recipes-by-tag#hosting)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net10/upgradetodotnet10)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net10.FindBackgroundServiceExecuteAsync"
  displayName="Find `BackgroundService.ExecuteAsync` behavior change"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
