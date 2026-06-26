---
title: "Optimize LINQ Select().Max()"
sidebar_label: "Optimize LINQ Select().Max()"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Optimize LINQ Select().Max()"}
  description={"Replace `items.Select(selector).Max()` with `items.Max(selector)`. Passing the selector directly to `Max` avoids an intermediate iterator."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqSelectMax"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Optimize LINQ Select().Max()"}
  description={"Replace `items.Select(selector).Max()` with `items.Max(selector)`. Passing the selector directly to `Max` avoids an intermediate iterator."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","linq","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqSelectMax"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqSelectMax"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqselectmax.md"}
  moderneOnly
/>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqSelectMax","displayName":"Optimize LINQ Select().Max()","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

