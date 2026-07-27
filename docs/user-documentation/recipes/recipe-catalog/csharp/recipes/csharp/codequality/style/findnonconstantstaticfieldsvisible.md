---
title: "Non-constant static fields should not be visible"
sidebar_label: "Non-constant static fields should not be visible"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Non-constant static fields should not be visible"}
  description={"Public static fields that are not `const` or `readonly` can be modified by any code, breaking encapsulation. Make them `readonly` or use a property."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindNonConstantStaticFieldsVisible"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindNonConstantStaticFieldsVisible"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindNonConstantStaticFieldsVisible"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/findnonconstantstaticfieldsvisible.md"}
  moderneOnly
>

<RecipeHeader.Title>Non-constant static fields should not be visible</RecipeHeader.Title>

<RecipeHeader.Description>Public static fields that are not `const` or `readonly` can be modified by any code, breaking encapsulation. Make them `readonly` or use a property.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindNonConstantStaticFieldsVisible","displayName":"Non-constant static fields should not be visible","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

