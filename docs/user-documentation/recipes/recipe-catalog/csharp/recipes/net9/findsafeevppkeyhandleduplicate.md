---
sidebar_label: "Find `SafeEvpPKeyHandle.DuplicateHandle` up-ref change"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `SafeEvpPKeyHandle.DuplicateHandle` up-ref change

**OpenRewrite.Recipes.Net9.FindSafeEvpPKeyHandleDuplicate**

_Finds calls to `SafeEvpPKeyHandle.DuplicateHandle()`. In .NET 9, this method now increments the reference count instead of creating a deep copy, which may affect handle lifetime._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [cryptography](/user-documentation/recipes/lists/recipes-by-tag#cryptography)
* [net9](/user-documentation/recipes/lists/recipes-by-tag#net9)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net9.FindSafeEvpPKeyHandleDuplicate"
  displayName="Find `SafeEvpPKeyHandle.DuplicateHandle` up-ref change"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
