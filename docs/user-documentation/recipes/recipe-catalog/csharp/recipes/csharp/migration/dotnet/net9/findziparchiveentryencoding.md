---
title: "Find `ZipArchiveEntry` name/comment UTF-8 encoding change"
sidebar_label: "Find `ZipArchiveEntry` name/comment UTF-8 encoding change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `ZipArchiveEntry` name/comment UTF-8 encoding change"}
  description={"Finds access to `ZipArchiveEntry.Name`, `FullName`, or `Comment` properties. In .NET 9, these now respect the UTF-8 flag in ZIP entries, which may change decoded values."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindZipArchiveEntryEncoding"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","compression","net9"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindZipArchiveEntryEncoding"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindZipArchiveEntryEncoding"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findziparchiveentryencoding.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `ZipArchiveEntry` name/comment UTF-8 encoding change</RecipeHeader.Title>

<RecipeHeader.Description>Finds access to `ZipArchiveEntry.Name`, `FullName`, or `Comment` properties. In .NET 9, these now respect the UTF-8 flag in ZIP entries, which may change decoded values.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindZipArchiveEntryEncoding","displayName":"Find `ZipArchiveEntry` name/comment UTF-8 encoding change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

