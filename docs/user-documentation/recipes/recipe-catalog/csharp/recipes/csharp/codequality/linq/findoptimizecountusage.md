---
title: "Find Count() comparison that could be optimized"
sidebar_label: "Find Count() comparison that could be optimized"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Count() comparison that could be optimized"}
  description={"Detect `Count(pred) == n` and `Count() > n` comparisons which could use `Where().Take(n+1).Count()` or `Skip(n).Any()` for better performance."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.FindOptimizeCountUsage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","linq","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.FindOptimizeCountUsage"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Linq.FindOptimizeCountUsage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/findoptimizecountusage.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Count() comparison that could be optimized</RecipeHeader.Title>

<RecipeHeader.Description>Detect `Count(pred) == n` and `Count() > n` comparisons which could use `Where().Take(n+1).Count()` or `Skip(n).Any()` for better performance.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.FindOptimizeCountUsage","displayName":"Find Count() comparison that could be optimized","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

