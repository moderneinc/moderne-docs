---
title: "Optimize StringBuilder.Append usage"
sidebar_label: "Optimize StringBuilder.Append usage"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Optimize StringBuilder.Append usage"}
  description={"Optimize StringBuilder method calls: use char overloads for single-character strings, remove redundant ToString() calls, replace string.Format with AppendFormat, and split string concatenation into chained Append calls."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.OptimizeStringBuilderAppend"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.OptimizeStringBuilderAppend"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.OptimizeStringBuilderAppend"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/optimizestringbuilderappend.md"}
  moderneOnly
>

<RecipeHeader.Title>Optimize StringBuilder.Append usage</RecipeHeader.Title>

<RecipeHeader.Description>Optimize StringBuilder method calls: use char overloads for single-character strings, remove redundant ToString() calls, replace string.Format with AppendFormat, and split string concatenation into chained Append calls.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.OptimizeStringBuilderAppend","displayName":"Optimize StringBuilder.Append usage","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

