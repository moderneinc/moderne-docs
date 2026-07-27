---
title: "Find `BufferedStream.WriteByte` implicit flush behavior change"
sidebar_label: "Find `BufferedStream.WriteByte` implicit flush behavior change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `BufferedStream.WriteByte` implicit flush behavior change"}
  description={"Finds calls to `BufferedStream.WriteByte()` which no longer performs an implicit flush when the internal buffer is full in .NET 10. Call `Flush()` explicitly if needed."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindBufferedStreamWriteByte"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["net10","search","dotnet"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindBufferedStreamWriteByte"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindBufferedStreamWriteByte"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net10/findbufferedstreamwritebyte.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `BufferedStream.WriteByte` implicit flush behavior change</RecipeHeader.Title>

<RecipeHeader.Description>Finds calls to `BufferedStream.WriteByte()` which no longer performs an implicit flush when the internal buffer is full in .NET 10. Call `Flush()` explicitly if needed.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindBufferedStreamWriteByte","displayName":"Find `BufferedStream.WriteByte` implicit flush behavior change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

