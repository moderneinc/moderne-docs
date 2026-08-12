---
title: "Backing member for a RoutedEvent should be static and readonly"
sidebar_label: "Backing member for a RoutedEvent should be static and readonly"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Backing member for a RoutedEvent should be static and readonly"}
  description={"A `RoutedEvent` is registered once per owner type, so its backing field or property must be `static readonly`. Adds the missing modifiers."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.MakeRoutedEventBackingMemberStaticReadonly"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.MakeRoutedEventBackingMemberStaticReadonly"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.MakeRoutedEventBackingMemberStaticReadonly"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/makeroutedeventbackingmemberstaticreadonly.md"}
  moderneOnly
>

<RecipeHeader.Title>Backing member for a RoutedEvent should be static and readonly</RecipeHeader.Title>

<RecipeHeader.Description>A `RoutedEvent` is registered once per owner type, so its backing field or property must be `static readonly`. Adds the missing modifiers.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.MakeRoutedEventBackingMemberStaticReadonly","displayName":"Backing member for a RoutedEvent should be static and readonly","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

