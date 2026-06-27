---
title: "Find Dictionary/HashSet with struct key type"
sidebar_label: "Find Dictionary/HashSet with struct key type"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Dictionary/HashSet with struct key type"}
  description={"Detect `Dictionary` or `HashSet` usage with struct types as keys. Structs without overridden `Equals`/`GetHashCode` use slow reflection-based comparison."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindStructWithDefaultEqualsAsKey"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindStructWithDefaultEqualsAsKey"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindStructWithDefaultEqualsAsKey"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findstructwithdefaultequalsaskey.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Dictionary/HashSet with struct key type</RecipeHeader.Title>

<RecipeHeader.Description>Detect `Dictionary` or `HashSet` usage with struct types as keys. Structs without overridden `Equals`/`GetHashCode` use slow reflection-based comparison.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindStructWithDefaultEqualsAsKey","displayName":"Find Dictionary/HashSet with struct key type","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

