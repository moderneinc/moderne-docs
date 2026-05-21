---
sidebar_label: "Find `GnuTarEntry`/`PaxTarEntry` default timestamp change"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `GnuTarEntry`/`PaxTarEntry` default timestamp change

**OpenRewrite.Recipes.Net10.FindGnuTarPaxTarEntry**

_Finds `new GnuTarEntry(...)` and `new PaxTarEntry(...)` constructor calls. In .NET 10, these no longer set atime and ctime by default. Set `AccessTime`/`ChangeTime` explicitly if needed._

### Tags

* [net10](/user-documentation/recipes/lists/recipes-by-tag#net10)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [tar](/user-documentation/recipes/lists/recipes-by-tag#tar)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net10/upgradetodotnet10)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net10.FindGnuTarPaxTarEntry"
  displayName="Find `GnuTarEntry`/`PaxTarEntry` default timestamp change"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
