---
title: "Find LINQ Count() on materialized collection"
sidebar_label: "Find LINQ Count() on materialized collection"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find LINQ Count() on materialized collection"}
  description={"Detect LINQ `Count()` or `Any()` on types that have a `Count` or `Length` property. Use the property directly for O(1) performance."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindOptimizeEnumerableCountVsAny"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindOptimizeEnumerableCountVsAny"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindOptimizeEnumerableCountVsAny"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findoptimizeenumerablecountvsany.md"}
  moderneOnly
>

<RecipeHeader.Title>Find LINQ Count() on materialized collection</RecipeHeader.Title>

<RecipeHeader.Description>Detect LINQ `Count()` or `Any()` on types that have a `Count` or `Length` property. Use the property directly for O(1) performance.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindOptimizeEnumerableCountVsAny","displayName":"Find LINQ Count() on materialized collection","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

