---
sidebar_label: "Find unused Stream.Read return value"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find unused Stream.Read return value

**OpenRewrite.Recipes.CodeQuality.Performance.FindStreamReadResultNotUsed**

_Detect calls to `Stream.Read` or `Stream.ReadAsync` where the return value is discarded. The return value indicates how many bytes were actually read._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.FindStreamReadResultNotUsed"
  displayName="Find unused Stream.Read return value"
  nugetPackage="OpenRewrite.CodeQuality"
/>
