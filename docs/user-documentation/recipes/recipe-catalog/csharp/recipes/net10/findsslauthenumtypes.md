---
sidebar_label: "Find obsolete SSL authentication enum types"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find obsolete SSL authentication enum types

**OpenRewrite.Recipes.Net10.FindSslAuthEnumTypes**

_Finds usage of `ExchangeAlgorithmType`, `CipherAlgorithmType`, and `HashAlgorithmType` from `System.Security.Authentication`. These enum types are obsolete in .NET 10 (SYSLIB0058). Use `SslStream.NegotiatedCipherSuite` instead._

### Tags

* [net10](/user-documentation/recipes/lists/recipes-by-tag#net10)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [tls](/user-documentation/recipes/lists/recipes-by-tag#tls)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net10/upgradetodotnet10)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net10.FindSslAuthEnumTypes"
  displayName="Find obsolete SSL authentication enum types"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
