---
title: "Find obsolete `IActionContextAccessor`/`ActionContextAccessor` (ASPDEPR006)"
sidebar_label: "Find obsolete `IActionContextAccessor`/`ActionContextAccessor` (ASPDEPR006)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find obsolete `IActionContextAccessor`/`ActionContextAccessor` (ASPDEPR006)"}
  description={"Finds usages of `IActionContextAccessor` and `ActionContextAccessor` which are obsolete in .NET 10. Use `IHttpContextAccessor` and `HttpContext.GetEndpoint()` instead."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindActionContextAccessorObsolete"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["net10","search","dotnet","aspnetcore"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindActionContextAccessorObsolete"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindActionContextAccessorObsolete"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net10/findactioncontextaccessorobsolete.md"}
  moderneOnly
>

<RecipeHeader.Title>Find obsolete `IActionContextAccessor`/`ActionContextAccessor` (ASPDEPR006)</RecipeHeader.Title>

<RecipeHeader.Description>Finds usages of `IActionContextAccessor` and `ActionContextAccessor` which are obsolete in .NET 10. Use `IHttpContextAccessor` and `HttpContext.GetEndpoint()` instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindActionContextAccessorObsolete","displayName":"Find obsolete `IActionContextAccessor`/`ActionContextAccessor` (ASPDEPR006)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

