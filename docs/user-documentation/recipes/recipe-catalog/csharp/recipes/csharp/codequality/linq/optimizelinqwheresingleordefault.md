---
title: "Optimize LINQ Where().SingleOrDefault()"
sidebar_label: "Optimize LINQ Where().SingleOrDefault()"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Optimize LINQ Where().SingleOrDefault()"}
  description={"Replace `items.Where(predicate).SingleOrDefault()` with `items.SingleOrDefault(predicate)`."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereSingleOrDefault"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","linq","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereSingleOrDefault"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereSingleOrDefault"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwheresingleordefault.md"}
  moderneOnly
>

<RecipeHeader.Title>Optimize LINQ Where().SingleOrDefault()</RecipeHeader.Title>

<RecipeHeader.Description>Replace `items.Where(predicate).SingleOrDefault()` with `items.SingleOrDefault(predicate)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereSingleOrDefault","displayName":"Optimize LINQ Where().SingleOrDefault()","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

