---
title: "Do not set DataContext or Style using SetCurrentValue"
sidebar_label: "Do not set DataContext or Style using SetCurrentValue"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Do not set DataContext or Style using SetCurrentValue"}
  description={"`DataContext` and `Style` are inherited through the visual tree, so a value written with `SetCurrentValue` is discarded as soon as the inherited value changes. Replaces the call with `SetValue`."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseSetValueForDataContextAndStyle"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseSetValueForDataContextAndStyle"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseSetValueForDataContextAndStyle"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/usesetvaluefordatacontextandstyle.md"}
  moderneOnly
>

<RecipeHeader.Title>Do not set DataContext or Style using SetCurrentValue</RecipeHeader.Title>

<RecipeHeader.Description>`DataContext` and `Style` are inherited through the visual tree, so a value written with `SetCurrentValue` is discarded as soon as the inherited value changes. Replaces the call with `SetValue`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseSetValueForDataContextAndStyle","displayName":"Do not set DataContext or Style using SetCurrentValue","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

