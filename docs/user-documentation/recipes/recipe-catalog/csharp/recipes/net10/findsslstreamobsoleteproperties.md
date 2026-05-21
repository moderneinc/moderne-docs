---
sidebar_label: "Find obsolete `SslStream` cipher properties (SYSLIB0058)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find obsolete `SslStream` cipher properties (SYSLIB0058)

**OpenRewrite.Recipes.Net10.FindSslStreamObsoleteProperties**

_Finds usages of `SslStream.KeyExchangeAlgorithm`, `KeyExchangeStrength`, `CipherAlgorithm`, `CipherStrength`, `HashAlgorithm`, and `HashStrength` which are obsolete in .NET 10. Use `SslStream.NegotiatedCipherSuite` instead._

### Tags

* [net10](/user-documentation/recipes/lists/recipes-by-tag#net10)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net10/upgradetodotnet10)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net10.FindSslStreamObsoleteProperties"
  displayName="Find obsolete `SslStream` cipher properties (SYSLIB0058)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
