---
sidebar_label: "Merge else with nested if"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Merge else with nested if

**OpenRewrite.Recipes.CodeQuality.Simplification.MergeElseWithNestedIf**

_Merge `else { if (...) { } }` into `else if (...) { }` when the else block contains only a single if statement._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Simplification.MergeElseWithNestedIf"
  displayName="Merge else with nested if"
  nugetPackage="OpenRewrite.CodeQuality"
/>
