---
sidebar_label: "Find `SameSiteMode.None` usage (behavior changed in .NET Core 3.1)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `SameSiteMode.None` usage (behavior changed in .NET Core 3.1)

**OpenRewrite.Recipes.Net3\_1.FindSameSiteNone**

_Finds usages of `SameSiteMode.None` which changed behavior in .NET Core 3.1 due to Chrome 80 SameSite cookie changes. Apps using remote authentication may need browser sniffing._

### Tags

* [net3.1](/user-documentation/recipes/lists/recipes-by-tag#net31)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [aspnetcore](/user-documentation/recipes/lists/recipes-by-tag#aspnetcore)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET Core 3.1](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net3_1/upgradetodotnet3_1)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net3_1.FindSameSiteNone"
  displayName="Find `SameSiteMode.None` usage (behavior changed in .NET Core 3.1)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
