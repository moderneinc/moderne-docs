---
sidebar_label: "Find Guid.Parse with constant string"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find Guid.Parse with constant string

**OpenRewrite.Recipes.CodeQuality.Performance.FindOptimizeGuidCreation**

_Detect `Guid.Parse("...")` with constant strings. Consider using `new Guid("...")` or a static readonly field for better performance._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.FindOptimizeGuidCreation"
  displayName="Find Guid.Parse with constant string"
  nugetPackage="OpenRewrite.CodeQuality"
/>
