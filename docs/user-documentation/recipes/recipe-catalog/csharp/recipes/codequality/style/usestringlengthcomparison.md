---
sidebar_label: "Use string.Length instead of comparison with empty string"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use string.Length instead of comparison with empty string

**OpenRewrite.Recipes.CodeQuality.Style.UseStringLengthComparison**

_Replace `s == ""` with `s.Length == 0` and `s != ""` with `s.Length != 0`._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Style.UseStringLengthComparison"
  displayName="Use string.Length instead of comparison with empty string"
  nugetPackage="OpenRewrite.CodeQuality"
/>
