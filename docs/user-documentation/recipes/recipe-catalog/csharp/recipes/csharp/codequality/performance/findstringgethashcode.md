---
title: "Find string.GetHashCode() without StringComparer"
sidebar_label: "Find string.GetHashCode() without StringComparer"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find string.GetHashCode() without StringComparer"}
  description={"Detect calls to `string.GetHashCode()` without a `StringComparer`. The default `GetHashCode()` may produce different results across platforms."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindStringGetHashCode"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindStringGetHashCode"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindStringGetHashCode"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findstringgethashcode.md"}
  moderneOnly
>

<RecipeHeader.Title>Find string.GetHashCode() without StringComparer</RecipeHeader.Title>

<RecipeHeader.Description>Detect calls to `string.GetHashCode()` without a `StringComparer`. The default `GetHashCode()` may produce different results across platforms.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindStringGetHashCode","displayName":"Find string.GetHashCode() without StringComparer","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

