---
title: "Avoid side effects in attached property CLR accessors"
sidebar_label: "Avoid side effects in attached property CLR accessors"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Avoid side effects in attached property CLR accessors"}
  description={"XAML bypasses the CLR `Get`/`Set` methods of an attached property and calls `GetValue`/`SetValue` directly, so any other work an accessor does runs only when the property is set from code. Flags the offending statement."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindSideEffectsInAttachedPropertyAccessor"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindSideEffectsInAttachedPropertyAccessor"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindSideEffectsInAttachedPropertyAccessor"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/findsideeffectsinattachedpropertyaccessor.md"}
  moderneOnly
>

<RecipeHeader.Title>Avoid side effects in attached property CLR accessors</RecipeHeader.Title>

<RecipeHeader.Description>XAML bypasses the CLR `Get`/`Set` methods of an attached property and calls `GetValue`/`SetValue` directly, so any other work an accessor does runs only when the property is set from code. Flags the offending statement.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindSideEffectsInAttachedPropertyAccessor","displayName":"Avoid side effects in attached property CLR accessors","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

