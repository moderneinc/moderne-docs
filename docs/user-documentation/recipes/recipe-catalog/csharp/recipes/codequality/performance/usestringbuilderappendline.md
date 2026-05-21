---
sidebar_label: "Use StringBuilder.AppendLine"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use StringBuilder.AppendLine

**OpenRewrite.Recipes.CodeQuality.Performance.UseStringBuilderAppendLine**

_Replace `sb.Append("\n")` with `sb.AppendLine()`._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Performance code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/performance/performancecodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.UseStringBuilderAppendLine"
  displayName="Use StringBuilder.AppendLine"
  nugetPackage="OpenRewrite.CodeQuality"
/>
