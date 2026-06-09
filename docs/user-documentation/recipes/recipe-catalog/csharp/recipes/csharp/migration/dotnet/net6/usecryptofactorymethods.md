---
title: "Use factory method for abstract cryptographic types"
sidebar_label: "Use factory method for abstract cryptographic types"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use factory method for abstract cryptographic types

**OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.UseCryptoFactoryMethods**

_Replace `new AbstractCryptoType()` with `AbstractCryptoType.Create()` for abstract cryptographic types like `SHA256`, `Aes`, `RandomNumberGenerator`, etc. These types are abstract and cannot be instantiated directly; callers must use the static `Create()` factory method._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [SYSLIB0023](/user-documentation/recipes/lists/recipes-by-tag#syslib0023)
* [SYSLIB0022](/user-documentation/recipes/lists/recipes-by-tag#syslib0022)
* [SYSLIB0021](/user-documentation/recipes/lists/recipes-by-tag#syslib0021)
* [cryptography](/user-documentation/recipes/lists/recipes-by-tag#cryptography)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 6](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/upgradetodotnet6)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.UseCryptoFactoryMethods"
  displayName="Use factory method for abstract cryptographic types"
  nugetPackage="OpenRewrite.Recipes.CSharp.Migration.Dotnet"
/>
