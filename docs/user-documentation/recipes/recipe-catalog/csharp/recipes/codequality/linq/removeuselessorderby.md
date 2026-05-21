---
sidebar_label: "Remove useless OrderBy call"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove useless OrderBy call

**OpenRewrite.Recipes.CodeQuality.Linq.RemoveUselessOrderBy**

_Replace `.OrderBy(a).OrderBy(b)` with `.OrderBy(b)`. A second `OrderBy` completely replaces the first sort, making the first call useless._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [linq](/user-documentation/recipes/lists/recipes-by-tag#linq)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [LINQ code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/linq/linqcodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Linq.RemoveUselessOrderBy"
  displayName="Remove useless OrderBy call"
  nugetPackage="OpenRewrite.CodeQuality"
/>
