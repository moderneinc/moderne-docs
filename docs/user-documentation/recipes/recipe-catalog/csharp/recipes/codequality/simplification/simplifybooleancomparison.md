---
sidebar_label: "Simplify boolean comparison"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Simplify boolean comparison

**OpenRewrite.Recipes.CodeQuality.Simplification.SimplifyBooleanComparison**

_Simplify `true == x` to `x`, `false == x` to `!x`, `true != x` to `!x`, and `false != x` to `x`._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Simplification.SimplifyBooleanComparison"
  displayName="Simplify boolean comparison"
  nugetPackage="OpenRewrite.CodeQuality"
/>
