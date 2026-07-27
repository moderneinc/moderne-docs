---
title: "Remove ConfigureAwait(false)"
sidebar_label: "Remove ConfigureAwait(false)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove ConfigureAwait(false)"}
  description={"Remove `.ConfigureAwait(false)` calls that are unnecessary in ASP.NET Core and modern .NET applications (no SynchronizationContext). Do not apply to library code targeting .NET Framework."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.RemoveConfigureAwaitFalse"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["modernization","async","csharp","dotnet"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.RemoveConfigureAwaitFalse"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.RemoveConfigureAwaitFalse"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/removeconfigureawaitfalse.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove ConfigureAwait(false)</RecipeHeader.Title>

<RecipeHeader.Description>Remove `.ConfigureAwait(false)` calls that are unnecessary in ASP.NET Core and modern .NET applications (no SynchronizationContext). Do not apply to library code targeting .NET Framework.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.RemoveConfigureAwaitFalse","displayName":"Remove ConfigureAwait(false)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

