---
title: "Add NuGet package reference"
sidebar_label: "Add NuGet package reference"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add NuGet package reference"}
  description={"Adds a `<PackageReference>` element to .csproj files if not already present."}
  fqName={"OpenRewrite.CSharp.Recipes.AddNuGetPackageReference"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.CSharp.Recipes.AddNuGetPackageReference"}
  artifact={"OpenRewrite.Recipes.CSharp.Core"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.CSharp.Recipes.AddNuGetPackageReference"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/addnugetpackagereference.md"}
  moderneOnly
>

<RecipeHeader.Title>Add NuGet package reference</RecipeHeader.Title>

<RecipeHeader.Description>Adds a `<PackageReference>` element to .csproj files if not already present.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"PackageName","required":true,"description":"The NuGet package name to add.","example":"Newtonsoft.Json"},{"type":"String","name":"Version","required":false,"description":"The package version to add. If omitted, no Version attribute is set.","example":"13.0.3"},{"type":"Boolean","name":"RegenerateMarker","required":false,"description":"Whether to re-run `dotnet restore` after the edit to refresh the project's MSBuildProject marker. Defaults to `true`. Composite recipes that chain multiple csproj-mutating steps may set this to `false` on intermediate steps and finalize once with `EnsureCsprojAttestation`."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"OpenRewrite.CSharp.Recipes.AddNuGetPackageReference","displayName":"Add NuGet package reference","nugetPackage":"OpenRewrite.Recipes.CSharp.Core"}}>

## Usage

</UsageList>

