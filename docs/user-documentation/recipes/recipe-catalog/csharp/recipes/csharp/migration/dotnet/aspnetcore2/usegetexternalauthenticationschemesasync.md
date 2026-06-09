---
title: "Use GetExternalAuthenticationSchemesAsync()"
sidebar_label: "Use GetExternalAuthenticationSchemesAsync()"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use GetExternalAuthenticationSchemesAsync()

**OpenRewrite.Recipes.CSharp.Migration.Dotnet.AspNetCore2.UseGetExternalAuthenticationSchemesAsync**

_Replace `GetExternalAuthenticationSchemes()` with `GetExternalAuthenticationSchemesAsync()`. The synchronous method was removed in ASP.NET Core 2.0._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [aspnetcore](/user-documentation/recipes/lists/recipes-by-tag#aspnetcore)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [authentication](/user-documentation/recipes/lists/recipes-by-tag#authentication)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET Core 3.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net3_0/upgradetodotnet3_0)
* [Migrate to ASP.NET Core 2.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/aspnetcore2/upgradetoaspnetcore20)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.Migration.Dotnet.AspNetCore2.UseGetExternalAuthenticationSchemesAsync"
  displayName="Use GetExternalAuthenticationSchemesAsync()"
  nugetPackage="OpenRewrite.Recipes.CSharp.Migration.Dotnet"
/>
