---
title: "Target of [XamlSetMarkupExtension] should exist and have correct signature"
sidebar_label: "Target of [XamlSetMarkupExtension] should exist and have correct signature"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Target of [XamlSetMarkupExtension] should exist and have correct signature"}
  description={"`[XamlSetMarkupExtension]` names its handler as a string, so a missing method or a wrong signature is only discovered when XAML is loaded. Flags the attribute when no `void Handler(object, XamlSetMarkupExtensionEventArgs)` is reachable on the type."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.XamlSetMarkupExtensionTargetShouldExist"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.XamlSetMarkupExtensionTargetShouldExist"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.XamlSetMarkupExtensionTargetShouldExist"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/xamlsetmarkupextensiontargetshouldexist.md"}
  moderneOnly
>

<RecipeHeader.Title>Target of [XamlSetMarkupExtension] should exist and have correct signature</RecipeHeader.Title>

<RecipeHeader.Description>`[XamlSetMarkupExtension]` names its handler as a string, so a missing method or a wrong signature is only discovered when XAML is loaded. Flags the attribute when no `void Handler(object, XamlSetMarkupExtensionEventArgs)` is reachable on the type.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.XamlSetMarkupExtensionTargetShouldExist","displayName":"Target of [XamlSetMarkupExtension] should exist and have correct signature","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

