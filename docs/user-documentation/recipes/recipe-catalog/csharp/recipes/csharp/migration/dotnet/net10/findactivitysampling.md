---
title: "Find `ActivitySamplingResult.PropagationData` behavior change"
sidebar_label: "Find `ActivitySamplingResult.PropagationData` behavior change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `ActivitySamplingResult.PropagationData` behavior change"}
  description={"Finds usages of `ActivitySamplingResult.PropagationData` which has changed behavior in .NET 10. Activities with a recorded parent and PropagationData sampling no longer set `Activity.Recorded = true`."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindActivitySampling"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["net10","diagnostics","search","dotnet"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindActivitySampling"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindActivitySampling"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net10/findactivitysampling.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `ActivitySamplingResult.PropagationData` behavior change</RecipeHeader.Title>

<RecipeHeader.Description>Finds usages of `ActivitySamplingResult.PropagationData` which has changed behavior in .NET 10. Activities with a recorded parent and PropagationData sampling no longer set `Activity.Recorded = true`.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindActivitySampling","displayName":"Find `ActivitySamplingResult.PropagationData` behavior change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

