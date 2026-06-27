---
title: "Find calls that could use TimeProvider"
sidebar_label: "Find calls that could use TimeProvider"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find calls that could use TimeProvider"}
  description={"Detect `DateTime.UtcNow`, `DateTimeOffset.UtcNow`, and `Task.Delay` calls that could use a `TimeProvider` parameter for better testability (.NET 8+)."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindUseTimeProviderOverload"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindUseTimeProviderOverload"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindUseTimeProviderOverload"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findusetimeprovideroverload.md"}
  moderneOnly
>

<RecipeHeader.Title>Find calls that could use TimeProvider</RecipeHeader.Title>

<RecipeHeader.Description>Detect `DateTime.UtcNow`, `DateTimeOffset.UtcNow`, and `Task.Delay` calls that could use a `TimeProvider` parameter for better testability (.NET 8+).</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindUseTimeProviderOverload","displayName":"Find calls that could use TimeProvider","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

