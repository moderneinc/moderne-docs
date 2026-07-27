---
title: "Find `Thread.Abort` usage (SYSLIB0006)"
sidebar_label: "Find `Thread.Abort` usage (SYSLIB0006)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `Thread.Abort` usage (SYSLIB0006)"}
  description={"Finds calls to `Thread.Abort()` which throws `PlatformNotSupportedException` in .NET 6+ (SYSLIB0006). Use `CancellationToken` for cooperative cancellation instead."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.FindThreadAbort"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","net6","threading"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.FindThreadAbort"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.FindThreadAbort"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net6/findthreadabort.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `Thread.Abort` usage (SYSLIB0006)</RecipeHeader.Title>

<RecipeHeader.Description>Finds calls to `Thread.Abort()` which throws `PlatformNotSupportedException` in .NET 6+ (SYSLIB0006). Use `CancellationToken` for cooperative cancellation instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net6.FindThreadAbort","displayName":"Find `Thread.Abort` usage (SYSLIB0006)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

