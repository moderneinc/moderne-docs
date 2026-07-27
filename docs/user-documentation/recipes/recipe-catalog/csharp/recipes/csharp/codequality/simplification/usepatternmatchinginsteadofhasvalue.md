---
title: "Use pattern matching instead of HasValue"
sidebar_label: "Use pattern matching instead of HasValue"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use pattern matching instead of HasValue"}
  description={"Replace `nullable.HasValue` with `nullable is not null`. Pattern matching is more idiomatic in modern C#. Note: this recipe uses name-based matching and may match non-Nullable types with a `HasValue` property."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UsePatternMatchingInsteadOfHasValue"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UsePatternMatchingInsteadOfHasValue"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UsePatternMatchingInsteadOfHasValue"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/simplification/usepatternmatchinginsteadofhasvalue.md"}
  moderneOnly
>

<RecipeHeader.Title>Use pattern matching instead of HasValue</RecipeHeader.Title>

<RecipeHeader.Description>Replace `nullable.HasValue` with `nullable is not null`. Pattern matching is more idiomatic in modern C#. Note: this recipe uses name-based matching and may match non-Nullable types with a `HasValue` property.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Simplification.UsePatternMatchingInsteadOfHasValue","displayName":"Use pattern matching instead of HasValue","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

