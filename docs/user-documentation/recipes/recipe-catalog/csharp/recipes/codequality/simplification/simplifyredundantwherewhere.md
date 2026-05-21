---
sidebar_label: "Merge consecutive Where calls"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Merge consecutive Where calls

**OpenRewrite.Recipes.CodeQuality.Simplification.SimplifyRedundantWhereWhere**

_Detect consecutive `.Where(p).Where(q)` calls that could be merged._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Simplification.SimplifyRedundantWhereWhere"
  displayName="Merge consecutive Where calls"
  nugetPackage="OpenRewrite.CodeQuality"
/>
