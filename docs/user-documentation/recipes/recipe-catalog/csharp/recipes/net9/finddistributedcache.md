---
sidebar_label: "Find IDistributedCache usage (HybridCache in .NET 9)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find IDistributedCache usage (HybridCache in .NET 9)

**OpenRewrite.Recipes.Net9.FindDistributedCache**

_Finds usages of `IDistributedCache`. In .NET 9, `HybridCache` is the recommended replacement with L1/L2 caching, stampede protection, and tag-based invalidation._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [caching](/user-documentation/recipes/lists/recipes-by-tag#caching)
* [net9](/user-documentation/recipes/lists/recipes-by-tag#net9)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net9.FindDistributedCache"
  displayName="Find IDistributedCache usage (HybridCache in .NET 9)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
