---
title: "Use ArgumentOutOfRangeException.ThrowIfGreaterThan()"
sidebar_label: "Use ArgumentOutOfRangeException.ThrowIfGreaterThan()"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use ArgumentOutOfRangeException.ThrowIfGreaterThan()"}
  description={"Replace `if (value > other) throw new ArgumentOutOfRangeException(nameof(value))` guard clauses with `ArgumentOutOfRangeException.ThrowIfGreaterThan(value, other)`. Also handles reversed `other < value` and `>=`/`ThrowIfGreaterThanOrEqual`. Available since .NET 8."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseThrowIfGreaterThan"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["modernization","csharp","dotnet"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseThrowIfGreaterThan"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseThrowIfGreaterThan"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/usethrowifgreaterthan.md"}
  moderneOnly
>

<RecipeHeader.Title>Use ArgumentOutOfRangeException.ThrowIfGreaterThan()</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if (value > other) throw new ArgumentOutOfRangeException(nameof(value))` guard clauses with `ArgumentOutOfRangeException.ThrowIfGreaterThan(value, other)`. Also handles reversed `other < value` and `>=`/`ThrowIfGreaterThanOrEqual`. Available since .NET 8.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.UseThrowIfGreaterThan","displayName":"Use ArgumentOutOfRangeException.ThrowIfGreaterThan()","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

