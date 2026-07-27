---
title: "Find == comparison that should use Equals()"
sidebar_label: "Find == comparison that should use Equals()"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find == comparison that should use Equals()"}
  description={"Detect `==` comparisons on reference types that override `Equals`. Using `==` may compare references instead of values."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseEqualsMethodInsteadOfOperator"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","style","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseEqualsMethodInsteadOfOperator"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseEqualsMethodInsteadOfOperator"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/style/finduseequalsmethodinsteadofoperator.md"}
  moderneOnly
>

<RecipeHeader.Title>Find == comparison that should use Equals()</RecipeHeader.Title>

<RecipeHeader.Description>Detect `==` comparisons on reference types that override `Equals`. Using `==` may compare references instead of values.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Style.FindUseEqualsMethodInsteadOfOperator","displayName":"Find == comparison that should use Equals()","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

