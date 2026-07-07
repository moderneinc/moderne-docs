---
title: "Find unused Stream.Read return value"
sidebar_label: "Find unused Stream.Read return value"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find unused Stream.Read return value"}
  description={"Detect calls to `Stream.Read` or `Stream.ReadAsync` where the return value is discarded. The return value indicates how many bytes were actually read."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindStreamReadResultNotUsed"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindStreamReadResultNotUsed"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindStreamReadResultNotUsed"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findstreamreadresultnotused.md"}
  moderneOnly
>

<RecipeHeader.Title>Find unused Stream.Read return value</RecipeHeader.Title>

<RecipeHeader.Description>Detect calls to `Stream.Read` or `Stream.ReadAsync` where the return value is discarded. The return value indicates how many bytes were actually read.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindStreamReadResultNotUsed","displayName":"Find unused Stream.Read return value","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

