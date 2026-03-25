---
sidebar_label: "ArgumentException should specify argument name"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# ArgumentException should specify argument name

**OpenRewrite.Recipes.CodeQuality.Style.FindArgumentExceptionParameterName**

_When throwing `ArgumentException` or derived types, specify the parameter name using `nameof()`._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Style.FindArgumentExceptionParameterName"
  displayName="ArgumentException should specify argument name"
  nugetPackage="OpenRewrite.CodeQuality"
/>
