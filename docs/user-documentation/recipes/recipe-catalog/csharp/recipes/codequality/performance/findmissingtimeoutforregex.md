---
sidebar_label: "Add timeout to Regex"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add timeout to Regex

**OpenRewrite.Recipes.CodeQuality.Performance.FindMissingTimeoutForRegex**

_Regex without a timeout can be vulnerable to ReDoS attacks. Specify a `TimeSpan` timeout or use `RegexOptions.NonBacktracking`._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.FindMissingTimeoutForRegex"
  displayName="Add timeout to Regex"
  nugetPackage="OpenRewrite.CodeQuality"
/>
