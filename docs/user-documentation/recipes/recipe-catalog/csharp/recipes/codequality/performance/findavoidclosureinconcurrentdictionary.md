---
sidebar_label: "Avoid closure when using ConcurrentDictionary"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Avoid closure when using ConcurrentDictionary

**OpenRewrite.Recipes.CodeQuality.Performance.FindAvoidClosureInConcurrentDictionary**

_ConcurrentDictionary methods like `GetOrAdd` may evaluate the factory even when the key exists. Use the overload with a factory argument to avoid closure allocation._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.FindAvoidClosureInConcurrentDictionary"
  displayName="Avoid closure when using ConcurrentDictionary"
  nugetPackage="OpenRewrite.CodeQuality"
/>
