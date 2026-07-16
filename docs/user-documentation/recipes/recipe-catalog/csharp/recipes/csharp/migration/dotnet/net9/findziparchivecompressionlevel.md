---
title: "Find `ZipArchive.CreateEntry` with `CompressionLevel` (bit flag change)"
sidebar_label: "Find `ZipArchive.CreateEntry` with `CompressionLevel` (bit flag change)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `ZipArchive.CreateEntry` with `CompressionLevel` (bit flag change)"}
  description={"Finds `ZipArchive.CreateEntry()` and `ZipFileExtensions.CreateEntryFromFile()` calls with a `CompressionLevel` parameter. In .NET 9, the `CompressionLevel` value now sets general-purpose bit flags in the ZIP central directory header, which may affect interoperability."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindZipArchiveCompressionLevel"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","compression","net9"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindZipArchiveCompressionLevel"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindZipArchiveCompressionLevel"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findziparchivecompressionlevel.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `ZipArchive.CreateEntry` with `CompressionLevel` (bit flag change)</RecipeHeader.Title>

<RecipeHeader.Description>Finds `ZipArchive.CreateEntry()` and `ZipFileExtensions.CreateEntryFromFile()` calls with a `CompressionLevel` parameter. In .NET 9, the `CompressionLevel` value now sets general-purpose bit flags in the ZIP central directory header, which may affect interoperability.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindZipArchiveCompressionLevel","displayName":"Find `ZipArchive.CreateEntry` with `CompressionLevel` (bit flag change)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

