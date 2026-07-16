---
title: "Use ArgumentOutOfRangeException.ThrowIfNegativeOrZero()"
sidebar_label: "Use ArgumentOutOfRangeException.ThrowIfNegativeOrZero()"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use ArgumentOutOfRangeException.ThrowIfNegativeOrZero()"}
  description={"Replace `if (value <= 0) throw new ArgumentOutOfRangeException(nameof(value))` guard clauses with `ArgumentOutOfRangeException.ThrowIfNegativeOrZero(value)`. Also handles reversed `0 >= value`. Available since .NET 7."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net7.UseThrowIfNegativeOrZero"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["modernization","csharp","dotnet"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net7.UseThrowIfNegativeOrZero"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net7.UseThrowIfNegativeOrZero"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net7/usethrowifnegativeorzero.md"}
  moderneOnly
>

<RecipeHeader.Title>Use ArgumentOutOfRangeException.ThrowIfNegativeOrZero()</RecipeHeader.Title>

<RecipeHeader.Description>Replace `if (value <= 0) throw new ArgumentOutOfRangeException(nameof(value))` guard clauses with `ArgumentOutOfRangeException.ThrowIfNegativeOrZero(value)`. Also handles reversed `0 >= value`. Available since .NET 7.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net7.UseThrowIfNegativeOrZero","displayName":"Use ArgumentOutOfRangeException.ThrowIfNegativeOrZero()","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

