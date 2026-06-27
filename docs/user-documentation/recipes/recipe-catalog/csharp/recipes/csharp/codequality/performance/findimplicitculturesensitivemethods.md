---
title: "Find implicit culture-sensitive string methods"
sidebar_label: "Find implicit culture-sensitive string methods"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find implicit culture-sensitive string methods"}
  description={"Detect calls to `ToLower()` and `ToUpper()` without culture parameters. These methods use the current thread culture, which may cause unexpected behavior."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindImplicitCultureSensitiveMethods"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindImplicitCultureSensitiveMethods"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindImplicitCultureSensitiveMethods"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findimplicitculturesensitivemethods.md"}
  moderneOnly
>

<RecipeHeader.Title>Find implicit culture-sensitive string methods</RecipeHeader.Title>

<RecipeHeader.Description>Detect calls to `ToLower()` and `ToUpper()` without culture parameters. These methods use the current thread culture, which may cause unexpected behavior.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindImplicitCultureSensitiveMethods","displayName":"Find implicit culture-sensitive string methods","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

