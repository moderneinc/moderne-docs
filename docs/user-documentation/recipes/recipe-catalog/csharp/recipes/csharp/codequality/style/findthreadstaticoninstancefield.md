---
title: "Do not use ThreadStatic on instance fields"
sidebar_label: "Do not use ThreadStatic on instance fields"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Do not use ThreadStatic on instance fields"}
  description={"`[ThreadStatic]` only works on static fields. Using it on instance fields has no effect."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindThreadStaticOnInstanceField"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindThreadStaticOnInstanceField"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindThreadStaticOnInstanceField"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findthreadstaticoninstancefield.md"}
  moderneOnly
>

<RecipeHeader.Title>Do not use ThreadStatic on instance fields</RecipeHeader.Title>

<RecipeHeader.Description>`[ThreadStatic]` only works on static fields. Using it on instance fields has no effect.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindThreadStaticOnInstanceField","displayName":"Do not use ThreadStatic on instance fields","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

