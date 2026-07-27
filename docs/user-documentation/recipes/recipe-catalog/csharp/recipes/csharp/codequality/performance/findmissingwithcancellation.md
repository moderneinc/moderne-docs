---
title: "Find missing WithCancellation on async enumerables"
sidebar_label: "Find missing WithCancellation on async enumerables"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find missing WithCancellation on async enumerables"}
  description={"Detect async enumerable iteration without `.WithCancellation()`. Async enumerables should forward CancellationToken via WithCancellation."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingWithCancellation"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingWithCancellation"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingWithCancellation"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findmissingwithcancellation.md"}
  moderneOnly
>

<RecipeHeader.Title>Find missing WithCancellation on async enumerables</RecipeHeader.Title>

<RecipeHeader.Description>Detect async enumerable iteration without `.WithCancellation()`. Async enumerables should forward CancellationToken via WithCancellation.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingWithCancellation","displayName":"Find missing WithCancellation on async enumerables","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

