---
sidebar_label: "Use conditional expression in declaration"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use conditional expression in declaration

**OpenRewrite.Recipes.CodeQuality.Simplification.UseConditionalExpressionForDeclaration**

_Convert `int x; if (cond) x = a; else x = b;` to `int x = cond ? a : b;`._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Simplification.UseConditionalExpressionForDeclaration"
  displayName="Use conditional expression in declaration"
  nugetPackage="OpenRewrite.CodeQuality"
/>
