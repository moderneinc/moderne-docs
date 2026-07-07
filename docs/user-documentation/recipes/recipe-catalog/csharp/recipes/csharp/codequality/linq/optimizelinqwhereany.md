---
title: "Optimize LINQ Where().Any()"
sidebar_label: "Optimize LINQ Where().Any()"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Optimize LINQ Where().Any()"}
  description={"Replace `items.Where(predicate).Any()` with `items.Any(predicate)`. Passing the predicate directly to `Any` avoids an intermediate iterator."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereAny"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","linq","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereAny"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereAny"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwhereany.md"}
  moderneOnly
>

<RecipeHeader.Title>Optimize LINQ Where().Any()</RecipeHeader.Title>

<RecipeHeader.Description>Replace `items.Where(predicate).Any()` with `items.Any(predicate)`. Passing the predicate directly to `Any` avoids an intermediate iterator.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereAny","displayName":"Optimize LINQ Where().Any()","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

