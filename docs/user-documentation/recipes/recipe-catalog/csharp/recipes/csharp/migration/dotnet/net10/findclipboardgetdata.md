---
title: "Find obsolete `Clipboard.GetData` calls (WFDEV005)"
sidebar_label: "Find obsolete `Clipboard.GetData` calls (WFDEV005)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find obsolete `Clipboard.GetData` calls (WFDEV005)"}
  description={"Finds calls to `Clipboard.GetData(string)`. In .NET 10, this method is obsolete (WFDEV005). Use `Clipboard.TryGetData` methods instead."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindClipboardGetData"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["net10","search","dotnet","winforms"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindClipboardGetData"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindClipboardGetData"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net10/findclipboardgetdata.md"}
  moderneOnly
>

<RecipeHeader.Title>Find obsolete `Clipboard.GetData` calls (WFDEV005)</RecipeHeader.Title>

<RecipeHeader.Description>Finds calls to `Clipboard.GetData(string)`. In .NET 10, this method is obsolete (WFDEV005). Use `Clipboard.TryGetData` methods instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindClipboardGetData","displayName":"Find obsolete `Clipboard.GetData` calls (WFDEV005)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

