---
title: "Find obsolete `Form.OnClosing`/`OnClosed` usage (WFDEV004)"
sidebar_label: "Find obsolete `Form.OnClosing`/`OnClosed` usage (WFDEV004)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find obsolete `Form.OnClosing`/`OnClosed` usage (WFDEV004)"}
  description={"Finds usage of `Form.OnClosing`, `Form.OnClosed`, and the `Closing`/`Closed` events. In .NET 10, these are obsolete (WFDEV004). Use `OnFormClosing`/`OnFormClosed` and `FormClosing`/`FormClosed` instead."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindFormOnClosingObsolete"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["net10","search","dotnet","winforms"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindFormOnClosingObsolete"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindFormOnClosingObsolete"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net10/findformonclosingobsolete.md"}
  moderneOnly
>

<RecipeHeader.Title>Find obsolete `Form.OnClosing`/`OnClosed` usage (WFDEV004)</RecipeHeader.Title>

<RecipeHeader.Description>Finds usage of `Form.OnClosing`, `Form.OnClosed`, and the `Closing`/`Closed` events. In .NET 10, these are obsolete (WFDEV004). Use `OnFormClosing`/`OnFormClosed` and `FormClosing`/`FormClosed` instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindFormOnClosingObsolete","displayName":"Find obsolete `Form.OnClosing`/`OnClosed` usage (WFDEV004)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

