---
title: "Find `JsonSerializer.Deserialize` nullable `JsonDocument` change"
sidebar_label: "Find `JsonSerializer.Deserialize` nullable `JsonDocument` change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `JsonSerializer.Deserialize` nullable `JsonDocument` change"}
  description={"Finds `JsonSerializer.Deserialize()` calls. In .NET 9, nullable `JsonDocument` properties now deserialize to a `JsonDocument` with `RootElement.ValueKind == JsonValueKind.Null` instead of being `null`."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindJsonDocumentNullable"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["serialization","search","dotnet","net9"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindJsonDocumentNullable"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindJsonDocumentNullable"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findjsondocumentnullable.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `JsonSerializer.Deserialize` nullable `JsonDocument` change</RecipeHeader.Title>

<RecipeHeader.Description>Finds `JsonSerializer.Deserialize()` calls. In .NET 9, nullable `JsonDocument` properties now deserialize to a `JsonDocument` with `RootElement.ValueKind == JsonValueKind.Null` instead of being `null`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindJsonDocumentNullable","displayName":"Find `JsonSerializer.Deserialize` nullable `JsonDocument` change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

