---
sidebar_label: "Find `WinHttpHandler` usage (removed in .NET 5)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `WinHttpHandler` usage (removed in .NET 5)

**OpenRewrite.Recipes.Net5.FindWinHttpHandler**

_Finds usages of `WinHttpHandler` which was removed from the .NET 5 runtime. Install the `System.Net.Http.WinHttpHandler` NuGet package explicitly._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [networking](/user-documentation/recipes/lists/recipes-by-tag#networking)
* [net5](/user-documentation/recipes/lists/recipes-by-tag#net5)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 5](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net5/upgradetodotnet5)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net5.FindWinHttpHandler"
  displayName="Find `WinHttpHandler` usage (removed in .NET 5)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
