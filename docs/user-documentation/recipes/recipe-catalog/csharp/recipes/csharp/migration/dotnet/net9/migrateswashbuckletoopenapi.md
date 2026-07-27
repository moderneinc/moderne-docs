---
title: "Migrate Swashbuckle to built-in OpenAPI"
sidebar_label: "Migrate Swashbuckle to built-in OpenAPI"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate Swashbuckle to built-in OpenAPI"}
  description={"Migrate from Swashbuckle to the built-in OpenAPI support in ASP.NET Core 10+. Replaces `AddSwaggerGen()` with `AddOpenApi()`, `UseSwaggerUI()` with `MapOpenApi()`, removes `UseSwagger()`, removes Swashbuckle packages, and adds `Microsoft.AspNetCore.OpenApi`. Only fires when every project targets net10.0+ (the version that ships Microsoft.OpenApi 2.x with its flattened type namespaces)."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.MigrateSwashbuckleToOpenApi"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","aspnetcore","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.MigrateSwashbuckleToOpenApi"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.MigrateSwashbuckleToOpenApi"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/migrateswashbuckletoopenapi.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate Swashbuckle to built-in OpenAPI</RecipeHeader.Title>

<RecipeHeader.Description>Migrate from Swashbuckle to the built-in OpenAPI support in ASP.NET Core 10+. Replaces `AddSwaggerGen()` with `AddOpenApi()`, `UseSwaggerUI()` with `MapOpenApi()`, removes `UseSwagger()`, removes Swashbuckle packages, and adds `Microsoft.AspNetCore.OpenApi`. Only fires when every project targets net10.0+ (the version that ships Microsoft.OpenApi 2.x with its flattened type namespaces).</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.MigrateSwashbuckleToOpenApi","displayName":"Migrate Swashbuckle to built-in OpenAPI","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

