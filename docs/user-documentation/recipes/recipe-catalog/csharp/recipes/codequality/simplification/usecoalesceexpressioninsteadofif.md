---
sidebar_label: "Use coalesce expression instead of 'if'"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use coalesce expression instead of 'if'

**OpenRewrite.Recipes.CodeQuality.Simplification.UseCoalesceExpressionInsteadOfIf**

_Replace `if (x == null) x = y;` with `x ??= y`._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Simplification.UseCoalesceExpressionInsteadOfIf"
  displayName="Use coalesce expression instead of 'if'"
  nugetPackage="OpenRewrite.CodeQuality"
/>
