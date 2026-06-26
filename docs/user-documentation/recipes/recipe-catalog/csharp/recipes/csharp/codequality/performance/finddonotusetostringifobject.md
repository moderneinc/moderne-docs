---
title: "Do not use ToString on GetType result"
sidebar_label: "Do not use ToString on GetType result"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Do not use ToString on GetType result"}
  description={"Using `.GetType().ToString()` returns the full type name. Consider using `.GetType().Name` or `.GetType().FullName` instead for clarity."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindDoNotUseToStringIfObject"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Do not use ToString on GetType result"}
  description={"Using `.GetType().ToString()` returns the full type name. Consider using `.GetType().Name` or `.GetType().FullName` instead for clarity."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindDoNotUseToStringIfObject"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindDoNotUseToStringIfObject"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/finddonotusetostringifobject.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindDoNotUseToStringIfObject","displayName":"Do not use ToString on GetType result","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

