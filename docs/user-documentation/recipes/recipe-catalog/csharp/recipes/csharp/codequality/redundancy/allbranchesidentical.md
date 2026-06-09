---
title: "Remove if/else with identical branches"
sidebar_label: "Remove if/else with identical branches"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove if/else with identical branches

**OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.AllBranchesIdentical**

_Replace an if/else chain where every branch has the same body with just the body, since the conditions have no effect on the outcome._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [redundancy](/user-documentation/recipes/lists/recipes-by-tag#redundancy)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.AllBranchesIdentical"
  displayName="Remove if/else with identical branches"
  nugetPackage="OpenRewrite.Recipes.CSharp.CodeQuality"
/>
