---
sidebar_label: "Use Task.CompletedTask"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use Task.CompletedTask

**OpenRewrite.Recipes.Net9.UseTaskCompletedTask**

_Replace `Task.FromResult(0)`, `Task.FromResult(true)`, and `Task.FromResult(false)` with `Task.CompletedTask` when the return type is `Task` (not `Task<T>`)._

### Tags

* [modernization](/user-documentation/recipes/lists/recipes-by-tag#modernization)
* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net9.UseTaskCompletedTask"
  displayName="Use Task.CompletedTask"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
