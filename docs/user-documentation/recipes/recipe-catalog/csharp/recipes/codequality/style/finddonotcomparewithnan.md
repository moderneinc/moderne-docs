---
sidebar_label: "Find comparison with NaN"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find comparison with NaN

**OpenRewrite.Recipes.CodeQuality.Style.FindDoNotCompareWithNaN**

_Detect comparisons with `NaN` using `==` or `!=`. Use `double.IsNaN()` or `float.IsNaN()` instead, as `x == NaN` is always false._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [style](/user-documentation/recipes/lists/recipes-by-tag#style)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Style code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/style/stylecodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Style.FindDoNotCompareWithNaN"
  displayName="Find comparison with NaN"
  nugetPackage="OpenRewrite.CodeQuality"
/>
