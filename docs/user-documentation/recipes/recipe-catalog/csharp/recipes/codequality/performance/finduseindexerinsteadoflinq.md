---
sidebar_label: "Find LINQ methods replaceable with indexer"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find LINQ methods replaceable with indexer

**OpenRewrite.Recipes.CodeQuality.Performance.FindUseIndexerInsteadOfLinq**

_Detect LINQ methods like `.First()` and `.Last()` that could be replaced with direct indexer access for better performance._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [linq](/user-documentation/recipes/lists/recipes-by-tag#linq)
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
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.FindUseIndexerInsteadOfLinq"
  displayName="Find LINQ methods replaceable with indexer"
  nugetPackage="OpenRewrite.CodeQuality"
/>
