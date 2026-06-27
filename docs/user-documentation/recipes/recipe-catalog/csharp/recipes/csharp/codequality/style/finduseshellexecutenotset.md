---
title: "Find ProcessStartInfo without UseShellExecute"
sidebar_label: "Find ProcessStartInfo without UseShellExecute"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find ProcessStartInfo without UseShellExecute"}
  description={"Detect `new ProcessStartInfo()` without explicitly setting `UseShellExecute`. The default changed between .NET Framework (true) and .NET Core (false)."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseShellExecuteNotSet"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseShellExecuteNotSet"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseShellExecuteNotSet"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduseshellexecutenotset.md"}
  moderneOnly
>

<RecipeHeader.Title>Find ProcessStartInfo without UseShellExecute</RecipeHeader.Title>

<RecipeHeader.Description>Detect `new ProcessStartInfo()` without explicitly setting `UseShellExecute`. The default changed between .NET Framework (true) and .NET Core (false).</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseShellExecuteNotSet","displayName":"Find ProcessStartInfo without UseShellExecute","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

