---
sidebar_label: "Find `AuthenticationManager` usage (SYSLIB0009)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `AuthenticationManager` usage (SYSLIB0009)

**OpenRewrite.Recipes.Net9.FindAuthenticationManager**

_Finds usages of `AuthenticationManager` which is not supported in .NET 9 (SYSLIB0009). Methods will no-op or throw `PlatformNotSupportedException`._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [networking](/user-documentation/recipes/lists/recipes-by-tag#networking)
* [net9](/user-documentation/recipes/lists/recipes-by-tag#net9)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net9.FindAuthenticationManager"
  displayName="Find `AuthenticationManager` usage (SYSLIB0009)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
