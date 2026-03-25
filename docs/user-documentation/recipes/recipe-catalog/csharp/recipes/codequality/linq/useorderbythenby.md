---
sidebar_label: "Use ThenBy instead of second OrderBy"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use ThenBy instead of second OrderBy

**OpenRewrite.Recipes.CodeQuality.Linq.UseOrderByThenBy**

_Replace `items.OrderBy(a).OrderBy(b)` with `items.OrderBy(a).ThenBy(b)`. A second `OrderBy` discards the first sort; `ThenBy` preserves it as a secondary key._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Linq.UseOrderByThenBy"
  displayName="Use ThenBy instead of second OrderBy"
  nugetPackage="OpenRewrite.CodeQuality"
/>
