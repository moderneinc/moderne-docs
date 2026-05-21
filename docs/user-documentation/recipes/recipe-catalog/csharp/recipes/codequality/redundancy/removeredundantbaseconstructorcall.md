---
sidebar_label: "Remove redundant base constructor call"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove redundant base constructor call

**OpenRewrite.Recipes.CodeQuality.Redundancy.RemoveRedundantBaseConstructorCall**

_Remove `: base()` parameterless base constructor call since it's implicit._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Redundancy.RemoveRedundantBaseConstructorCall"
  displayName="Remove redundant base constructor call"
  nugetPackage="OpenRewrite.CodeQuality"
/>
