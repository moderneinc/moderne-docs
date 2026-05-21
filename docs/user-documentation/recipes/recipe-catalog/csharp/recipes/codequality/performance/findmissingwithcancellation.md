---
sidebar_label: "Find missing WithCancellation on async enumerables"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find missing WithCancellation on async enumerables

**OpenRewrite.Recipes.CodeQuality.Performance.FindMissingWithCancellation**

_Detect async enumerable iteration without `.WithCancellation()`. Async enumerables should forward CancellationToken via WithCancellation._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [performance](/user-documentation/recipes/lists/recipes-by-tag#performance)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Performance code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/performance/performancecodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.FindMissingWithCancellation"
  displayName="Find missing WithCancellation on async enumerables"
  nugetPackage="OpenRewrite.CodeQuality"
/>
