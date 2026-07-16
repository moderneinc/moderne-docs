---
title: "Remove NuGet package reference"
sidebar_label: "Remove NuGet package reference"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove NuGet package reference"}
  description={"Removes a `<PackageReference>` element from .csproj files."}
  fqName={"OpenRewrite.CSharp.Recipes.RemoveNuGetPackageReference"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.CSharp.Recipes.RemoveNuGetPackageReference"}
  artifact={"OpenRewrite.Recipes.CSharp.Core"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.CSharp.Recipes.RemoveNuGetPackageReference"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/removenugetpackagereference.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove NuGet package reference</RecipeHeader.Title>

<RecipeHeader.Description>Removes a `<PackageReference>` element from .csproj files.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"PackageName","required":true,"description":"The NuGet package name to remove. Supports glob patterns.","example":"Newtonsoft.Json"},{"type":"Boolean","name":"RegenerateMarker","required":false,"description":"Whether to re-run `dotnet restore` after the edit to refresh the project's MSBuildProject marker. Defaults to `true`. Composite recipes that chain multiple csproj-mutating steps may set this to `false` on intermediate steps and finalize once with `EnsureCsprojAttestation`."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"OpenRewrite.CSharp.Recipes.RemoveNuGetPackageReference","displayName":"Remove NuGet package reference","nugetPackage":"OpenRewrite.Recipes.CSharp.Core"}}>

## Usage

</UsageList>

