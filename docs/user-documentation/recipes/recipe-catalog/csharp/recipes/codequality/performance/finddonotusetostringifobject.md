---
sidebar_label: "Do not use ToString on GetType result"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Do not use ToString on GetType result

**OpenRewrite.Recipes.CodeQuality.Performance.FindDoNotUseToStringIfObject**

_Using `.GetType().ToString()` returns the full type name. Consider using `.GetType().Name` or `.GetType().FullName` instead for clarity._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.FindDoNotUseToStringIfObject"
  displayName="Do not use ToString on GetType result"
  nugetPackage="OpenRewrite.CodeQuality"
/>
