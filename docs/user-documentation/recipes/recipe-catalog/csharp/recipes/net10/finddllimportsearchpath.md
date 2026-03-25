---
sidebar_label: "Find `DllImportSearchPath.AssemblyDirectory` behavior change"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `DllImportSearchPath.AssemblyDirectory` behavior change

**OpenRewrite.Recipes.Net10.FindDllImportSearchPath**

_Finds usages of `DllImportSearchPath.AssemblyDirectory` which has changed behavior in .NET 10. Specifying only `AssemblyDirectory` no longer falls back to OS default search paths._

### Tags

* [net10](/user-documentation/recipes/lists/recipes-by-tag#net10)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [interop](/user-documentation/recipes/lists/recipes-by-tag#interop)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net10/upgradetodotnet10)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net10.FindDllImportSearchPath"
  displayName="Find `DllImportSearchPath.AssemblyDirectory` behavior change"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
