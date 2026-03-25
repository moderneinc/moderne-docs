---
sidebar_label: "Use EventArgs.Empty instead of null"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use EventArgs.Empty instead of null

**OpenRewrite.Recipes.CodeQuality.Style.UseEventArgsEmptyForNull**

_Replace `null` with `EventArgs.Empty` when raising events. Passing `null` for EventArgs can cause NullReferenceException in event handlers._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Style code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/style/stylecodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Style.UseEventArgsEmptyForNull"
  displayName="Use EventArgs.Empty instead of null"
  nugetPackage="OpenRewrite.CodeQuality"
/>
