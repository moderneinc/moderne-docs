---
sidebar_label: "Migrate Swashbuckle to built-in OpenAPI"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate Swashbuckle to built-in OpenAPI

**OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.MigrateSwashbuckleToOpenApi**

_Migrate from Swashbuckle to the built-in OpenAPI support in ASP.NET Core 10+. Replaces `AddSwaggerGen()` with `AddOpenApi()`, `UseSwaggerUI()` with `MapOpenApi()`, removes `UseSwagger()`, removes Swashbuckle packages, and adds `Microsoft.AspNetCore.OpenApi`. Only fires when every project targets net10.0+ (the version that ships Microsoft.OpenApi 2.x with its flattened type namespaces)._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [aspnetcore](/user-documentation/recipes/lists/recipes-by-tag#aspnetcore)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.MigrateSwashbuckleToOpenApi"
  displayName="Migrate Swashbuckle to built-in OpenAPI"
  nugetPackage="OpenRewrite.Recipes.CSharp.Migration.Dotnet"
/>
