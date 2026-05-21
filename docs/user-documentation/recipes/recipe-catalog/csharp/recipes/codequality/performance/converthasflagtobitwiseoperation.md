---
sidebar_label: "Convert HasFlag to bitwise operation"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Convert HasFlag to bitwise operation

**OpenRewrite.Recipes.CodeQuality.Performance.ConvertHasFlagToBitwiseOperation**

_Replace flags.HasFlag(value) with (flags & value) != 0._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.ConvertHasFlagToBitwiseOperation"
  displayName="Convert HasFlag to bitwise operation"
  nugetPackage="OpenRewrite.CodeQuality"
/>
