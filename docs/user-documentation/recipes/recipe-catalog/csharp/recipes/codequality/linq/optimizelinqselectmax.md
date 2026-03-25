---
sidebar_label: "Optimize LINQ Select().Max()"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Optimize LINQ Select().Max()

**OpenRewrite.Recipes.CodeQuality.Linq.OptimizeLinqSelectMax**

_Replace `items.Select(selector).Max()` with `items.Max(selector)`. Passing the selector directly to `Max` avoids an intermediate iterator._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Linq.OptimizeLinqSelectMax"
  displayName="Optimize LINQ Select().Max()"
  nugetPackage="OpenRewrite.CodeQuality"
/>
