---
title: "Use ArgumentOutOfRangeException.ThrowIfZero()"
sidebar_label: "Use ArgumentOutOfRangeException.ThrowIfZero()"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use ArgumentOutOfRangeException.ThrowIfZero()"}
  description={"Replace `if (value == 0) throw new ArgumentOutOfRangeException(nameof(value))` guard clauses with `ArgumentOutOfRangeException.ThrowIfZero(value)`. Also handles reversed `0 == value`. Available since .NET 8."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseThrowIfZero"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["modernization","csharp","dotnet"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseThrowIfZero"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseThrowIfZero"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/usethrowifzero.md"}
  moderneOnly
>

<RecipeHeader.Title>Use ArgumentOutOfRangeException.ThrowIfZero()</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if (value == 0) throw new ArgumentOutOfRangeException(nameof(value))` guard clauses with `ArgumentOutOfRangeException.ThrowIfZero(value)`. Also handles reversed `0 == value`. Available since .NET 8.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseThrowIfZero","displayName":"Use ArgumentOutOfRangeException.ThrowIfZero()","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

