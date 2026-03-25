---
sidebar_label: "Return completed task instead of null"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Return completed task instead of null

**OpenRewrite.Recipes.CodeQuality.Performance.ReturnCompletedTask**

_Replace return null in Task-returning methods with return Task.CompletedTask._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Performance code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/performance/performancecodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.ReturnCompletedTask"
  displayName="Return completed task instead of null"
  nugetPackage="OpenRewrite.CodeQuality"
/>
