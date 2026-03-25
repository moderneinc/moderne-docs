---
sidebar_label: "Embed caught exception as inner exception"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Embed caught exception as inner exception

**OpenRewrite.Recipes.CodeQuality.Style.FindEmbedCaughtExceptionAsInner**

_When rethrowing a different exception in a catch block, pass the original exception as the inner exception to preserve the stack trace._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Style.FindEmbedCaughtExceptionAsInner"
  displayName="Embed caught exception as inner exception"
  nugetPackage="OpenRewrite.CodeQuality"
/>
