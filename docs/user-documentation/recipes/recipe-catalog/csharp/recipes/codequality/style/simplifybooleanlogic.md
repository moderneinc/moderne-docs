---
sidebar_label: "Simplify boolean logic with constants"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Simplify boolean logic with constants

**OpenRewrite.Recipes.CodeQuality.Style.SimplifyBooleanLogic**

_Simplify `x || true` to `true`, `x && false` to `false`, `x || false` to `x`, and `x && true` to `x`._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Style.SimplifyBooleanLogic"
  displayName="Simplify boolean logic with constants"
  nugetPackage="OpenRewrite.CodeQuality"
/>
