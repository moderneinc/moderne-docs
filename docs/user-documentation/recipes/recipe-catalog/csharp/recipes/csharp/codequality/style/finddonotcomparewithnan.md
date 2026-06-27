---
title: "Find comparison with NaN"
sidebar_label: "Find comparison with NaN"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find comparison with NaN"}
  description={"Detect comparisons with `NaN` using `==` or `!=`. Use `double.IsNaN()` or `float.IsNaN()` instead, as `x == NaN` is always false."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotCompareWithNaN"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotCompareWithNaN"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotCompareWithNaN"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finddonotcomparewithnan.md"}
  moderneOnly
>

<RecipeHeader.Title>Find comparison with NaN</RecipeHeader.Title>

<RecipeHeader.Description>Detect comparisons with `NaN` using `==` or `!=`. Use `double.IsNaN()` or `float.IsNaN()` instead, as `x == NaN` is always false.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindDoNotCompareWithNaN","displayName":"Find comparison with NaN","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

