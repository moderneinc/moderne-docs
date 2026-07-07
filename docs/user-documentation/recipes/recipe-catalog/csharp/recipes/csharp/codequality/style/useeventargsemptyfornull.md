---
title: "Use EventArgs.Empty instead of null"
sidebar_label: "Use EventArgs.Empty instead of null"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use EventArgs.Empty instead of null"}
  description={"Replace `null` with `EventArgs.Empty` when raising events. Passing `null` for EventArgs can cause NullReferenceException in event handlers."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseEventArgsEmptyForNull"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseEventArgsEmptyForNull"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseEventArgsEmptyForNull"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/useeventargsemptyfornull.md"}
  moderneOnly
>

<RecipeHeader.Title>Use EventArgs.Empty instead of null</RecipeHeader.Title>

<RecipeHeader.Description>Replace `null` with `EventArgs.Empty` when raising events. Passing `null` for EventArgs can cause NullReferenceException in event handlers.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.UseEventArgsEmptyForNull","displayName":"Use EventArgs.Empty instead of null","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

