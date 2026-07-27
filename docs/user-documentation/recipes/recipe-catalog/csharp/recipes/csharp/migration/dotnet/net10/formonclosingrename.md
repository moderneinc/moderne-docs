---
title: "Rename `Form.OnClosing/OnClosed` to `OnFormClosing/OnFormClosed` (WFDEV004)"
sidebar_label: "Rename `Form.OnClosing/OnClosed` to `OnFormClosing/OnFormClosed` (WFDEV004)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Rename `Form.OnClosing/OnClosed` to `OnFormClosing/OnFormClosed` (WFDEV004)"}
  description={"Renames `Form.OnClosing` to `OnFormClosing` and `Form.OnClosed` to `OnFormClosed` for .NET 10 compatibility. Parameter type changes (`CancelEventArgs` → `FormClosingEventArgs`, `EventArgs` → `FormClosedEventArgs`) must be updated manually."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FormOnClosingRename"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["net10","dotnet","winforms"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FormOnClosingRename"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FormOnClosingRename"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net10/formonclosingrename.md"}
  moderneOnly
>

<RecipeHeader.Title>Rename `Form.OnClosing/OnClosed` to `OnFormClosing/OnFormClosed` (WFDEV004)</RecipeHeader.Title>

<RecipeHeader.Description>Renames `Form.OnClosing` to `OnFormClosing` and `Form.OnClosed` to `OnFormClosed` for .NET 10 compatibility. Parameter type changes (`CancelEventArgs` → `FormClosingEventArgs`, `EventArgs` → `FormClosedEventArgs`) must be updated manually.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FormOnClosingRename","displayName":"Rename `Form.OnClosing/OnClosed` to `OnFormClosing/OnFormClosed` (WFDEV004)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

