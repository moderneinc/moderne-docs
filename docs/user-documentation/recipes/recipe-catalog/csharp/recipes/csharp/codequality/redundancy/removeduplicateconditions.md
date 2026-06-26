---
title: "Remove duplicate conditions"
sidebar_label: "Remove duplicate conditions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove duplicate conditions

**OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveDuplicateConditions**

_Remove else-if branches whose condition duplicates an earlier branch in the same if/else-if chain, since the later branch is dead code._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [redundancy](/user-documentation/recipes/lists/recipes-by-tag#redundancy)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveDuplicateConditions"
  displayName="Remove duplicate conditions"
  nugetPackage="OpenRewrite.Recipes.CSharp.CodeQuality"
/>
