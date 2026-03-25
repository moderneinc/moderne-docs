---
sidebar_label: "String.Format format string should be constant"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# String.Format format string should be constant

**OpenRewrite.Recipes.CodeQuality.Performance.FindStringFormatShouldBeConstant**

_The format string passed to `string.Format` should be a compile-time constant to enable analysis and avoid runtime format errors._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.FindStringFormatShouldBeConstant"
  displayName="String.Format format string should be constant"
  nugetPackage="OpenRewrite.CodeQuality"
/>
