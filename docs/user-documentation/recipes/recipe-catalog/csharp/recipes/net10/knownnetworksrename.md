---
sidebar_label: "Rename `KnownNetworks` to `KnownIPNetworks` (ASPDEPR005)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename `KnownNetworks` to `KnownIPNetworks` (ASPDEPR005)

**OpenRewrite.Recipes.Net10.KnownNetworksRename**

_Renames `ForwardedHeadersOptions.KnownNetworks` to `KnownIPNetworks` for .NET 10 compatibility._

### Tags

* [net10](/user-documentation/recipes/lists/recipes-by-tag#net10)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [aspnetcore](/user-documentation/recipes/lists/recipes-by-tag#aspnetcore)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net10/upgradetodotnet10)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net10.KnownNetworksRename"
  displayName="Rename `KnownNetworks` to `KnownIPNetworks` (ASPDEPR005)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
