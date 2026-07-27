---
title: "Find Parse/TryParse without IFormatProvider"
sidebar_label: "Find Parse/TryParse without IFormatProvider"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Parse/TryParse without IFormatProvider"}
  description={"Detect `int.Parse(str)` and similar calls without an `IFormatProvider` parameter. Use `CultureInfo.InvariantCulture` for culture-independent parsing."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseIFormatProvider"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseIFormatProvider"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseIFormatProvider"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduseiformatprovider.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Parse/TryParse without IFormatProvider</RecipeHeader.Title>

<RecipeHeader.Description>Detect `int.Parse(str)` and similar calls without an `IFormatProvider` parameter. Use `CultureInfo.InvariantCulture` for culture-independent parsing.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseIFormatProvider","displayName":"Find Parse/TryParse without IFormatProvider","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

