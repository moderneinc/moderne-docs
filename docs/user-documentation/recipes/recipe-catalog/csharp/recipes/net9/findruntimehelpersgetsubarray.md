---
sidebar_label: "Find `RuntimeHelpers.GetSubArray` return type change"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `RuntimeHelpers.GetSubArray` return type change

**OpenRewrite.Recipes.Net9.FindRuntimeHelpersGetSubArray**

_Finds calls to `RuntimeHelpers.GetSubArray()` which may return a different array type in .NET 9. Code that depends on the runtime type of the returned array may break._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [net9](/user-documentation/recipes/lists/recipes-by-tag#net9)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net9.FindRuntimeHelpersGetSubArray"
  displayName="Find `RuntimeHelpers.GetSubArray` return type change"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
