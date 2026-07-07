---
title: "Find Thread.Sleep usage"
sidebar_label: "Find Thread.Sleep usage"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Thread.Sleep usage"}
  description={"Detect `Thread.Sleep()` which blocks the thread. Use `await Task.Delay()` in async contexts instead."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotUseSleep"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotUseSleep"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotUseSleep"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddonotusesleep.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Thread.Sleep usage</RecipeHeader.Title>

<RecipeHeader.Description>Detect `Thread.Sleep()` which blocks the thread. Use `await Task.Delay()` in async contexts instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotUseSleep","displayName":"Find Thread.Sleep usage","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

