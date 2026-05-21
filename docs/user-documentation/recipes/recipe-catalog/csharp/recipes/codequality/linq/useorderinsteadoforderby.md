---
sidebar_label: "Use Order() instead of OrderBy() with identity"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use Order() instead of OrderBy() with identity

**OpenRewrite.Recipes.CodeQuality.Linq.UseOrderInsteadOfOrderBy**

_Replace `.OrderBy(x => x)` with `.Order()`. The `Order()` method (available since .NET 7) is a cleaner way to sort elements in their natural order._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Linq.UseOrderInsteadOfOrderBy"
  displayName="Use Order() instead of OrderBy() with identity"
  nugetPackage="OpenRewrite.CodeQuality"
/>
