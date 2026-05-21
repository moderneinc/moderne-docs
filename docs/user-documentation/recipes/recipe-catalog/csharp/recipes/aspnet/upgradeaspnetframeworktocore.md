---
sidebar_label: "Migrate ASP.NET Framework to ASP.NET Core"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate ASP.NET Framework to ASP.NET Core

**OpenRewrite.Recipes.AspNet.UpgradeAspNetFrameworkToCore**

_Migrate ASP.NET Framework (System.Web.Mvc, System.Web.Http) types to their ASP.NET Core equivalents. Based on the .NET Upgrade Assistant's UA0002 and UA0010 diagnostics. See https://learn.microsoft.com/en-us/aspnet/core/migration/proper-to-2x._

### Tags

* [aspnet](/user-documentation/recipes/lists/recipes-by-tag#aspnet)
* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.AspNet.UpgradeAspNetFrameworkToCore"
  displayName="Migrate ASP.NET Framework to ASP.NET Core"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
