---
sidebar_label: "Find `WebRequest`/`HttpWebRequest`/`WebClient` usage (SYSLIB0014)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `WebRequest`/`HttpWebRequest`/`WebClient` usage (SYSLIB0014)

**OpenRewrite.Recipes.Net6.FindWebRequest**

_Finds usages of `WebRequest`, `HttpWebRequest`, and `WebClient` which are obsolete in .NET 6 (SYSLIB0014). Use `HttpClient` instead._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [net6](/user-documentation/recipes/lists/recipes-by-tag#net6)
* [networking](/user-documentation/recipes/lists/recipes-by-tag#networking)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 6](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net6/upgradetodotnet6)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net6.FindWebRequest"
  displayName="Find `WebRequest`/`HttpWebRequest`/`WebClient` usage (SYSLIB0014)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
