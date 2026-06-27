---
title: "Optimize LINQ Where().LastOrDefault()"
sidebar_label: "Optimize LINQ Where().LastOrDefault()"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Optimize LINQ Where().LastOrDefault()"}
  description={"Replace `.Where(predicate).LastOrDefault()` with `.LastOrDefault(predicate)`."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereLastOrDefault"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","linq","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereLastOrDefault"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereLastOrDefault"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/optimizelinqwherelastordefault.md"}
  moderneOnly
>

<RecipeHeader.Title>Optimize LINQ Where().LastOrDefault()</RecipeHeader.Title>

<RecipeHeader.Description>Replace `.Where(predicate).LastOrDefault()` with `.LastOrDefault(predicate)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.OptimizeLinqWhereLastOrDefault","displayName":"Optimize LINQ Where().LastOrDefault()","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

