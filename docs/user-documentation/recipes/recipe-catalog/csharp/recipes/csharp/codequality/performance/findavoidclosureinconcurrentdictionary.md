---
title: "Avoid closure when using ConcurrentDictionary"
sidebar_label: "Avoid closure when using ConcurrentDictionary"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Avoid closure when using ConcurrentDictionary"}
  description={"ConcurrentDictionary methods like `GetOrAdd` may evaluate the factory even when the key exists. Use the overload with a factory argument to avoid closure allocation."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindAvoidClosureInConcurrentDictionary"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindAvoidClosureInConcurrentDictionary"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindAvoidClosureInConcurrentDictionary"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findavoidclosureinconcurrentdictionary.md"}
  moderneOnly
>

<RecipeHeader.Title>Avoid closure when using ConcurrentDictionary</RecipeHeader.Title>

<RecipeHeader.Description>ConcurrentDictionary methods like `GetOrAdd` may evaluate the factory even when the key exists. Use the overload with a factory argument to avoid closure allocation.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindAvoidClosureInConcurrentDictionary","displayName":"Avoid closure when using ConcurrentDictionary","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

