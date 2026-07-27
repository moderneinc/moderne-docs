---
title: "Use TimeProvider instead of DateTime/DateTimeOffset static properties"
sidebar_label: "Use TimeProvider instead of DateTime/DateTimeOffset static properties"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use TimeProvider instead of DateTime/DateTimeOffset static properties"}
  description={"Replace `DateTime.UtcNow`, `DateTime.Now`, `DateTimeOffset.UtcNow`, and `DateTimeOffset.Now` with `TimeProvider.System.GetUtcNow()`/`GetLocalNow()` equivalents. TimeProvider enables testability and consistent time sources. Available since .NET 8."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseTimeProvider"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["modernization","csharp","dotnet"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseTimeProvider"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseTimeProvider"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/usetimeprovider.md"}
  moderneOnly
>

<RecipeHeader.Title>Use TimeProvider instead of DateTime/DateTimeOffset static properties</RecipeHeader.Title>

<RecipeHeader.Description>Replace `DateTime.UtcNow`, `DateTime.Now`, `DateTimeOffset.UtcNow`, and `DateTimeOffset.Now` with `TimeProvider.System.GetUtcNow()`/`GetLocalNow()` equivalents. TimeProvider enables testability and consistent time sources. Available since .NET 8.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseTimeProvider","displayName":"Use TimeProvider instead of DateTime/DateTimeOffset static properties","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

