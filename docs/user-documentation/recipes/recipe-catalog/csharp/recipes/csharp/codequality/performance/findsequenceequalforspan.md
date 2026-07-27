---
title: "Find Span&lt;char&gt; equality that should use SequenceEqual"
sidebar_label: "Find Span&lt;char&gt; equality that should use SequenceEqual"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Span<char> equality that should use SequenceEqual"}
  description={"Detect `==` and `!=` operators on `Span<char>` or `ReadOnlySpan<char>` which compare references. Use `SequenceEqual` for content comparison."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindSequenceEqualForSpan"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindSequenceEqualForSpan"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindSequenceEqualForSpan"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findsequenceequalforspan.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Span&lt;char> equality that should use SequenceEqual</RecipeHeader.Title>

<RecipeHeader.Description>Detect `==` and `!=` operators on `Span<char>` or `ReadOnlySpan<char>` which compare references. Use `SequenceEqual` for content comparison.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindSequenceEqualForSpan","displayName":"Find Span<char> equality that should use SequenceEqual","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

