---
sidebar_label: "Delete method argument"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Delete method argument

**OpenRewrite.Recipes.DeleteMethodArgument**

_Delete an argument from method invocations._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | MethodPattern | A method pattern used to find matching method invocations. | `System.Security.Cryptography.Aes Create(System.String)` |
| `Int32` | ArgumentIndex | The zero-based index of the argument to remove. | `0` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 6](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net6/upgradetodotnet6)
* [Migrate to .NET 7](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net7/upgradetodotnet7)
* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.DeleteMethodArgument"
  displayName="Delete method argument"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
