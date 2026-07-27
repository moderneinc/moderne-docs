---
title: "Remove MSBuild property"
sidebar_label: "Remove MSBuild property"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove MSBuild property"}
  description={"Removes an MSBuild property element (e.g. `<RuntimeFrameworkVersion>`) from `<PropertyGroup>` in .csproj files."}
  fqName={"OpenRewrite.CSharp.Recipes.RemoveMSBuildProperty"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.CSharp.Recipes.RemoveMSBuildProperty"}
  artifact={"OpenRewrite.Recipes.CSharp.Core"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.CSharp.Recipes.RemoveMSBuildProperty"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/removemsbuildproperty.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove MSBuild property</RecipeHeader.Title>

<RecipeHeader.Description>Removes an MSBuild property element (e.g. `<RuntimeFrameworkVersion>`) from `<PropertyGroup>` in .csproj files.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"PropertyName","required":true,"description":"The MSBuild property element name to remove (case-sensitive).","example":"RuntimeFrameworkVersion"},{"type":"Boolean","name":"RegenerateMarker","required":false,"description":"Whether to re-run `dotnet restore` after the edit to refresh the project's MSBuildProject marker. Defaults to `true`. Composite recipes that chain multiple csproj-mutating steps may set this to `false` on intermediate steps and finalize once with `EnsureCsprojAttestation`."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"OpenRewrite.CSharp.Recipes.RemoveMSBuildProperty","displayName":"Remove MSBuild property","nugetPackage":"OpenRewrite.Recipes.CSharp.Core"}}>

## Usage

</UsageList>

