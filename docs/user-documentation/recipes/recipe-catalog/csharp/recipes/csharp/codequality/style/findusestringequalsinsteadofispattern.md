---
title: "Find 'is' pattern with string literal"
sidebar_label: "Find 'is' pattern with string literal"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find 'is' pattern with string literal"}
  description={"Detect `x is \"literal\"` patterns that should use `string.Equals` with explicit `StringComparison` for culture-aware or case-insensitive comparisons."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseStringEqualsInsteadOfIsPattern"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseStringEqualsInsteadOfIsPattern"}
  artifact={"io.moderne.recipe:recipes-code-quality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseStringEqualsInsteadOfIsPattern"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findusestringequalsinsteadofispattern.md"}
  moderneOnly
>

<RecipeHeader.Title>Find 'is' pattern with string literal</RecipeHeader.Title>

<RecipeHeader.Description>Detect `x is "literal"` patterns that should use `string.Equals` with explicit `StringComparison` for culture-aware or case-insensitive comparisons.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseStringEqualsInsteadOfIsPattern","displayName":"Find 'is' pattern with string literal","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

