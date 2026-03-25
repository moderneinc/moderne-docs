---
sidebar_label: "Find `ServicePointManager` usage (SYSLIB0014)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `ServicePointManager` usage (SYSLIB0014)

**OpenRewrite.Recipes.Net9.FindServicePointManager**

_Finds usages of `ServicePointManager` which is fully obsolete in .NET 9 (SYSLIB0014). Settings on `ServicePointManager` don't affect `SslStream` or `HttpClient`._

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
  recipeName="OpenRewrite.Recipes.Net9.FindServicePointManager"
  displayName="Find `ServicePointManager` usage (SYSLIB0014)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
