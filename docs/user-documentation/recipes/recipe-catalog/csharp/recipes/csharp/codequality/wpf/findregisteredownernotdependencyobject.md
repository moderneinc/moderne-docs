---
title: "Registered owner type must inherit DependencyObject"
sidebar_label: "Registered owner type must inherit DependencyObject"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Registered owner type must inherit DependencyObject"}
  description={"`DependencyProperty.Register` stores the owner type for run-time lookups and requires it to be a `DependencyObject`. Flags a registration whose owner is not, which throws when the property is used; an attached property should use `RegisterAttached` instead."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindRegisteredOwnerNotDependencyObject"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindRegisteredOwnerNotDependencyObject"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindRegisteredOwnerNotDependencyObject"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/findregisteredownernotdependencyobject.md"}
  moderneOnly
>

<RecipeHeader.Title>Registered owner type must inherit DependencyObject</RecipeHeader.Title>

<RecipeHeader.Description>`DependencyProperty.Register` stores the owner type for run-time lookups and requires it to be a `DependencyObject`. Flags a registration whose owner is not, which throws when the property is used; an attached property should use `RegisterAttached` instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindRegisteredOwnerNotDependencyObject","displayName":"Registered owner type must inherit DependencyObject","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

