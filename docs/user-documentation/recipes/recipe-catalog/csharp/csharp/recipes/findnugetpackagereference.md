---
title: "Find NuGet package reference"
sidebar_label: "Find NuGet package reference"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find NuGet package reference"}
  description={"Searches for .csproj files that reference a specific NuGet package. Intended for use as a precondition to scope other recipes."}
  fqName={"OpenRewrite.CSharp.Recipes.FindNuGetPackageReference"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.CSharp.Recipes.FindNuGetPackageReference"}
  artifact={"OpenRewrite.Recipes.CSharp.Core"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.CSharp.Recipes.FindNuGetPackageReference"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/findnugetpackagereference.md"}
  moderneOnly
>

<RecipeHeader.Title>Find NuGet package reference</RecipeHeader.Title>

<RecipeHeader.Description>Searches for .csproj files that reference a specific NuGet package. Intended for use as a precondition to scope other recipes.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"PackageName","required":true,"description":"The NuGet package name to search for. Supports glob patterns.","example":"Swashbuckle.AspNetCore"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"OpenRewrite.CSharp.Recipes.FindNuGetPackageReference","displayName":"Find NuGet package reference","nugetPackage":"OpenRewrite.Recipes.CSharp.Core"}}>

## Usage

</UsageList>

