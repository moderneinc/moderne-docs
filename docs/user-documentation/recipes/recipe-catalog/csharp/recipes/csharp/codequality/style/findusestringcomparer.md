---
title: "Find Dictionary/HashSet without StringComparer"
sidebar_label: "Find Dictionary/HashSet without StringComparer"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Dictionary/HashSet without StringComparer"}
  description={"Detect `Dictionary<string, T>` or `HashSet<string>` created without an explicit `StringComparer`. Use `StringComparer.Ordinal` or `StringComparer.OrdinalIgnoreCase`."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseStringComparer"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseStringComparer"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseStringComparer"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findusestringcomparer.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Dictionary/HashSet without StringComparer</RecipeHeader.Title>

<RecipeHeader.Description>Detect `Dictionary<string, T>` or `HashSet<string>` created without an explicit `StringComparer`. Use `StringComparer.Ordinal` or `StringComparer.OrdinalIgnoreCase`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseStringComparer","displayName":"Find Dictionary/HashSet without StringComparer","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

