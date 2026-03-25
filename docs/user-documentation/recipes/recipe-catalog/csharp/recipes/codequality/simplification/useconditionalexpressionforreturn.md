---
sidebar_label: "Use conditional return expression"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use conditional return expression

**OpenRewrite.Recipes.CodeQuality.Simplification.UseConditionalExpressionForReturn**

_Convert `if (c) return a; return b;` to `return c ? a : b;`._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Simplification.UseConditionalExpressionForReturn"
  displayName="Use conditional return expression"
  nugetPackage="OpenRewrite.CodeQuality"
/>
