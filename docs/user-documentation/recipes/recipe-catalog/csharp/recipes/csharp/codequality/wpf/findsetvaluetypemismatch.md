---
title: "SetValue must use the registered type"
sidebar_label: "SetValue must use the registered type"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"SetValue must use the registered type"}
  description={"`SetValue` and `SetCurrentValue` take the value as `object`, so the compiler cannot check it against the type the `DependencyProperty` was registered with. Flags a call whose value does not fit the registered type, which throws at run time."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindSetValueTypeMismatch"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindSetValueTypeMismatch"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindSetValueTypeMismatch"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/findsetvaluetypemismatch.md"}
  moderneOnly
>

<RecipeHeader.Title>SetValue must use the registered type</RecipeHeader.Title>

<RecipeHeader.Description>`SetValue` and `SetCurrentValue` take the value as `object`, so the compiler cannot check it against the type the `DependencyProperty` was registered with. Flags a call whose value does not fit the registered type, which throws at run time.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.FindSetValueTypeMismatch","displayName":"SetValue must use the registered type","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

