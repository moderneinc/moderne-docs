---
title: "Change type"
sidebar_label: "Change type"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Change type

**OpenRewrite.Recipes.CSharp.Migration.Dotnet.ChangeType**

_Change a type reference to another type._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | OldFullyQualifiedTypeName | Fully-qualified class name of the original type. | `System.Security.Cryptography.AesCryptoServiceProvider` |
| `String` | NewFullyQualifiedTypeName | Fully-qualified class name of the replacement type. | `System.Security.Cryptography.Aes` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate ASP.NET Framework to ASP.NET Core](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/aspnet/upgradeaspnetframeworktocore)
* [Migrate to .NET 5](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net5/upgradetodotnet5)
* [Migrate to .NET 6](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/upgradetodotnet6)
* [Migrate to .NET 7](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net7/upgradetodotnet7)
* [Migrate to .NET 8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/upgradetodotnet8)
* [Migrate to .NET Core 3.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net3_0/upgradetodotnet3_0)
* [Migrate to .NET Core 3.1](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net3_1/upgradetodotnet3_1)
* [Migrate to ASP.NET Core 2.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/aspnetcore2/upgradetoaspnetcore20)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.Migration.Dotnet.ChangeType"
  displayName="Change type"
  nugetPackage="OpenRewrite.Recipes.CSharp.Migration.Dotnet"
/>
