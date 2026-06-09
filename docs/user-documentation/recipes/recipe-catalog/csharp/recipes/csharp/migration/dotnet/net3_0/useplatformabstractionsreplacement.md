---
title: "Replace `PlatformServices` with `AppContext`"
sidebar_label: "Replace `PlatformServices` with `AppContext`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `PlatformServices` with `AppContext`

**OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net3\_0.UsePlatformAbstractionsReplacement**

_Replaces `Microsoft.Extensions.PlatformAbstractions.PlatformServices.Default.Application.ApplicationBasePath` with `System.AppContext.BaseDirectory`. The PlatformAbstractions package was removed in .NET Core 3.0. Also removes the obsolete using directive._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET Core 3.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net3_0/upgradetodotnet3_0)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net3_0.UsePlatformAbstractionsReplacement"
  displayName="Replace `PlatformServices` with `AppContext`"
  nugetPackage="OpenRewrite.Recipes.CSharp.Migration.Dotnet"
/>
