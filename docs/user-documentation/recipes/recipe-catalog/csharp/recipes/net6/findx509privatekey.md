---
sidebar_label: "Find `X509Certificate2.PrivateKey` usage (SYSLIB0028)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `X509Certificate2.PrivateKey` usage (SYSLIB0028)

**OpenRewrite.Recipes.Net6.FindX509PrivateKey**

_Finds usages of `X509Certificate2.PrivateKey` which is obsolete (SYSLIB0028). Use `GetRSAPrivateKey()`, `GetECDsaPrivateKey()`, or the appropriate algorithm-specific method instead._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [cryptography](/user-documentation/recipes/lists/recipes-by-tag#cryptography)
* [net6](/user-documentation/recipes/lists/recipes-by-tag#net6)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 6](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net6/upgradetodotnet6)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net6.FindX509PrivateKey"
  displayName="Find `X509Certificate2.PrivateKey` usage (SYSLIB0028)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
