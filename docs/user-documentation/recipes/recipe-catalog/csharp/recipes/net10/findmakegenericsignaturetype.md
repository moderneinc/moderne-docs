---
sidebar_label: "Find `Type.MakeGenericSignatureType` validation change"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `Type.MakeGenericSignatureType` validation change

**OpenRewrite.Recipes.Net10.FindMakeGenericSignatureType**

_Finds calls to `Type.MakeGenericSignatureType()` which now validates that the first argument is a generic type definition in .NET 10._

### Tags

* [net10](/user-documentation/recipes/lists/recipes-by-tag#net10)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [reflection](/user-documentation/recipes/lists/recipes-by-tag#reflection)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net10/upgradetodotnet10)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net10.FindMakeGenericSignatureType"
  displayName="Find `Type.MakeGenericSignatureType` validation change"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
