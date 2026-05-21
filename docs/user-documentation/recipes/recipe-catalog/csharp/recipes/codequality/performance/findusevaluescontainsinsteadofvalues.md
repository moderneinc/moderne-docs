---
sidebar_label: "Find Values.Contains() instead of ContainsValue()"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find Values.Contains() instead of ContainsValue()

**OpenRewrite.Recipes.CodeQuality.Performance.FindUseValuesContainsInsteadOfValues**

_Detect `.Values.Contains(value)` on dictionaries. Use `.ContainsValue(value)` instead._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.FindUseValuesContainsInsteadOfValues"
  displayName="Find Values.Contains() instead of ContainsValue()"
  nugetPackage="OpenRewrite.CodeQuality"
/>
