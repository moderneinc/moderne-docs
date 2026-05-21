---
sidebar_label: "Find Stream.Read() return value ignored"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find Stream.Read() return value ignored

**OpenRewrite.Recipes.CodeQuality.Style.FindStreamReadIgnored**

_Detect `Stream.Read()` calls where the return value (bytes read) is not used. This can lead to incomplete reads._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Style.FindStreamReadIgnored"
  displayName="Find Stream.Read() return value ignored"
  nugetPackage="OpenRewrite.CodeQuality"
/>
