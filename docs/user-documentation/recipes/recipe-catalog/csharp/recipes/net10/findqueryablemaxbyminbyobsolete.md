---
sidebar_label: "Find obsolete `Queryable.MaxBy`/`MinBy` with `IComparer&lt;TSource&gt;` (SYSLIB0061)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find obsolete `Queryable.MaxBy`/`MinBy` with `IComparer&lt;TSource&gt;` (SYSLIB0061)

**OpenRewrite.Recipes.Net10.FindQueryableMaxByMinByObsolete**

_Finds `Queryable.MaxBy` and `Queryable.MinBy` overloads taking `IComparer<TSource>` which are obsolete in .NET 10. Use the overloads taking `IComparer<TKey>` instead._

### Tags

* [net10](/user-documentation/recipes/lists/recipes-by-tag#net10)
* [linq](/user-documentation/recipes/lists/recipes-by-tag#linq)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net10/upgradetodotnet10)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net10.FindQueryableMaxByMinByObsolete"
  displayName="Find obsolete `Queryable.MaxBy`/`MinBy` with `IComparer&lt;TSource&gt;` (SYSLIB0061)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
