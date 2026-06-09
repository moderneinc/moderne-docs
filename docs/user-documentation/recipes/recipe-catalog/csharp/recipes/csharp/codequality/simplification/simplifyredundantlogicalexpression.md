---
title: "Simplify redundant logical expression"
sidebar_label: "Simplify redundant logical expression"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Simplify redundant logical expression

**OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyRedundantLogicalExpression**

_Simplify `x && x` to `x`, `x || x` to `x`, and similarly for `&` and `|`, where both sides of a logical or bitwise operator are identical._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [simplification](/user-documentation/recipes/lists/recipes-by-tag#simplification)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.SimplifyRedundantLogicalExpression"
  displayName="Simplify redundant logical expression"
  nugetPackage="OpenRewrite.Recipes.CSharp.CodeQuality"
/>
