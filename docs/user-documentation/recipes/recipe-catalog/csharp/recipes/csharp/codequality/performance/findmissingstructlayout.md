---
title: "Find structs without StructLayout attribute"
sidebar_label: "Find structs without StructLayout attribute"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find structs without StructLayout attribute"}
  description={"Detect struct declarations without `[StructLayout]` attribute. Adding `[StructLayout(LayoutKind.Auto)]` allows the CLR to optimize field layout for better memory usage."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingStructLayout"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingStructLayout"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingStructLayout"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findmissingstructlayout.md"}
  moderneOnly
>

<RecipeHeader.Title>Find structs without StructLayout attribute</RecipeHeader.Title>

<RecipeHeader.Description>Detect struct declarations without `[StructLayout]` attribute. Adding `[StructLayout(LayoutKind.Auto)]` allows the CLR to optimize field layout for better memory usage.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingStructLayout","displayName":"Find structs without StructLayout attribute","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

