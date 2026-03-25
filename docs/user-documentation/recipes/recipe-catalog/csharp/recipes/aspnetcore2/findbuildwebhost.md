---
sidebar_label: "Find BuildWebHost method"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find BuildWebHost method

**OpenRewrite.Recipes.AspNetCore2.FindBuildWebHost**

_Flags `BuildWebHost` method declarations that should be renamed to `CreateWebHostBuilder` and refactored for ASP.NET Core 2.1._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [aspnetcore](/user-documentation/recipes/lists/recipes-by-tag#aspnetcore)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to ASP.NET Core 2.1](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/aspnetcore2/upgradetoaspnetcore21)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.AspNetCore2.FindBuildWebHost"
  displayName="Find BuildWebHost method"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
