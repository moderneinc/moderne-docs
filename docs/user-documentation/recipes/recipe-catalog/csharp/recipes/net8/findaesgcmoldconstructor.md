---
sidebar_label: "Find `AesGcm` constructor without tag size (SYSLIB0053)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `AesGcm` constructor without tag size (SYSLIB0053)

**OpenRewrite.Recipes.Net8.FindAesGcmOldConstructor**

_Finds `new AesGcm(key)` constructor calls without an explicit tag size parameter. In .NET 8, the single-argument constructor is obsolete (SYSLIB0053). Use `new AesGcm(key, tagSizeInBytes)` instead._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [net8](/user-documentation/recipes/lists/recipes-by-tag#net8)
* [cryptography](/user-documentation/recipes/lists/recipes-by-tag#cryptography)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net8/upgradetodotnet8)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net8.FindAesGcmOldConstructor"
  displayName="Find `AesGcm` constructor without tag size (SYSLIB0053)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
