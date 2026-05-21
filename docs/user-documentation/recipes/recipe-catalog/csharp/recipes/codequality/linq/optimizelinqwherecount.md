---
sidebar_label: "Optimize LINQ Where().Count()"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Optimize LINQ Where().Count()

**OpenRewrite.Recipes.CodeQuality.Linq.OptimizeLinqWhereCount**

_Replace `items.Where(predicate).Count()` with `items.Count(predicate)`. Passing the predicate directly to `Count` avoids an intermediate iterator._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [linq](/user-documentation/recipes/lists/recipes-by-tag#linq)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [LINQ code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/linq/linqcodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Linq.OptimizeLinqWhereCount"
  displayName="Optimize LINQ Where().Count()"
  nugetPackage="OpenRewrite.CodeQuality"
/>
