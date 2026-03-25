---
sidebar_label: "Find blocking calls in async methods"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find blocking calls in async methods

**OpenRewrite.Recipes.CodeQuality.Performance.FindBlockingCallsInAsync**

_Detect `.Wait()`, `.Result`, and `.GetAwaiter().GetResult()` calls in async methods. Blocking calls in async methods can cause deadlocks._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.FindBlockingCallsInAsync"
  displayName="Find blocking calls in async methods"
  nugetPackage="OpenRewrite.CodeQuality"
/>
