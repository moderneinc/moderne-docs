---
title: "Name the PropertyChangedCallback OnNameChanged"
sidebar_label: "Name the PropertyChangedCallback OnNameChanged"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Name the PropertyChangedCallback OnNameChanged"}
  description={"The `PropertyChangedCallback` passed to a dependency property's `PropertyMetadata` should be named after the registered property — `OnValueChanged` for a property registered as `Value`. Renames the method and all references to it, in every file."}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RenamePropertyChangedCallbackToMatchRegisteredName"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","code-quality"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RenamePropertyChangedCallbackToMatchRegisteredName"}
  artifact={"OpenRewrite.Recipes.CSharp.CodeQuality"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RenamePropertyChangedCallbackToMatchRegisteredName"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/codequality/wpf/renamepropertychangedcallbacktomatchregisteredname.md"}
  moderneOnly
>

<RecipeHeader.Title>Name the PropertyChangedCallback OnNameChanged</RecipeHeader.Title>

<RecipeHeader.Description>The `PropertyChangedCallback` passed to a dependency property's `PropertyMetadata` should be named after the registered property — `OnValueChanged` for a property registered as `Value`. Renames the method and all references to it, in every file.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.CodeQuality.Wpf.RenamePropertyChangedCallbackToMatchRegisteredName","displayName":"Name the PropertyChangedCallback OnNameChanged","nugetPackage":"OpenRewrite.Recipes.CSharp.CodeQuality"}}>

## Usage

</UsageList>

