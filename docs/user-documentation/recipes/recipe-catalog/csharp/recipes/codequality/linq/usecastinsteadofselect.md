---
sidebar_label: "Use Cast&lt;T&gt;() instead of Select with cast"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use Cast&lt;T&gt;() instead of Select with cast

**OpenRewrite.Recipes.CodeQuality.Linq.UseCastInsteadOfSelect**

_Replace `.Select(x => (T)x)` with `.Cast<T>()`. The `Cast<T>()` method is more concise and clearly expresses the intent._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Linq.UseCastInsteadOfSelect"
  displayName="Use Cast&lt;T&gt;() instead of Select with cast"
  nugetPackage="OpenRewrite.CodeQuality"
/>
