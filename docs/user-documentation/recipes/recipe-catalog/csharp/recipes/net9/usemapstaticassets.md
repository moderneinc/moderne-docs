---
sidebar_label: "Use MapStaticAssets()"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use MapStaticAssets()

**OpenRewrite.Recipes.Net9.UseMapStaticAssets**

_Replace `UseStaticFiles()` with `MapStaticAssets()` for ASP.NET Core 9. Only applies when the receiver supports `IEndpointRouteBuilder` (WebApplication / minimal hosting). Skips Startup.cs patterns using `IApplicationBuilder` where `MapStaticAssets` is not available._

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

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net9.UseMapStaticAssets"
  displayName="Use MapStaticAssets()"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
