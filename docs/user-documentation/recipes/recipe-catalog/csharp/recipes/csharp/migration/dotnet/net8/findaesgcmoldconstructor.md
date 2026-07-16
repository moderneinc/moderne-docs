---
title: "Find `AesGcm` constructor without tag size (SYSLIB0053)"
sidebar_label: "Find `AesGcm` constructor without tag size (SYSLIB0053)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `AesGcm` constructor without tag size (SYSLIB0053)"}
  description={"Finds `new AesGcm(key)` constructor calls without an explicit tag size parameter. In .NET 8, the single-argument constructor is obsolete (SYSLIB0053). Use `new AesGcm(key, tagSizeInBytes)` instead."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.FindAesGcmOldConstructor"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","net8","cryptography"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.FindAesGcmOldConstructor"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.FindAesGcmOldConstructor"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/findaesgcmoldconstructor.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `AesGcm` constructor without tag size (SYSLIB0053)</RecipeHeader.Title>

<RecipeHeader.Description>Finds `new AesGcm(key)` constructor calls without an explicit tag size parameter. In .NET 8, the single-argument constructor is obsolete (SYSLIB0053). Use `new AesGcm(key, tagSizeInBytes)` instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.FindAesGcmOldConstructor","displayName":"Find `AesGcm` constructor without tag size (SYSLIB0053)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

