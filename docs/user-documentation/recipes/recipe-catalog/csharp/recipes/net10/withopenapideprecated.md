---
sidebar_label: "Remove deprecated `WithOpenApi` calls (ASPDEPR002)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove deprecated `WithOpenApi` calls (ASPDEPR002)

**OpenRewrite.Recipes.Net10.WithOpenApiDeprecated**

_Removes `.WithOpenApi()` calls which are deprecated in .NET 10. The call is removed from fluent method chains._

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
  recipeName="OpenRewrite.Recipes.Net10.WithOpenApiDeprecated"
  displayName="Remove deprecated `WithOpenApi` calls (ASPDEPR002)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
