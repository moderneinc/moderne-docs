---
sidebar_label: "Find ILoggerFactory.Add*() calls"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find ILoggerFactory.Add*() calls

**OpenRewrite.Recipes.AspNetCore2.FindLoggerFactoryAddProvider**

_Flags `ILoggerFactory.AddConsole()`, `AddDebug()`, and similar extension methods. In ASP.NET Core 2.2+, logging should be configured via `ConfigureLogging` in the host builder._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [aspnetcore](/user-documentation/recipes/lists/recipes-by-tag#aspnetcore)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [logging](/user-documentation/recipes/lists/recipes-by-tag#logging)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to ASP.NET Core 2.2](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/aspnetcore2/upgradetoaspnetcore22)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.AspNetCore2.FindLoggerFactoryAddProvider"
  displayName="Find ILoggerFactory.Add*() calls"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
