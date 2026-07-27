---
title: "Find blocking calls in async methods"
sidebar_label: "Find blocking calls in async methods"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find blocking calls in async methods"}
  description={"Detect `.Wait()`, `.Result`, and `.GetAwaiter().GetResult()` calls in async methods. Blocking calls in async methods can cause deadlocks."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindBlockingCallsInAsync"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindBlockingCallsInAsync"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindBlockingCallsInAsync"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findblockingcallsinasync.md"}
  moderneOnly
>

<RecipeHeader.Title>Find blocking calls in async methods</RecipeHeader.Title>

<RecipeHeader.Description>Detect `.Wait()`, `.Result`, and `.GetAwaiter().GetResult()` calls in async methods. Blocking calls in async methods can cause deadlocks.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindBlockingCallsInAsync","displayName":"Find blocking calls in async methods","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

