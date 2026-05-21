---
sidebar_label: "Find WinRT interop usage (removed in .NET 5)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find WinRT interop usage (removed in .NET 5)

**OpenRewrite.Recipes.Net5.FindWinRTInterop**

_Finds usages of WinRT interop types (`WindowsRuntimeType`, `WindowsRuntimeMarshal`, etc.) which were removed in .NET 5._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [interop](/user-documentation/recipes/lists/recipes-by-tag#interop)
* [net5](/user-documentation/recipes/lists/recipes-by-tag#net5)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 5](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net5/upgradetodotnet5)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net5.FindWinRTInterop"
  displayName="Find WinRT interop usage (removed in .NET 5)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
