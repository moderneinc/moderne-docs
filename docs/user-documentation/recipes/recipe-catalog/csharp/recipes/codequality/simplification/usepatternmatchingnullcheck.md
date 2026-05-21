---
sidebar_label: "Use pattern matching for null check"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use pattern matching for null check

**OpenRewrite.Recipes.CodeQuality.Simplification.UsePatternMatchingNullCheck**

_Replace `x == null` with `x is null` and `x != null` with `x is not null`._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Style code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/style/stylecodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Simplification.UsePatternMatchingNullCheck"
  displayName="Use pattern matching for null check"
  nugetPackage="OpenRewrite.CodeQuality"
/>
