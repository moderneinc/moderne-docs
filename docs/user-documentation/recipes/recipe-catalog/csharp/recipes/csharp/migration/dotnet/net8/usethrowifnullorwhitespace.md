---
title: "Use ArgumentException.ThrowIfNullOrWhiteSpace()"
sidebar_label: "Use ArgumentException.ThrowIfNullOrWhiteSpace()"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use ArgumentException.ThrowIfNullOrWhiteSpace()"}
  description={"Replace `if (string.IsNullOrWhiteSpace(s)) throw new ArgumentException(\"...\", nameof(s))` guard clauses with `ArgumentException.ThrowIfNullOrWhiteSpace(s)`. Available since .NET 8."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseThrowIfNullOrWhiteSpace"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["modernization","csharp","dotnet"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseThrowIfNullOrWhiteSpace"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseThrowIfNullOrWhiteSpace"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/usethrowifnullorwhitespace.md"}
  moderneOnly
>

<RecipeHeader.Title>Use ArgumentException.ThrowIfNullOrWhiteSpace()</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if (string.IsNullOrWhiteSpace(s)) throw new ArgumentException("...", nameof(s))` guard clauses with `ArgumentException.ThrowIfNullOrWhiteSpace(s)`. Available since .NET 8.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseThrowIfNullOrWhiteSpace","displayName":"Use ArgumentException.ThrowIfNullOrWhiteSpace()","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

