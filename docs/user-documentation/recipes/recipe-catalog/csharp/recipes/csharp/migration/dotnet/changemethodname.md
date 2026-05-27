---
sidebar_label: "Change method name"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Change method name

**OpenRewrite.Recipes.CSharp.Migration.Dotnet.ChangeMethodName**

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

* [Migrate to .NET 6](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/upgradetodotnet6)
* [Migrate to .NET 7](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net7/upgradetodotnet7)
* [Migrate to .NET 8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/upgradetodotnet8)
* [Migrate to .NET Core 3.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net3_0/upgradetodotnet3_0)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.Migration.Dotnet.ChangeMethodName"
  displayName="Change method name"
  nugetPackage="OpenRewrite.Recipes.CSharp.Migration.Dotnet"
/>
