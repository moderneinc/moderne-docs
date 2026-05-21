---
sidebar_label: "Change method name"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Change method name

**OpenRewrite.Recipes.ChangeMethodName**

_Rename a method._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | MethodPattern | A method pattern used to find matching method invocations. | `System.Uri EscapeUriString(System.String)` |
| `String` | NewMethodName | The method name that will replace the existing name. | `EscapeDataString` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate Swashbuckle to built-in OpenAPI](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/migrateswashbuckletoopenapi)
* [Migrate to .NET 6](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net6/upgradetodotnet6)
* [Migrate to .NET 7](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net7/upgradetodotnet7)
* [Migrate to .NET 8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net8/upgradetodotnet8)
* [Migrate to .NET Core 3.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net3_0/upgradetodotnet3_0)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.ChangeMethodName"
  displayName="Change method name"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
