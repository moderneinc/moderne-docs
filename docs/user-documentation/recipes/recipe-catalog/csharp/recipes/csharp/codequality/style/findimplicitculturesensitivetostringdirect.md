---
title: "Find implicit culture-sensitive ToString in concatenation"
sidebar_label: "Find implicit culture-sensitive ToString in concatenation"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find implicit culture-sensitive ToString in concatenation"}
  description={"Detect string concatenation with numeric types that implicitly call culture-sensitive `ToString()`. Use an explicit format or `CultureInfo.InvariantCulture`."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindImplicitCultureSensitiveToStringDirect"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindImplicitCultureSensitiveToStringDirect"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindImplicitCultureSensitiveToStringDirect"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findimplicitculturesensitivetostringdirect.md"}
  moderneOnly
>

<RecipeHeader.Title>Find implicit culture-sensitive ToString in concatenation</RecipeHeader.Title>

<RecipeHeader.Description>Detect string concatenation with numeric types that implicitly call culture-sensitive `ToString()`. Use an explicit format or `CultureInfo.InvariantCulture`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindImplicitCultureSensitiveToStringDirect","displayName":"Find implicit culture-sensitive ToString in concatenation","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

