---
sidebar_label: "Find 'is' pattern with string literal"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find 'is' pattern with string literal

**OpenRewrite.Recipes.CodeQuality.Style.FindUseStringEqualsInsteadOfIsPattern**

_Detect `x is "literal"` patterns that should use `string.Equals` with explicit `StringComparison` for culture-aware or case-insensitive comparisons._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Style.FindUseStringEqualsInsteadOfIsPattern"
  displayName="Find 'is' pattern with string literal"
  nugetPackage="OpenRewrite.CodeQuality"
/>
