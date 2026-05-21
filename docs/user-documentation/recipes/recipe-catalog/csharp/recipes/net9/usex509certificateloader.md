---
sidebar_label: "Use X509CertificateLoader (SYSLIB0057)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use X509CertificateLoader (SYSLIB0057)

**OpenRewrite.Recipes.Net9.UseX509CertificateLoader**

_Replace `new X509Certificate2(path, password)` with `X509CertificateLoader.LoadPkcs12FromFile(path, password)`. The two-argument X509Certificate2 constructor is obsolete in .NET 9 (SYSLIB0057)._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [cryptography](/user-documentation/recipes/lists/recipes-by-tag#cryptography)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net9.UseX509CertificateLoader"
  displayName="Use X509CertificateLoader (SYSLIB0057)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
