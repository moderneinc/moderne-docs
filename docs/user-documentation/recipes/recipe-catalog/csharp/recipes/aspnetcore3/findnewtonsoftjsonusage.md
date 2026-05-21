---
sidebar_label: "Find Newtonsoft.Json usage in ASP.NET Core"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find Newtonsoft.Json usage in ASP.NET Core

**OpenRewrite.Recipes.AspNetCore3.FindNewtonsoftJsonUsage**

_Flags `JsonConvert` and other `Newtonsoft.Json` usage. ASP.NET Core 3.0 uses `System.Text.Json` by default._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [aspnetcore](/user-documentation/recipes/lists/recipes-by-tag#aspnetcore)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [json](/user-documentation/recipes/lists/recipes-by-tag#json)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to ASP.NET Core 3.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/aspnetcore3/upgradetoaspnetcore30)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.AspNetCore3.FindNewtonsoftJsonUsage"
  displayName="Find Newtonsoft.Json usage in ASP.NET Core"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
