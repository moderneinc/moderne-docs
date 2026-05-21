---
sidebar_label: "Find implicit DateTime to DateTimeOffset conversion"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find implicit DateTime to DateTimeOffset conversion

**OpenRewrite.Recipes.CodeQuality.Style.FindImplicitDateTimeOffsetConversion**

_Detect implicit conversion from `DateTime` to `DateTimeOffset` which uses the local time zone and can produce unexpected results._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Style.FindImplicitDateTimeOffsetConversion"
  displayName="Find implicit DateTime to DateTimeOffset conversion"
  nugetPackage="OpenRewrite.CodeQuality"
/>
