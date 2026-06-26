---
title: "Remove self-assignment"
sidebar_label: "Remove self-assignment"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove self-assignment

**OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveSelfAssignment**

_Remove assignment statements where the variable is assigned to itself, such as `x = x`. These have no effect and are likely copy-paste errors._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.CodeQuality.Redundancy.RemoveSelfAssignment"
  displayName="Remove self-assignment"
  nugetPackage="OpenRewrite.Recipes.CSharp.CodeQuality"
/>
