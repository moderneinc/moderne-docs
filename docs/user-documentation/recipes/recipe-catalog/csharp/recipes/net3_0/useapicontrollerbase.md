---
sidebar_label: "Migrate ApiController to ControllerBase"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate ApiController to ControllerBase

**OpenRewrite.Recipes.Net3\_0.UseApiControllerBase**

_Replace `ApiController` base class (from the removed WebApiCompatShim) with `ControllerBase` and add the `[ApiController]` attribute. The shim was removed in ASP.NET Core 3.0._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [aspnetcore](/user-documentation/recipes/lists/recipes-by-tag#aspnetcore)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET Core 3.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net3_0/upgradetodotnet3_0)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net3_0.UseApiControllerBase"
  displayName="Migrate ApiController to ControllerBase"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
