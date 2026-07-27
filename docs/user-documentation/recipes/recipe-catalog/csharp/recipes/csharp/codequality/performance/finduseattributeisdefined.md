---
title: "Find GetCustomAttributes that could use Attribute.IsDefined"
sidebar_label: "Find GetCustomAttributes that could use Attribute.IsDefined"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find GetCustomAttributes that could use Attribute.IsDefined"}
  description={"Detect `GetCustomAttributes().Any()` or similar patterns where `Attribute.IsDefined` would be more efficient."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindUseAttributeIsDefined"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindUseAttributeIsDefined"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindUseAttributeIsDefined"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/finduseattributeisdefined.md"}
  moderneOnly
>

<RecipeHeader.Title>Find GetCustomAttributes that could use Attribute.IsDefined</RecipeHeader.Title>

<RecipeHeader.Description>Detect `GetCustomAttributes().Any()` or similar patterns where `Attribute.IsDefined` would be more efficient.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindUseAttributeIsDefined","displayName":"Find GetCustomAttributes that could use Attribute.IsDefined","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

