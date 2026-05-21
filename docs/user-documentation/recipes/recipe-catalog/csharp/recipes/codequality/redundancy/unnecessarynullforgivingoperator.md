---
sidebar_label: "Remove unnecessary null-forgiving operator"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove unnecessary null-forgiving operator

**OpenRewrite.Recipes.CodeQuality.Redundancy.UnnecessaryNullForgivingOperator**

_Remove ! operator where expression is already non-nullable._

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
  recipeName="OpenRewrite.Recipes.CodeQuality.Redundancy.UnnecessaryNullForgivingOperator"
  displayName="Remove unnecessary null-forgiving operator"
  nugetPackage="OpenRewrite.CodeQuality"
/>
