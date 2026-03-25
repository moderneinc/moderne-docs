---
sidebar_label: "Find Swashbuckle usage (ASP.NET Core 9 built-in OpenAPI)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find Swashbuckle usage (ASP.NET Core 9 built-in OpenAPI)

**OpenRewrite.Recipes.Net9.FindSwashbuckle**

_Finds usages of Swashbuckle APIs (`AddSwaggerGen`, `UseSwagger`, `UseSwaggerUI`). .NET 9 includes built-in OpenAPI support. Consider migrating to `AddOpenApi()`/`MapOpenApi()`._

### Tags

* [aspnet](/user-documentation/recipes/lists/recipes-by-tag#aspnet)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [net9](/user-documentation/recipes/lists/recipes-by-tag#net9)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net9.FindSwashbuckle"
  displayName="Find Swashbuckle usage (ASP.NET Core 9 built-in OpenAPI)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
