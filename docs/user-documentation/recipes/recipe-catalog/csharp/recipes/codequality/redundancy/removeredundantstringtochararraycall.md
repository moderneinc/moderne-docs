---
sidebar_label: "Remove redundant ToCharArray() call"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove redundant ToCharArray() call

**OpenRewrite.Recipes.CodeQuality.Redundancy.RemoveRedundantStringToCharArrayCall**

_Remove `ToCharArray()` calls in foreach loops where iterating over the string directly produces the same result._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Redundancy code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/redundancy/redundancycodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Redundancy.RemoveRedundantStringToCharArrayCall"
  displayName="Remove redundant ToCharArray() call"
  nugetPackage="OpenRewrite.CodeQuality"
/>
