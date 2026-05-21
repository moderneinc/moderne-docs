---
sidebar_label: "Find insecure `Rfc2898DeriveBytes` constructors (SYSLIB0041)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find insecure `Rfc2898DeriveBytes` constructors (SYSLIB0041)

**OpenRewrite.Recipes.Net7.FindRfc2898InsecureCtors**

_Finds `Rfc2898DeriveBytes` constructor calls that use default SHA1 or low iteration counts, which are obsolete in .NET 7 (SYSLIB0041). Specify `HashAlgorithmName` and at least 600,000 iterations._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [net7](/user-documentation/recipes/lists/recipes-by-tag#net7)
* [cryptography](/user-documentation/recipes/lists/recipes-by-tag#cryptography)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 7](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net7/upgradetodotnet7)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net7.FindRfc2898InsecureCtors"
  displayName="Find insecure `Rfc2898DeriveBytes` constructors (SYSLIB0041)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
