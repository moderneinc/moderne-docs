---
title: "Add timeout to Regex"
sidebar_label: "Add timeout to Regex"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add timeout to Regex"}
  description={"Regex without a timeout can be vulnerable to ReDoS attacks. Specify a `TimeSpan` timeout or use `RegexOptions.NonBacktracking`."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingTimeoutForRegex"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingTimeoutForRegex"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingTimeoutForRegex"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/findmissingtimeoutforregex.md"}
  moderneOnly
>

<RecipeHeader.Title>Add timeout to Regex</RecipeHeader.Title>

<RecipeHeader.Description>Regex without a timeout can be vulnerable to ReDoS attacks. Specify a `TimeSpan` timeout or use `RegexOptions.NonBacktracking`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.FindMissingTimeoutForRegex","displayName":"Add timeout to Regex","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

