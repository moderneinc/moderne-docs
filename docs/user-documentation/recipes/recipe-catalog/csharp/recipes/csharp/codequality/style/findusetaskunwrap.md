---
title: "Find double await pattern"
sidebar_label: "Find double await pattern"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find double await pattern"}
  description={"Detect `await await` pattern which can be replaced with `.Unwrap()` for clarity."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseTaskUnwrap"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseTaskUnwrap"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseTaskUnwrap"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findusetaskunwrap.md"}
  moderneOnly
>

<RecipeHeader.Title>Find double await pattern</RecipeHeader.Title>

<RecipeHeader.Description>Detect `await await` pattern which can be replaced with `.Unwrap()` for clarity.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseTaskUnwrap","displayName":"Find double await pattern","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

