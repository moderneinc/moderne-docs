---
title: "Set a mutable dependency property using SetCurrentValue"
sidebar_label: "Set a mutable dependency property using SetCurrentValue"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Set a mutable dependency property using SetCurrentValue"}
  description={"Assigning a dependency property's CLR property, or calling `SetValue`, writes the local value and permanently outranks any binding, style, trigger or animation on that property. Replaces both with `SetCurrentValue`, which sets the effective value without changing the value source."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseSetCurrentValueForMutableProperty"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseSetCurrentValueForMutableProperty"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseSetCurrentValueForMutableProperty"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/usesetcurrentvalueformutableproperty.md"}
  moderneOnly
>

<RecipeHeader.Title>Set a mutable dependency property using SetCurrentValue</RecipeHeader.Title>

<RecipeHeader.Description>Assigning a dependency property's CLR property, or calling `SetValue`, writes the local value and permanently outranks any binding, style, trigger or animation on that property. Replaces both with `SetCurrentValue`, which sets the effective value without changing the value source.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseSetCurrentValueForMutableProperty","displayName":"Set a mutable dependency property using SetCurrentValue","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

