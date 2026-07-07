---
title: "Find missing string equality comparer"
sidebar_label: "Find missing string equality comparer"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find missing string equality comparer"}
  description={"Detect `Dictionary<string, T>` and `HashSet<string>` created without an explicit `StringComparer`. Without a comparer, the default ordinal comparison is used."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindMissingStringEqualityComparer"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindMissingStringEqualityComparer"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindMissingStringEqualityComparer"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findmissingstringequalitycomparer.md"}
  moderneOnly
>

<RecipeHeader.Title>Find missing string equality comparer</RecipeHeader.Title>

<RecipeHeader.Description>Detect `Dictionary<string, T>` and `HashSet<string>` created without an explicit `StringComparer`. Without a comparer, the default ordinal comparison is used.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindMissingStringEqualityComparer","displayName":"Find missing string equality comparer","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

