---
title: "Optimize LINQ Where().Last()"
sidebar_label: "Optimize LINQ Where().Last()"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Optimize LINQ Where().Last()"}
  description={"Replace `items.Where(predicate).Last()` with `items.Last(predicate)`."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereLast"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","linq","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereLast"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereLast"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwherelast.md"}
  moderneOnly
>

<RecipeHeader.Title>Optimize LINQ Where().Last()</RecipeHeader.Title>

<RecipeHeader.Description>Replace `items.Where(predicate).Last()` with `items.Last(predicate)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereLast","displayName":"Optimize LINQ Where().Last()","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

