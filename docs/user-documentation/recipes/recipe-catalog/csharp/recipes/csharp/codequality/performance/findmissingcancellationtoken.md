---
title: "Find methods not forwarding CancellationToken"
sidebar_label: "Find methods not forwarding CancellationToken"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find methods not forwarding CancellationToken"}
  description={"Detect calls to async methods that may have CancellationToken overloads but are called without one. Uses name-based heuristics."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingCancellationToken"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingCancellationToken"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingCancellationToken"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findmissingcancellationtoken.md"}
  moderneOnly
>

<RecipeHeader.Title>Find methods not forwarding CancellationToken</RecipeHeader.Title>

<RecipeHeader.Description>Detect calls to async methods that may have CancellationToken overloads but are called without one. Uses name-based heuristics.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingCancellationToken","displayName":"Find methods not forwarding CancellationToken","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

