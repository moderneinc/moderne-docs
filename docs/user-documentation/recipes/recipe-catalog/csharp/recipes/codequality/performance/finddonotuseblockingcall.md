---
sidebar_label: "Do not use blocking calls on tasks"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Do not use blocking calls on tasks

**OpenRewrite.Recipes.CodeQuality.Performance.FindDoNotUseBlockingCall**

_Avoid `.Wait()`, `.Result`, and `.GetAwaiter().GetResult()` on tasks. These can cause deadlocks. Use `await` instead._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [performance](/user-documentation/recipes/lists/recipes-by-tag#performance)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Performance code quality](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/codequality/performance/performancecodequality)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CodeQuality.Performance.FindDoNotUseBlockingCall"
  displayName="Do not use blocking calls on tasks"
  nugetPackage="OpenRewrite.CodeQuality"
/>
