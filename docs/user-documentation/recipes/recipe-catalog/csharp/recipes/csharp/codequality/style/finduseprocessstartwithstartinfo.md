---
title: "Find Process.Start with string argument"
sidebar_label: "Find Process.Start with string argument"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Process.Start with string argument"}
  description={"Detect `Process.Start(\"filename\")` which should use the `ProcessStartInfo` overload for explicit control over `UseShellExecute` and other settings."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseProcessStartWithStartInfo"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseProcessStartWithStartInfo"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseProcessStartWithStartInfo"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduseprocessstartwithstartinfo.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Process.Start with string argument</RecipeHeader.Title>

<RecipeHeader.Description>Detect `Process.Start("filename")` which should use the `ProcessStartInfo` overload for explicit control over `UseShellExecute` and other settings.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseProcessStartWithStartInfo","displayName":"Find Process.Start with string argument","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

