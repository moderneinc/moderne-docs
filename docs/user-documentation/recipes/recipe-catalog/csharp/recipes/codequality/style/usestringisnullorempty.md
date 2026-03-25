---
sidebar_label: "Use string.IsNullOrEmpty method"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use string.IsNullOrEmpty method

**OpenRewrite.Recipes.CodeQuality.Style.UseStringIsNullOrEmpty**

_Replace `s == null || s == ""` and `s == null || s.Length == 0` with `string.IsNullOrEmpty(s)`._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Style.UseStringIsNullOrEmpty"
  displayName="Use string.IsNullOrEmpty method"
  nugetPackage="OpenRewrite.CodeQuality"
/>
