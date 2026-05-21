---
sidebar_label: "Find implicit culture-sensitive string methods"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find implicit culture-sensitive string methods

**OpenRewrite.Recipes.CodeQuality.Performance.FindImplicitCultureSensitiveMethods**

_Detect calls to `ToLower()` and `ToUpper()` without culture parameters. These methods use the current thread culture, which may cause unexpected behavior._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.FindImplicitCultureSensitiveMethods"
  displayName="Find implicit culture-sensitive string methods"
  nugetPackage="OpenRewrite.CodeQuality"
/>
