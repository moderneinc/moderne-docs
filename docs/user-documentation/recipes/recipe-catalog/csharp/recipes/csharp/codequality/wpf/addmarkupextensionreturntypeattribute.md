---
title: "Add MarkupExtensionReturnType attribute"
sidebar_label: "Add MarkupExtensionReturnType attribute"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add MarkupExtensionReturnType attribute"}
  description={"A `MarkupExtension` that overrides `ProvideValue` should be annotated with `[MarkupExtensionReturnType(typeof(T))]` so XAML tooling knows what the extension yields. Adds the attribute when the returned type can be determined from `ProvideValue`."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.AddMarkupExtensionReturnTypeAttribute"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.AddMarkupExtensionReturnTypeAttribute"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.AddMarkupExtensionReturnTypeAttribute"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/addmarkupextensionreturntypeattribute.md"}
  moderneOnly
>

<RecipeHeader.Title>Add MarkupExtensionReturnType attribute</RecipeHeader.Title>

<RecipeHeader.Description>A `MarkupExtension` that overrides `ProvideValue` should be annotated with `[MarkupExtensionReturnType(typeof(T))]` so XAML tooling knows what the extension yields. Adds the attribute when the returned type can be determined from `ProvideValue`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.AddMarkupExtensionReturnTypeAttribute","displayName":"Add MarkupExtensionReturnType attribute","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

