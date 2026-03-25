---
sidebar_label: "Use block body or expression body"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use block body or expression body

**OpenRewrite.Recipes.CodeQuality.Style.UseBlockBodyOrExpressionBody**

_Convert between block body and expression body for members._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `Boolean` | AllowMultiLine | *Optional*. When true, also flags methods with multi-line return expressions (e.g., switch expressions, multi-line conditionals). Default is false, matching Roslyn's default RCS1016 behavior. |  |


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Style.UseBlockBodyOrExpressionBody"
  displayName="Use block body or expression body"
  nugetPackage="OpenRewrite.CodeQuality"
/>
