---
sidebar_label: "Find implicit authentication default scheme (ASP.NET Core 9)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find implicit authentication default scheme (ASP.NET Core 9)

**OpenRewrite.Recipes.Net9.FindImplicitAuthenticationDefault**

_Finds calls to `AddAuthentication()` with no arguments. In .NET 9, a single registered authentication scheme is no longer automatically used as the default._

### Tags

* [aspnet](/user-documentation/recipes/lists/recipes-by-tag#aspnet)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [net9](/user-documentation/recipes/lists/recipes-by-tag#net9)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net9.FindImplicitAuthenticationDefault"
  displayName="Find implicit authentication default scheme (ASP.NET Core 9)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
