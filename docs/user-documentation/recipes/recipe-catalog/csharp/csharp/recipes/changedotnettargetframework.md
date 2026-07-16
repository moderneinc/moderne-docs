---
title: "Change .NET target framework"
sidebar_label: "Change .NET target framework"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change .NET target framework"}
  description={"Changes the `<TargetFramework>` or `<TargetFrameworks>` value in .csproj files. For multi-TFM projects, replaces the matching framework within the semicolon-delimited list."}
  fqName={"OpenRewrite.CSharp.Recipes.ChangeDotNetTargetFramework"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.CSharp.Recipes.ChangeDotNetTargetFramework"}
  artifact={"OpenRewrite.Recipes.CSharp.Core"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.CSharp.Recipes.ChangeDotNetTargetFramework"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/changedotnettargetframework.md"}
  moderneOnly
>

<RecipeHeader.Title>Change .NET target framework</RecipeHeader.Title>

<RecipeHeader.Description>Changes the `<TargetFramework>` or `<TargetFrameworks>` value in .csproj files. For multi-TFM projects, replaces the matching framework within the semicolon-delimited list.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"OldTargetFramework","required":true,"description":"The target framework moniker to replace (e.g., net8.0).","example":"net8.0"},{"type":"String","name":"NewTargetFramework","required":true,"description":"The target framework moniker to use instead (e.g., net9.0).","example":"net9.0"},{"type":"Boolean","name":"RegenerateMarker","required":false,"description":"Whether to re-run `dotnet restore` after the edit to refresh the project's MSBuildProject marker. Defaults to `true`. Composite recipes that chain multiple csproj-mutating steps may set this to `false` on intermediate steps and finalize once with `EnsureCsprojAttestation`."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"OpenRewrite.CSharp.Recipes.ChangeDotNetTargetFramework","displayName":"Change .NET target framework","nugetPackage":"OpenRewrite.Recipes.CSharp.Core"}}>

## Usage

</UsageList>

