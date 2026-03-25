---
sidebar_label: "Find obsolete `SslProtocols.Tls`/`Tls11` usage (SYSLIB0039)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find obsolete `SslProtocols.Tls`/`Tls11` usage (SYSLIB0039)

**OpenRewrite.Recipes.Net7.FindObsoleteSslProtocols**

_Finds usages of `SslProtocols.Tls` and `SslProtocols.Tls11` which are obsolete in .NET 7 (SYSLIB0039). Use `SslProtocols.Tls12`, `SslProtocols.Tls13`, or `SslProtocols.None` instead._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [net7](/user-documentation/recipes/lists/recipes-by-tag#net7)
* [networking](/user-documentation/recipes/lists/recipes-by-tag#networking)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 7](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net7/upgradetodotnet7)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net7.FindObsoleteSslProtocols"
  displayName="Find obsolete `SslProtocols.Tls`/`Tls11` usage (SYSLIB0039)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
