---
title: "Find `WebHostBuilder`/`WebHost.CreateDefaultBuilder` usage (replaced in ASP.NET Core 3.0)"
sidebar_label: "Find `WebHostBuilder`/`WebHost.CreateDefaultBuilder` usage (replaced in ASP.NET Core 3.0)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `WebHostBuilder`/`WebHost.CreateDefaultBuilder` usage (replaced in ASP.NET Core 3.0)"}
  description={"Finds usages of `WebHost.CreateDefaultBuilder()` and `new WebHostBuilder()` which should be migrated to `Host.CreateDefaultBuilder()` with `ConfigureWebHostDefaults()` in ASP.NET Core 3.0."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net3_0.FindWebHostBuilder"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["net3.0","search","dotnet","aspnetcore"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net3_0.FindWebHostBuilder"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net3_0.FindWebHostBuilder"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net3_0/findwebhostbuilder.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `WebHostBuilder`/`WebHost.CreateDefaultBuilder` usage (replaced in ASP.NET Core 3.0)</RecipeHeader.Title>

<RecipeHeader.Description>Finds usages of `WebHost.CreateDefaultBuilder()` and `new WebHostBuilder()` which should be migrated to `Host.CreateDefaultBuilder()` with `ConfigureWebHostDefaults()` in ASP.NET Core 3.0.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net3_0.FindWebHostBuilder","displayName":"Find `WebHostBuilder`/`WebHost.CreateDefaultBuilder` usage (replaced in ASP.NET Core 3.0)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

