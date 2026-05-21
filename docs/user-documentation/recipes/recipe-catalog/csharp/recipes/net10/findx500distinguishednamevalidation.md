---
sidebar_label: "Find `X500DistinguishedName` string constructor stricter validation"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `X500DistinguishedName` string constructor stricter validation

**OpenRewrite.Recipes.Net10.FindX500DistinguishedNameValidation**

_Finds `new X500DistinguishedName(string, ...)` constructor calls which have stricter validation in .NET 10. Non-Windows environments may reject previously accepted values._

### Tags

* [net10](/user-documentation/recipes/lists/recipes-by-tag#net10)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [cryptography](/user-documentation/recipes/lists/recipes-by-tag#cryptography)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net10/upgradetodotnet10)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net10.FindX500DistinguishedNameValidation"
  displayName="Find `X500DistinguishedName` string constructor stricter validation"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
