---
title: "Target of [XamlSetTypeConverter] should exist and have correct signature"
sidebar_label: "Target of [XamlSetTypeConverter] should exist and have correct signature"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Target of [XamlSetTypeConverter] should exist and have correct signature"}
  description={"`[XamlSetTypeConverter]` names its handler as a string, so a missing method or a wrong signature is only discovered when XAML is loaded. Flags the attribute when no `void Handler(object, XamlSetTypeConverterEventArgs)` is reachable on the type."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.XamlSetTypeConverterTargetShouldExist"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.XamlSetTypeConverterTargetShouldExist"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.XamlSetTypeConverterTargetShouldExist"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/xamlsettypeconvertertargetshouldexist.md"}
  moderneOnly
>

<RecipeHeader.Title>Target of [XamlSetTypeConverter] should exist and have correct signature</RecipeHeader.Title>

<RecipeHeader.Description>`[XamlSetTypeConverter]` names its handler as a string, so a missing method or a wrong signature is only discovered when XAML is loaded. Flags the attribute when no `void Handler(object, XamlSetTypeConverterEventArgs)` is reachable on the type.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.XamlSetTypeConverterTargetShouldExist","displayName":"Target of [XamlSetTypeConverter] should exist and have correct signature","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

