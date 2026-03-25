---
sidebar_label: "Find `InMemoryDirectoryInfo` rootDir prepend change"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `InMemoryDirectoryInfo` rootDir prepend change

**OpenRewrite.Recipes.Net9.FindInMemoryDirectoryInfo**

_Finds `new InMemoryDirectoryInfo()` constructor calls. In .NET 9, `rootDir` is prepended to file paths that don't start with the `rootDir`, which may change file matching behavior._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [net9](/user-documentation/recipes/lists/recipes-by-tag#net9)
* [globbing](/user-documentation/recipes/lists/recipes-by-tag#globbing)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net9.FindInMemoryDirectoryInfo"
  displayName="Find `InMemoryDirectoryInfo` rootDir prepend change"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
