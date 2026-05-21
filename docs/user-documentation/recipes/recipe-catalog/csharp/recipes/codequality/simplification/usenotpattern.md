---
sidebar_label: "Use 'not' pattern instead of negation"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use 'not' pattern instead of negation

**OpenRewrite.Recipes.CodeQuality.Simplification.UseNotPattern**

_Detect `!(x is Type)` patterns that can use `x is not Type`._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Simplification code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/simplification/simplificationcodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Simplification.UseNotPattern"
  displayName="Use 'not' pattern instead of negation"
  nugetPackage="OpenRewrite.CodeQuality"
/>
