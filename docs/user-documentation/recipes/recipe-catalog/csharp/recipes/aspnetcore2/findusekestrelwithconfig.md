---
sidebar_label: "Find UseKestrel() with configuration"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find UseKestrel() with configuration

**OpenRewrite.Recipes.AspNetCore2.FindUseKestrelWithConfig**

_Flags `UseKestrel` calls with configuration lambdas that should be replaced with `ConfigureKestrel` to avoid conflicts with the IIS in-process hosting model._

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

* [Migrate to ASP.NET Core 2.2](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/aspnetcore2/upgradetoaspnetcore22)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.AspNetCore2.FindUseKestrelWithConfig"
  displayName="Find UseKestrel() with configuration"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
