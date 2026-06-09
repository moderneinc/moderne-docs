---
title: "Find LINQ ambiguities introduced by .NET 9 `IAsyncEnumerable` extensions"
sidebar_label: "Find LINQ ambiguities introduced by .NET 9 `IAsyncEnumerable` extensions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find LINQ ambiguities introduced by .NET 9 `IAsyncEnumerable` extensions

**OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindAsyncEnumerableLinqAmbiguity**

_.NET 9 added LINQ extension methods on `IAsyncEnumerable<T>`. Types implementing both `IQueryable<T>` and `IAsyncEnumerable<T>` (notably EF Core `DbSet<T>`) now produce ambiguous `Where`/`Select`/`FirstOrDefault`/etc. calls. Flags such calls for manual disambiguation (typically by inserting `.AsQueryable()`)._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [linq](/user-documentation/recipes/lists/recipes-by-tag#linq)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [net9](/user-documentation/recipes/lists/recipes-by-tag#net9)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindAsyncEnumerableLinqAmbiguity"
  displayName="Find LINQ ambiguities introduced by .NET 9 `IAsyncEnumerable` extensions"
  nugetPackage="OpenRewrite.Recipes.CSharp.Migration.Dotnet"
/>
