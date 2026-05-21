---
sidebar_label: "Use Frozen collections instead of Immutable"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use Frozen collections instead of Immutable

**OpenRewrite.Recipes.Net9.UseFrozenCollections**

_Replace `ToImmutableDictionary()` with `ToFrozenDictionary()` and `ToImmutableHashSet()` with `ToFrozenSet()`. Frozen collections (.NET 8+) provide better read performance for collections populated once and read many times._

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
  recipeName="OpenRewrite.Recipes.Net9.UseFrozenCollections"
  displayName="Use Frozen collections instead of Immutable"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
