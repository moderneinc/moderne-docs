---
title: "Use ArgumentOutOfRangeException.ThrowIfLessThan()"
sidebar_label: "Use ArgumentOutOfRangeException.ThrowIfLessThan()"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use ArgumentOutOfRangeException.ThrowIfLessThan()"}
  description={"Replace `if (value < other) throw new ArgumentOutOfRangeException(nameof(value))` guard clauses with `ArgumentOutOfRangeException.ThrowIfLessThan(value, other)`. Also handles reversed `other > value` and `<=`/`ThrowIfLessThanOrEqual`. Available since .NET 8."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseThrowIfLessThan"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["modernization","csharp","dotnet"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseThrowIfLessThan"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseThrowIfLessThan"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/usethrowiflessthan.md"}
  moderneOnly
>

<RecipeHeader.Title>Use ArgumentOutOfRangeException.ThrowIfLessThan()</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if (value < other) throw new ArgumentOutOfRangeException(nameof(value))` guard clauses with `ArgumentOutOfRangeException.ThrowIfLessThan(value, other)`. Also handles reversed `other > value` and `<=`/`ThrowIfLessThanOrEqual`. Available since .NET 8.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseThrowIfLessThan","displayName":"Use ArgumentOutOfRangeException.ThrowIfLessThan()","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

