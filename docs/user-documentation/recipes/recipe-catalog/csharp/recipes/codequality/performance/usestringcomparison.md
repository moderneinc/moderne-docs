---
sidebar_label: "Use StringComparison"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use StringComparison

**OpenRewrite.Recipes.CodeQuality.Performance.UseStringComparison**

_Replace case-insensitive string comparisons using `ToLower()`/`ToUpper()` with overloads that accept `StringComparison.OrdinalIgnoreCase`._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.UseStringComparison"
  displayName="Use StringComparison"
  nugetPackage="OpenRewrite.CodeQuality"
/>
