---
sidebar_label: "Find WebHostBuilder usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find WebHostBuilder usage

**OpenRewrite.Recipes.AspNetCore3.FindWebHostBuilder**

_Flags `WebHostBuilder` and `WebHost.CreateDefaultBuilder` usage that should migrate to the Generic Host pattern in ASP.NET Core 3.0+._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [aspnetcore](/user-documentation/recipes/lists/recipes-by-tag#aspnetcore)
* [hosting](/user-documentation/recipes/lists/recipes-by-tag#hosting)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to ASP.NET Core 3.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/aspnetcore3/upgradetoaspnetcore30)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.AspNetCore3.FindWebHostBuilder"
  displayName="Find WebHostBuilder usage"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
