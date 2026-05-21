---
sidebar_label: "Find `IncrementingPollingCounter` async callback change"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `IncrementingPollingCounter` async callback change

**OpenRewrite.Recipes.Net9.FindIncrementingPollingCounter**

_Finds `new IncrementingPollingCounter()` constructor calls. In .NET 9, the initial callback invocation is asynchronous instead of synchronous, which may change timing behavior._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [diagnostics](/user-documentation/recipes/lists/recipes-by-tag#diagnostics)
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
  recipeName="OpenRewrite.Recipes.Net9.FindIncrementingPollingCounter"
  displayName="Find `IncrementingPollingCounter` async callback change"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
