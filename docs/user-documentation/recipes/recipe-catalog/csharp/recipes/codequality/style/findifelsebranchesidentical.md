---
sidebar_label: "Find if/else with identical branches"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find if/else with identical branches

**OpenRewrite.Recipes.CodeQuality.Style.FindIfElseBranchesIdentical**

_Detect `if/else` statements where both branches contain identical code. This is likely a copy-paste bug._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [style](/user-documentation/recipes/lists/recipes-by-tag#style)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Style code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/style/stylecodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Style.FindIfElseBranchesIdentical"
  displayName="Find if/else with identical branches"
  nugetPackage="OpenRewrite.CodeQuality"
/>
