---
title: "Replace Enum.ToString() with nameof"
sidebar_label: "Replace Enum.ToString() with nameof"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace Enum.ToString() with nameof"}
  description={"Replace `MyEnum.Value.ToString()` with `nameof(MyEnum.Value)`. The `nameof` operator is evaluated at compile time, avoiding runtime reflection."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.ReplaceEnumToStringWithNameof"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","performance","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.ReplaceEnumToStringWithNameof"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Performance.ReplaceEnumToStringWithNameof"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/performance/replaceenumtostringwithnameof.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace Enum.ToString() with nameof</RecipeHeader.Title>

<RecipeHeader.Description>Replace `MyEnum.Value.ToString()` with `nameof(MyEnum.Value)`. The `nameof` operator is evaluated at compile time, avoiding runtime reflection.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Performance.ReplaceEnumToStringWithNameof","displayName":"Replace Enum.ToString() with nameof","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

