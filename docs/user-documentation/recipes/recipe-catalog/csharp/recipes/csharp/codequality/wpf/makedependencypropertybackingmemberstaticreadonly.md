---
title: "Backing member for a DependencyProperty should be static and readonly"
sidebar_label: "Backing member for a DependencyProperty should be static and readonly"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Backing member for a DependencyProperty should be static and readonly"}
  description={"A `DependencyProperty` or `DependencyPropertyKey` is registered once per owner type, so its backing field or property must be `static readonly`. Adds the missing modifiers."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.MakeDependencyPropertyBackingMemberStaticReadonly"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.MakeDependencyPropertyBackingMemberStaticReadonly"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.MakeDependencyPropertyBackingMemberStaticReadonly"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/makedependencypropertybackingmemberstaticreadonly.md"}
  moderneOnly
>

<RecipeHeader.Title>Backing member for a DependencyProperty should be static and readonly</RecipeHeader.Title>

<RecipeHeader.Description>A `DependencyProperty` or `DependencyPropertyKey` is registered once per owner type, so its backing field or property must be `static readonly`. Adds the missing modifiers.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.MakeDependencyPropertyBackingMemberStaticReadonly","displayName":"Backing member for a DependencyProperty should be static and readonly","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

