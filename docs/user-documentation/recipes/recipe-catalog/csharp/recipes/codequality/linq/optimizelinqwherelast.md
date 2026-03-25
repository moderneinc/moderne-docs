---
sidebar_label: "Optimize LINQ Where().Last()"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Optimize LINQ Where().Last()

**OpenRewrite.Recipes.CodeQuality.Linq.OptimizeLinqWhereLast**

_Replace `items.Where(predicate).Last()` with `items.Last(predicate)`._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Linq.OptimizeLinqWhereLast"
  displayName="Optimize LINQ Where().Last()"
  nugetPackage="OpenRewrite.CodeQuality"
/>
