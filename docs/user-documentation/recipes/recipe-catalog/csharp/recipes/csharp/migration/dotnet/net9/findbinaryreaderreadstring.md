---
title: "Find `BinaryReader.ReadString` behavior change"
sidebar_label: "Find `BinaryReader.ReadString` behavior change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `BinaryReader.ReadString` behavior change"}
  description={"Finds calls to `BinaryReader.ReadString()` which now returns the Unicode replacement character (\\uFFFD) for malformed UTF-8 byte sequences in .NET 9, instead of the previous behavior. Verify your code handles the replacement character correctly."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindBinaryReaderReadString"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","net9"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindBinaryReaderReadString"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindBinaryReaderReadString"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findbinaryreaderreadstring.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `BinaryReader.ReadString` behavior change</RecipeHeader.Title>

<RecipeHeader.Description>Finds calls to `BinaryReader.ReadString()` which now returns the Unicode replacement character (\uFFFD) for malformed UTF-8 byte sequences in .NET 9, instead of the previous behavior. Verify your code handles the replacement character correctly.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindBinaryReaderReadString","displayName":"Find `BinaryReader.ReadString` behavior change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

