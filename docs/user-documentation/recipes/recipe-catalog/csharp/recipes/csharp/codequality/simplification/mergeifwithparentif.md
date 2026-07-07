---
title: "Merge if with parent if"
sidebar_label: "Merge if with parent if"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Merge if with parent if"}
  description={"Merge `if (a) { if (b) { ... } }` into `if (a && b) { ... }` when the outer if body contains only a single nested if without else."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.MergeIfWithParentIf"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.MergeIfWithParentIf"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.MergeIfWithParentIf"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/mergeifwithparentif.md"}
  moderneOnly
>

<RecipeHeader.Title>Merge if with parent if</RecipeHeader.Title>

<RecipeHeader.Description>Merge `if (a) { if (b) { ... } }` into `if (a && b) { ... }` when the outer if body contains only a single nested if without else.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.MergeIfWithParentIf","displayName":"Merge if with parent if","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

