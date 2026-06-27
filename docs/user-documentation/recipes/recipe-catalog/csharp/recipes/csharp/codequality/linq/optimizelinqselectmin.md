---
title: "Optimize LINQ Select().Min()"
sidebar_label: "Optimize LINQ Select().Min()"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Optimize LINQ Select().Min()"}
  description={"Replace `items.Select(selector).Min()` with `items.Min(selector)`. Passing the selector directly to `Min` avoids an intermediate iterator."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqSelectMin"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","linq","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqSelectMin"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqSelectMin"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqselectmin.md"}
  moderneOnly
>

<RecipeHeader.Title>Optimize LINQ Select().Min()</RecipeHeader.Title>

<RecipeHeader.Description>Replace `items.Select(selector).Min()` with `items.Min(selector)`. Passing the selector directly to `Min` avoids an intermediate iterator.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqSelectMin","displayName":"Optimize LINQ Select().Min()","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

