---
sidebar_label: "Find obsolete `Rfc2898DeriveBytes` constructors (SYSLIB0060)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find obsolete `Rfc2898DeriveBytes` constructors (SYSLIB0060)

**OpenRewrite.Recipes.Net10.FindRfc2898DeriveBytesObsolete**

_Finds `new Rfc2898DeriveBytes(...)` constructor calls which are obsolete in .NET 10. Use the static `Rfc2898DeriveBytes.Pbkdf2()` method instead._

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
  recipeName="OpenRewrite.Recipes.Net10.FindRfc2898DeriveBytesObsolete"
  displayName="Find obsolete `Rfc2898DeriveBytes` constructors (SYSLIB0060)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
