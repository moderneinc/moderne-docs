---
sidebar_label: "Find `PrincipalPermissionAttribute` usage (SYSLIB0003)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `PrincipalPermissionAttribute` usage (SYSLIB0003)

**OpenRewrite.Recipes.Net5.FindPrincipalPermissionAttribute**

_Finds usages of `PrincipalPermissionAttribute` which is obsolete in .NET 5+ (SYSLIB0003) and throws `NotSupportedException` at runtime._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [security](/user-documentation/recipes/lists/recipes-by-tag#security)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [net5](/user-documentation/recipes/lists/recipes-by-tag#net5)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 5](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net5/upgradetodotnet5)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net5.FindPrincipalPermissionAttribute"
  displayName="Find `PrincipalPermissionAttribute` usage (SYSLIB0003)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
