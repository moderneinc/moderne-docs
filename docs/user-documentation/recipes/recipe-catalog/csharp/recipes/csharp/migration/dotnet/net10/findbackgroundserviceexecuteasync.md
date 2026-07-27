---
title: "Find `BackgroundService.ExecuteAsync` behavior change"
sidebar_label: "Find `BackgroundService.ExecuteAsync` behavior change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `BackgroundService.ExecuteAsync` behavior change"}
  description={"Finds methods that override `ExecuteAsync` from `BackgroundService`. In .NET 10, the entire method runs on a background thread; synchronous code before the first `await` no longer blocks host startup."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindBackgroundServiceExecuteAsync"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["net10","search","dotnet","hosting"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindBackgroundServiceExecuteAsync"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindBackgroundServiceExecuteAsync"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net10/findbackgroundserviceexecuteasync.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `BackgroundService.ExecuteAsync` behavior change</RecipeHeader.Title>

<RecipeHeader.Description>Finds methods that override `ExecuteAsync` from `BackgroundService`. In .NET 10, the entire method runs on a background thread; synchronous code before the first `await` no longer blocks host startup.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindBackgroundServiceExecuteAsync","displayName":"Find `BackgroundService.ExecuteAsync` behavior change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

