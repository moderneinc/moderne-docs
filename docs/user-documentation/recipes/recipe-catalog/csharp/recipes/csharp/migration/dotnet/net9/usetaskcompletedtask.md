---
title: "Use Task.CompletedTask"
sidebar_label: "Use Task.CompletedTask"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use Task.CompletedTask"}
  description={"Replace `Task.FromResult(0)`, `Task.FromResult(true)`, and `Task.FromResult(false)` with `Task.CompletedTask` when the return type is `Task` (not `Task<T>`)."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseTaskCompletedTask"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["modernization","csharp","dotnet"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseTaskCompletedTask"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseTaskCompletedTask"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/usetaskcompletedtask.md"}
  moderneOnly
>

<RecipeHeader.Title>Use Task.CompletedTask</RecipeHeader.Title>

<RecipeHeader.Description>Replace `Task.FromResult(0)`, `Task.FromResult(true)`, and `Task.FromResult(false)` with `Task.CompletedTask` when the return type is `Task` (not `Task<T>`).</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.UseTaskCompletedTask","displayName":"Use Task.CompletedTask","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

