---
title: "Remove explicit 'class' from record"
sidebar_label: "Remove explicit 'class' from record"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove explicit 'class' from record

**OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveExplicitClassFromRecord**

_Remove the redundant `class` keyword from `record class` declarations. Records are reference types by default._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [redundancy](/user-documentation/recipes/lists/recipes-by-tag#redundancy)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Redundancy code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/redundancy/redundancycodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveExplicitClassFromRecord"
  displayName="Remove explicit 'class' from record"
  nugetPackage="OpenRewrite.Recipes.CSharp.CodeQuality"
/>
