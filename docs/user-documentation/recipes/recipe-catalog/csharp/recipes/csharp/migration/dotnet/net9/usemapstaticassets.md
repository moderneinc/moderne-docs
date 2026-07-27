---
title: "Use MapStaticAssets()"
sidebar_label: "Use MapStaticAssets()"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use MapStaticAssets()"}
  description={"Replace `UseStaticFiles()` with `MapStaticAssets()` for ASP.NET Core 9. Only applies when the receiver supports `IEndpointRouteBuilder` (WebApplication / minimal hosting). Skips Startup.cs patterns using `IApplicationBuilder` where `MapStaticAssets` is not available."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseMapStaticAssets"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","aspnetcore","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseMapStaticAssets"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseMapStaticAssets"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/usemapstaticassets.md"}
  moderneOnly
>

<RecipeHeader.Title>Use MapStaticAssets()</RecipeHeader.Title>

<RecipeHeader.Description>Replace `UseStaticFiles()` with `MapStaticAssets()` for ASP.NET Core 9. Only applies when the receiver supports `IEndpointRouteBuilder` (WebApplication / minimal hosting). Skips Startup.cs patterns using `IApplicationBuilder` where `MapStaticAssets` is not available.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseMapStaticAssets","displayName":"Use MapStaticAssets()","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

