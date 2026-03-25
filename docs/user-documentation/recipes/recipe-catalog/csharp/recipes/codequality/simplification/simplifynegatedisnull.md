---
sidebar_label: "Simplify negated is null pattern"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Simplify negated is null pattern

**OpenRewrite.Recipes.CodeQuality.Simplification.SimplifyNegatedIsNull**

_Simplify `!(x is null)` to `x is not null` and `!(x is not null)` to `x is null`._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Simplification.SimplifyNegatedIsNull"
  displayName="Simplify negated is null pattern"
  nugetPackage="OpenRewrite.CodeQuality"
/>
