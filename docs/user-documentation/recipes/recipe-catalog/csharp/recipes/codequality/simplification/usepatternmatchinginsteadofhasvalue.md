---
sidebar_label: "Use pattern matching instead of HasValue"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use pattern matching instead of HasValue

**OpenRewrite.Recipes.CodeQuality.Simplification.UsePatternMatchingInsteadOfHasValue**

_Replace `nullable.HasValue` with `nullable is not null`. Pattern matching is more idiomatic in modern C#. Note: this recipe uses name-based matching and may match non-Nullable types with a `HasValue` property._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Simplification.UsePatternMatchingInsteadOfHasValue"
  displayName="Use pattern matching instead of HasValue"
  nugetPackage="OpenRewrite.CodeQuality"
/>
