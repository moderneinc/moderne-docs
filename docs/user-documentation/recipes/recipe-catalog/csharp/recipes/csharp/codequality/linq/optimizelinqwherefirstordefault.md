---
title: "Optimize LINQ Where().FirstOrDefault()"
sidebar_label: "Optimize LINQ Where().FirstOrDefault()"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Optimize LINQ Where().FirstOrDefault()"}
  description={"Replace `items.Where(predicate).FirstOrDefault()` with `items.FirstOrDefault(predicate)`."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereFirstOrDefault"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","linq","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereFirstOrDefault"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereFirstOrDefault"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwherefirstordefault.md"}
  moderneOnly
>

<RecipeHeader.Title>Optimize LINQ Where().FirstOrDefault()</RecipeHeader.Title>

<RecipeHeader.Description>Replace `items.Where(predicate).FirstOrDefault()` with `items.FirstOrDefault(predicate)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereFirstOrDefault","displayName":"Optimize LINQ Where().FirstOrDefault()","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

