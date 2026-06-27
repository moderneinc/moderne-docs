---
title: "Find LINQ methods replaceable with direct methods"
sidebar_label: "Find LINQ methods replaceable with direct methods"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find LINQ methods replaceable with direct methods"}
  description={"Detect LINQ methods like `.Count()` that could be replaced with direct collection properties. Direct access avoids enumeration overhead."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindLinqOnDirectMethods"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","linq","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindLinqOnDirectMethods"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindLinqOnDirectMethods"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findlinqondirectmethods.md"}
  moderneOnly
>

<RecipeHeader.Title>Find LINQ methods replaceable with direct methods</RecipeHeader.Title>

<RecipeHeader.Description>Detect LINQ methods like `.Count()` that could be replaced with direct collection properties. Direct access avoids enumeration overhead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindLinqOnDirectMethods","displayName":"Find LINQ methods replaceable with direct methods","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

