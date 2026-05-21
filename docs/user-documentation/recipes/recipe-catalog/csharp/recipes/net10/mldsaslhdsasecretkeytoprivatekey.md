---
sidebar_label: "Rename MLDsa/SlhDsa `SecretKey` members to `PrivateKey`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename MLDsa/SlhDsa `SecretKey` members to `PrivateKey`

**OpenRewrite.Recipes.Net10.MlDsaSlhDsaSecretKeyToPrivateKey**

_Renames `SecretKey` to `PrivateKey` in MLDsa and SlhDsa post-quantum cryptography APIs to align with .NET 10 naming conventions._

### Tags

* [net10](/user-documentation/recipes/lists/recipes-by-tag#net10)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [cryptography](/user-documentation/recipes/lists/recipes-by-tag#cryptography)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net10/upgradetodotnet10)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net10.MlDsaSlhDsaSecretKeyToPrivateKey"
  displayName="Rename MLDsa/SlhDsa `SecretKey` members to `PrivateKey`"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
