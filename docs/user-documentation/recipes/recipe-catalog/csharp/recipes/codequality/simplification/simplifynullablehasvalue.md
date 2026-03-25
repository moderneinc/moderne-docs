---
sidebar_label: "Simplify Nullable&lt;T&gt;.HasValue"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Simplify Nullable&lt;T&gt;.HasValue

**OpenRewrite.Recipes.CodeQuality.Simplification.SimplifyNullableHasValue**

_Replace `x.HasValue` with `x != null` and `!x.HasValue` with `x == null`._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Simplification.SimplifyNullableHasValue"
  displayName="Simplify Nullable&lt;T&gt;.HasValue"
  nugetPackage="OpenRewrite.CodeQuality"
/>
