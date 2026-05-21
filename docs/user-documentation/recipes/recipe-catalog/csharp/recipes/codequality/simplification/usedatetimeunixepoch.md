---
sidebar_label: "Use DateTime.UnixEpoch"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use DateTime.UnixEpoch

**OpenRewrite.Recipes.CodeQuality.Simplification.UseDateTimeUnixEpoch**

_Replace `new DateTime(1970, 1, 1)` with `DateTime.UnixEpoch`. Available since .NET 8, `DateTime.UnixEpoch` is more readable and avoids magic numbers._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Simplification.UseDateTimeUnixEpoch"
  displayName="Use DateTime.UnixEpoch"
  nugetPackage="OpenRewrite.CodeQuality"
/>
