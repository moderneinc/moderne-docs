---
sidebar_label: "Find LINQ Count() on materialized collection"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find LINQ Count() on materialized collection

**OpenRewrite.Recipes.CodeQuality.Performance.FindOptimizeEnumerableCountVsAny**

_Detect LINQ `Count()` or `Any()` on types that have a `Count` or `Length` property. Use the property directly for O(1) performance._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.FindOptimizeEnumerableCountVsAny"
  displayName="Find LINQ Count() on materialized collection"
  nugetPackage="OpenRewrite.CodeQuality"
/>
