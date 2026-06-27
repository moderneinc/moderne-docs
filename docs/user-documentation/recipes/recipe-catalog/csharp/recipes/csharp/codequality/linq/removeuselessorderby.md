---
title: "Remove useless OrderBy call"
sidebar_label: "Remove useless OrderBy call"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove useless OrderBy call"}
  description={"Replace `.OrderBy(a).OrderBy(b)` with `.OrderBy(b)`. A second `OrderBy` completely replaces the first sort, making the first call useless."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.RemoveUselessOrderBy"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","linq","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.RemoveUselessOrderBy"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Linq.RemoveUselessOrderBy"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/linq/removeuselessorderby.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove useless OrderBy call</RecipeHeader.Title>

<RecipeHeader.Description>Replace `.OrderBy(a).OrderBy(b)` with `.OrderBy(b)`. A second `OrderBy` completely replaces the first sort, making the first call useless.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Linq.RemoveUselessOrderBy","displayName":"Remove useless OrderBy call","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

