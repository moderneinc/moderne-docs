---
sidebar_label: "Simplify numeric comparison"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Simplify numeric comparison

**OpenRewrite.Recipes.CodeQuality.Simplification.SimplifyNumericComparison**

_Simplify `x - y > 0` to `x > y`, `x - y < 0` to `x < y`, `x - y >= 0` to `x >= y`, and `x - y <= 0` to `x <= y`._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Simplification code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/simplification/simplificationcodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Simplification.SimplifyNumericComparison"
  displayName="Simplify numeric comparison"
  nugetPackage="OpenRewrite.CodeQuality"
/>
