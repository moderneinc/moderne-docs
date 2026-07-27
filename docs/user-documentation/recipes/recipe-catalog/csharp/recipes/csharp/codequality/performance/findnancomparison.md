---
title: "Do not use NaN in comparisons"
sidebar_label: "Do not use NaN in comparisons"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Do not use NaN in comparisons"}
  description={"Comparing with `NaN` using `==` always returns false. Use `double.IsNaN(x)` instead."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindNaNComparison"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindNaNComparison"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindNaNComparison"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findnancomparison.md"}
  moderneOnly
>

<RecipeHeader.Title>Do not use NaN in comparisons</RecipeHeader.Title>

<RecipeHeader.Description>Comparing with `NaN` using `==` always returns false. Use `double.IsNaN(x)` instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindNaNComparison","displayName":"Do not use NaN in comparisons","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

