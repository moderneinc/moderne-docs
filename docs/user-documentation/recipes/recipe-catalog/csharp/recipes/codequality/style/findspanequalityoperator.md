---
sidebar_label: "Find equality operator on Span&lt;T&gt;"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find equality operator on Span&lt;T&gt;

**OpenRewrite.Recipes.CodeQuality.Style.FindSpanEqualityOperator**

_Detect `==` or `!=` operators on `Span<T>` or `ReadOnlySpan<T>`. Use `SequenceEqual` instead._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Style.FindSpanEqualityOperator"
  displayName="Find equality operator on Span&lt;T&gt;"
  nugetPackage="OpenRewrite.CodeQuality"
/>
