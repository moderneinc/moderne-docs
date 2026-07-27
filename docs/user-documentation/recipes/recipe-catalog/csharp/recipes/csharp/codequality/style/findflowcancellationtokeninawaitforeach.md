---
title: "Find await foreach without CancellationToken"
sidebar_label: "Find await foreach without CancellationToken"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find await foreach without CancellationToken"}
  description={"Detect `await foreach` loops that don't pass a `CancellationToken` via `WithCancellation()` when one is available in the enclosing method."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindFlowCancellationTokenInAwaitForEach"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindFlowCancellationTokenInAwaitForEach"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindFlowCancellationTokenInAwaitForEach"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findflowcancellationtokeninawaitforeach.md"}
  moderneOnly
>

<RecipeHeader.Title>Find await foreach without CancellationToken</RecipeHeader.Title>

<RecipeHeader.Description>Detect `await foreach` loops that don't pass a `CancellationToken` via `WithCancellation()` when one is available in the enclosing method.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindFlowCancellationTokenInAwaitForEach","displayName":"Find await foreach without CancellationToken","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

