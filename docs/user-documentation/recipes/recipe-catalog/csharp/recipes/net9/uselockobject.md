---
sidebar_label: "Use System.Threading.Lock for lock fields"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use System.Threading.Lock for lock fields

**OpenRewrite.Recipes.Net9.UseLockObject**

_Replace `object` fields initialized with `new object()` with `System.Threading.Lock` initialized with `new()`. The Lock type provides better performance with the lock statement. Available since .NET 9._

### Tags

* [modernization](/user-documentation/recipes/lists/recipes-by-tag#modernization)
* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net9.UseLockObject"
  displayName="Use System.Threading.Lock for lock fields"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
