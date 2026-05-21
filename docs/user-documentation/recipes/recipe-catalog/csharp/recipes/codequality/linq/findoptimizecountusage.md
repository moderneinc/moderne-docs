---
sidebar_label: "Find Count() comparison that could be optimized"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find Count() comparison that could be optimized

**OpenRewrite.Recipes.CodeQuality.Linq.FindOptimizeCountUsage**

_Detect `Count(pred) == n` and `Count() > n` comparisons which could use `Where().Take(n+1).Count()` or `Skip(n).Any()` for better performance._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [linq](/user-documentation/recipes/lists/recipes-by-tag#linq)
* [performance](/user-documentation/recipes/lists/recipes-by-tag#performance)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [LINQ code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/linq/linqcodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Linq.FindOptimizeCountUsage"
  displayName="Find Count() comparison that could be optimized"
  nugetPackage="OpenRewrite.CodeQuality"
/>
