---
title: "Find simplifiable string.Create calls"
sidebar_label: "Find simplifiable string.Create calls"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find simplifiable string.Create calls"}
  description={"Detect `string.Create(CultureInfo.InvariantCulture, ...)` calls that could be simplified to string interpolation when all parameters are culture-invariant."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindSimplifyStringCreate"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindSimplifyStringCreate"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindSimplifyStringCreate"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findsimplifystringcreate.md"}
  moderneOnly
>

<RecipeHeader.Title>Find simplifiable string.Create calls</RecipeHeader.Title>

<RecipeHeader.Description>Detect `string.Create(CultureInfo.InvariantCulture, ...)` calls that could be simplified to string interpolation when all parameters are culture-invariant.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindSimplifyStringCreate","displayName":"Find simplifiable string.Create calls","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

