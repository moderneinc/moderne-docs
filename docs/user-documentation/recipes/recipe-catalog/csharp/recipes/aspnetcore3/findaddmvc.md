---
sidebar_label: "Find AddMvc() calls"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find AddMvc() calls

**OpenRewrite.Recipes.AspNetCore3.FindAddMvc**

_Flags `AddMvc()` calls that should be replaced with more specific service registrations (`AddControllers`, `AddControllersWithViews`, or `AddRazorPages`) in ASP.NET Core 3.0._

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

* [Migrate to ASP.NET Core 3.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/aspnetcore3/upgradetoaspnetcore30)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.AspNetCore3.FindAddMvc"
  displayName="Find AddMvc() calls"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
