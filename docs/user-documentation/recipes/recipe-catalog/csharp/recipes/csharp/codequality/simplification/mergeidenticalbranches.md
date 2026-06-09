---
title: "Merge identical branches"
sidebar_label: "Merge identical branches"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Merge identical branches

**OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.MergeIdenticalBranches**

_Merge consecutive if/else-if branches that have identical bodies by combining their conditions with `||`._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [simplification](/user-documentation/recipes/lists/recipes-by-tag#simplification)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.MergeIdenticalBranches"
  displayName="Merge identical branches"
  nugetPackage="OpenRewrite.Recipes.CSharp.CodeQuality"
/>
