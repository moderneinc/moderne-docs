---
sidebar_label: "Find `Regex.CompileToAssembly` usage (SYSLIB0052)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `Regex.CompileToAssembly` usage (SYSLIB0052)

**OpenRewrite.Recipes.Net8.FindRegexCompileToAssembly**

_Finds usage of `Regex.CompileToAssembly()` and `RegexCompilationInfo`. These are obsolete in .NET 8 (SYSLIB0052). Use the Regex source generator instead._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [regex](/user-documentation/recipes/lists/recipes-by-tag#regex)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [net8](/user-documentation/recipes/lists/recipes-by-tag#net8)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net8/upgradetodotnet8)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net8.FindRegexCompileToAssembly"
  displayName="Find `Regex.CompileToAssembly` usage (SYSLIB0052)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
