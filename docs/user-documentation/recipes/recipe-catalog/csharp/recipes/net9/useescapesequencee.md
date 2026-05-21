---
sidebar_label: "Use \e escape sequence"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use \e escape sequence

**OpenRewrite.Recipes.Net9.UseEscapeSequenceE**

_Replace `\u001b` and `\x1b` escape sequences with `\e`. C# 13 introduced `\e` as a dedicated escape sequence for the escape character (U+001B)._

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
  recipeName="OpenRewrite.Recipes.Net9.UseEscapeSequenceE"
  displayName="Use \e escape sequence"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
