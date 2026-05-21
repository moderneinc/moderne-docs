---
sidebar_label: "Find closure in GetOrAdd that could use factory argument"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find closure in GetOrAdd that could use factory argument

**OpenRewrite.Recipes.CodeQuality.Performance.FindAvoidClosureByUsingFactoryArg**

_Detect `ConcurrentDictionary.GetOrAdd` calls with lambdas that capture variables. Use the overload with a factory argument parameter to avoid allocation._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.FindAvoidClosureByUsingFactoryArg"
  displayName="Find closure in GetOrAdd that could use factory argument"
  nugetPackage="OpenRewrite.CodeQuality"
/>
