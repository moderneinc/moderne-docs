---
sidebar_label: "Find obsolete `X509Certificate2`/`X509Certificate` constructors (SYSLIB0057)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find obsolete `X509Certificate2`/`X509Certificate` constructors (SYSLIB0057)

**OpenRewrite.Recipes.Net9.FindX509CertificateConstructors**

_Finds usages of `X509Certificate2` and `X509Certificate` constructors that accept binary content or file paths, which are obsolete in .NET 9 (SYSLIB0057). Use `X509CertificateLoader` methods instead._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [cryptography](/user-documentation/recipes/lists/recipes-by-tag#cryptography)
* [net9](/user-documentation/recipes/lists/recipes-by-tag#net9)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net9.FindX509CertificateConstructors"
  displayName="Find obsolete `X509Certificate2`/`X509Certificate` constructors (SYSLIB0057)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
