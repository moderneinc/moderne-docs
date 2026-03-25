---
sidebar_label: "Find `ActivitySamplingResult.PropagationData` behavior change"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `ActivitySamplingResult.PropagationData` behavior change

**OpenRewrite.Recipes.Net10.FindActivitySampling**

_Finds usages of `ActivitySamplingResult.PropagationData` which has changed behavior in .NET 10. Activities with a recorded parent and PropagationData sampling no longer set `Activity.Recorded = true`._

### Tags

* [net10](/user-documentation/recipes/lists/recipes-by-tag#net10)
* [diagnostics](/user-documentation/recipes/lists/recipes-by-tag#diagnostics)
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
  recipeName="OpenRewrite.Recipes.Net10.FindActivitySampling"
  displayName="Find `ActivitySamplingResult.PropagationData` behavior change"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
