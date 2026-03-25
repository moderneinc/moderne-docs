---
sidebar_label: "Find IAsyncEnumerable method without Async suffix"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find IAsyncEnumerable method without Async suffix

**OpenRewrite.Recipes.CodeQuality.Style.FindMethodReturningIAsyncEnumerable**

_Detect methods returning `IAsyncEnumerable<T>` that don't end with `Async`._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [naming](/user-documentation/recipes/lists/recipes-by-tag#naming)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Style code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/style/stylecodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Style.FindMethodReturningIAsyncEnumerable"
  displayName="Find IAsyncEnumerable method without Async suffix"
  nugetPackage="OpenRewrite.CodeQuality"
/>
