---
sidebar_label: "Find Regex that could use source generator"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find Regex that could use source generator

**OpenRewrite.Recipes.CodeQuality.Performance.FindUseRegexSourceGenerator**

_Detect `new Regex(...)` calls that could benefit from the `[GeneratedRegex]` source generator attribute for better performance (.NET 7+)._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.FindUseRegexSourceGenerator"
  displayName="Find Regex that could use source generator"
  nugetPackage="OpenRewrite.CodeQuality"
/>
