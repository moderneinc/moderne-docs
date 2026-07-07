---
title: "Find Parse/ToString without IFormatProvider"
sidebar_label: "Find Parse/ToString without IFormatProvider"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Parse/ToString without IFormatProvider"}
  description={"Detect calls to culture-sensitive methods like `int.Parse`, `double.Parse` without an explicit `IFormatProvider` or `CultureInfo`."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseFormatProviderInToString"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseFormatProviderInToString"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseFormatProviderInToString"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduseformatproviderintostring.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Parse/ToString without IFormatProvider</RecipeHeader.Title>

<RecipeHeader.Description>Detect calls to culture-sensitive methods like `int.Parse`, `double.Parse` without an explicit `IFormatProvider` or `CultureInfo`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseFormatProviderInToString","displayName":"Find Parse/ToString without IFormatProvider","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

