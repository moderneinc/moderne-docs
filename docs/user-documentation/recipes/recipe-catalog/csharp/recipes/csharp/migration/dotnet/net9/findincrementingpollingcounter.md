---
title: "Find `IncrementingPollingCounter` async callback change"
sidebar_label: "Find `IncrementingPollingCounter` async callback change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `IncrementingPollingCounter` async callback change"}
  description={"Finds `new IncrementingPollingCounter()` constructor calls. In .NET 9, the initial callback invocation is asynchronous instead of synchronous, which may change timing behavior."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindIncrementingPollingCounter"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","diagnostics","dotnet","net9"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindIncrementingPollingCounter"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindIncrementingPollingCounter"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findincrementingpollingcounter.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `IncrementingPollingCounter` async callback change</RecipeHeader.Title>

<RecipeHeader.Description>Finds `new IncrementingPollingCounter()` constructor calls. In .NET 9, the initial callback invocation is asynchronous instead of synchronous, which may change timing behavior.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindIncrementingPollingCounter","displayName":"Find `IncrementingPollingCounter` async callback change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

