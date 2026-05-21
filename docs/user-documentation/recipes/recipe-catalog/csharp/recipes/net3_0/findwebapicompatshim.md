---
sidebar_label: "Find Web API compatibility shim usage (removed in ASP.NET Core 3.0)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find Web API compatibility shim usage (removed in ASP.NET Core 3.0)

**OpenRewrite.Recipes.Net3\_0.FindWebApiCompatShim**

_Finds usages of `ApiController`, `HttpResponseMessage`, and other types from `Microsoft.AspNetCore.Mvc.WebApiCompatShim` which was removed in ASP.NET Core 3.0._

### Tags

* [net3.0](/user-documentation/recipes/lists/recipes-by-tag#net30)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [aspnetcore](/user-documentation/recipes/lists/recipes-by-tag#aspnetcore)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET Core 3.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net3_0/upgradetodotnet3_0)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net3_0.FindWebApiCompatShim"
  displayName="Find Web API compatibility shim usage (removed in ASP.NET Core 3.0)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
