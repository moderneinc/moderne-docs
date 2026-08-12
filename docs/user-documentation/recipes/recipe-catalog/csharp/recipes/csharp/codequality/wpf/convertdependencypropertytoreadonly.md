---
title: "Convert a dependency property to a read-only dependency property"
sidebar_label: "Convert a dependency property to a read-only dependency property"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Convert a dependency property to a read-only dependency property"}
  description={"Rewrites `DependencyProperty.Register` to `RegisterReadOnly`, holding the result in a private `DependencyPropertyKey` and exposing `<key>.DependencyProperty` under the original name. Every `SetValue` on the property inside the declaring type is moved onto the key, which is the only way a read-only dependency property can be written."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.ConvertDependencyPropertyToReadOnly"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.ConvertDependencyPropertyToReadOnly"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.ConvertDependencyPropertyToReadOnly"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/convertdependencypropertytoreadonly.md"}
  moderneOnly
>

<RecipeHeader.Title>Convert a dependency property to a read-only dependency property</RecipeHeader.Title>

<RecipeHeader.Description>Rewrites `DependencyProperty.Register` to `RegisterReadOnly`, holding the result in a private `DependencyPropertyKey` and exposing `<key>.DependencyProperty` under the original name. Every `SetValue` on the property inside the declaring type is moved onto the key, which is the only way a read-only dependency property can be written.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.ConvertDependencyPropertyToReadOnly","displayName":"Convert a dependency property to a read-only dependency property","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

