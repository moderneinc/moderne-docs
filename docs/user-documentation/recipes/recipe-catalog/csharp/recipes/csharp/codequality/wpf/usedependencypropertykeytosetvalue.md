---
title: "Set a readonly DependencyProperty using its DependencyPropertyKey"
sidebar_label: "Set a readonly DependencyProperty using its DependencyPropertyKey"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Set a readonly DependencyProperty using its DependencyPropertyKey"}
  description={"A read-only `DependencyProperty` can only be written through the `DependencyPropertyKey` it was registered with; passing the exposed `DependencyProperty` to `SetValue` or `SetCurrentValue` throws at run time. Replaces the call with `SetValue(<Name>PropertyKey, ...)`."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseDependencyPropertyKeyToSetValue"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseDependencyPropertyKeyToSetValue"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseDependencyPropertyKeyToSetValue"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/usedependencypropertykeytosetvalue.md"}
  moderneOnly
>

<RecipeHeader.Title>Set a readonly DependencyProperty using its DependencyPropertyKey</RecipeHeader.Title>

<RecipeHeader.Description>A read-only `DependencyProperty` can only be written through the `DependencyPropertyKey` it was registered with; passing the exposed `DependencyProperty` to `SetValue` or `SetCurrentValue` throws at run time. Replaces the call with `SetValue(<Name>PropertyKey, ...)`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.UseDependencyPropertyKeyToSetValue","displayName":"Set a readonly DependencyProperty using its DependencyPropertyKey","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

