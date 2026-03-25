---
sidebar_label: "Find Span&lt;char&gt; equality that should use SequenceEqual"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find Span&lt;char&gt; equality that should use SequenceEqual

**OpenRewrite.Recipes.CodeQuality.Performance.FindSequenceEqualForSpan**

_Detect `==` and `!=` operators on `Span<char>` or `ReadOnlySpan<char>` which compare references. Use `SequenceEqual` for content comparison._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [performance](/user-documentation/recipes/lists/recipes-by-tag#performance)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Performance code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/performance/performancecodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.FindSequenceEqualForSpan"
  displayName="Find Span&lt;char&gt; equality that should use SequenceEqual"
  nugetPackage="OpenRewrite.CodeQuality"
/>
