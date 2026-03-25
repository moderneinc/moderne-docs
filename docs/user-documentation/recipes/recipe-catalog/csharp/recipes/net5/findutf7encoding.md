---
sidebar_label: "Find `Encoding.UTF7` usage (SYSLIB0001)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `Encoding.UTF7` usage (SYSLIB0001)

**OpenRewrite.Recipes.Net5.FindUtf7Encoding**

_Finds usages of `Encoding.UTF7` and `UTF7Encoding` which are obsolete in .NET 5+ (SYSLIB0001). UTF-7 is insecure._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [security](/user-documentation/recipes/lists/recipes-by-tag#security)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [net5](/user-documentation/recipes/lists/recipes-by-tag#net5)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 5](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net5/upgradetodotnet5)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net5.FindUtf7Encoding"
  displayName="Find `Encoding.UTF7` usage (SYSLIB0001)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
