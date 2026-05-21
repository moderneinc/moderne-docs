---
sidebar_label: "Use TimeSpan.Zero"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use TimeSpan.Zero

**OpenRewrite.Recipes.CodeQuality.Simplification.UseTimeSpanZero**

_Replace `new TimeSpan(0)` and `TimeSpan.FromX(0)` with `TimeSpan.Zero`. The static `TimeSpan.Zero` field is more readable and avoids unnecessary object creation._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Simplification code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/simplification/simplificationcodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Simplification.UseTimeSpanZero"
  displayName="Use TimeSpan.Zero"
  nugetPackage="OpenRewrite.CodeQuality"
/>
