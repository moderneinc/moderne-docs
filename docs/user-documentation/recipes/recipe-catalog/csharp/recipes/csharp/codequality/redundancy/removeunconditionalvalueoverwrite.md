---
title: "Remove unconditional value overwrite"
sidebar_label: "Remove unconditional value overwrite"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove unconditional value overwrite

**OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveUnconditionalValueOverwrite**

_Remove consecutive assignments to the same collection key or index where the first value is immediately overwritten and never read._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [redundancy](/user-documentation/recipes/lists/recipes-by-tag#redundancy)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveUnconditionalValueOverwrite"
  displayName="Remove unconditional value overwrite"
  nugetPackage="OpenRewrite.Recipes.CSharp.CodeQuality"
/>
