---
title: "Add default field to converter"
sidebar_label: "Add default field to converter"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add default field to converter"}
  description={"A stateless `IValueConverter` or `IMultiValueConverter` should expose a `Default` instance rather than being constructed per binding. Adds `static readonly T Default = new T();` and seals the converter."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.AddDefaultFieldToValueConverter"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.AddDefaultFieldToValueConverter"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.AddDefaultFieldToValueConverter"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/adddefaultfieldtovalueconverter.md"}
  moderneOnly
>

<RecipeHeader.Title>Add default field to converter</RecipeHeader.Title>

<RecipeHeader.Description>A stateless `IValueConverter` or `IMultiValueConverter` should expose a `Default` instance rather than being constructed per binding. Adds `static readonly T Default = new T();` and seals the converter.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.AddDefaultFieldToValueConverter","displayName":"Add default field to converter","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

