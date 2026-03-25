---
sidebar_label: "Find string.GetHashCode() without StringComparer"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find string.GetHashCode() without StringComparer

**OpenRewrite.Recipes.CodeQuality.Performance.FindStringGetHashCode**

_Detect calls to `string.GetHashCode()` without a `StringComparer`. The default `GetHashCode()` may produce different results across platforms._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.FindStringGetHashCode"
  displayName="Find string.GetHashCode() without StringComparer"
  nugetPackage="OpenRewrite.CodeQuality"
/>
