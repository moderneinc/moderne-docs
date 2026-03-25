---
sidebar_label: "Find IAuthenticationManager usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find IAuthenticationManager usage

**OpenRewrite.Recipes.AspNetCore2.FindIAuthenticationManager**

_Flags references to `IAuthenticationManager` which was removed in ASP.NET Core 2.0. Use `HttpContext` extension methods from `Microsoft.AspNetCore.Authentication` instead._

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

* [Migrate to ASP.NET Core 2.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/aspnetcore2/upgradetoaspnetcore20)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.AspNetCore2.FindIAuthenticationManager"
  displayName="Find IAuthenticationManager usage"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
