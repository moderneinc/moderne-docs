---
title: "Add framework reference"
sidebar_label: "Add framework reference"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add framework reference"}
  description={"Adds a `<FrameworkReference>` to a .csproj if it isn't already present."}
  fqName={"OpenRewrite.CSharp.Recipes.AddFrameworkReference"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.CSharp.Recipes.AddFrameworkReference"}
  artifact={"OpenRewrite.Recipes.CSharp.Core"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.CSharp.Recipes.AddFrameworkReference"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/addframeworkreference.md"}
  moderneOnly
>

<RecipeHeader.Title>Add framework reference</RecipeHeader.Title>

<RecipeHeader.Description>Adds a `<FrameworkReference>` to a .csproj if it isn't already present.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"FrameworkName","required":true,"description":"The shared framework name to reference.","example":"Microsoft.AspNetCore.App"},{"type":"String","name":"TriggerPackageGlob","required":false,"description":"Optional glob: only add the framework reference when a `<PackageReference>` matching this glob is present in the project. Leave blank to always add.","example":"Microsoft.AspNetCore.*"},{"type":"Boolean","name":"RegenerateMarker","required":false,"description":"Whether to re-run `dotnet restore` after the edit to refresh the project's MSBuildProject marker. Defaults to `true`. Composite recipes that chain multiple csproj-mutating steps may set this to `false` on intermediate steps and finalize once with `EnsureCsprojAttestation`."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"OpenRewrite.CSharp.Recipes.AddFrameworkReference","displayName":"Add framework reference","nugetPackage":"OpenRewrite.Recipes.CSharp.Core"}}>

## Usage

</UsageList>

