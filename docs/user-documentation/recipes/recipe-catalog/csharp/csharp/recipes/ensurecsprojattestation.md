---
title: "Ensure csproj attestation"
sidebar_label: "Ensure csproj attestation"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Ensure csproj attestation"}
  description={"Re-runs `dotnet restore` against each .csproj whose `MSBuildProject` marker is stale (set by any csproj-mutating recipe in the run) and refreshes the marker from the resulting `project.assets.json`. Use this at the end of a composite recipe whose csproj-mutating sub-recipes have `RegenerateMarker = false`, so reattestation happens once on the final consistent state instead of after every edit. Unmodified .csproj files incur no `dotnet restore` cost."}
  fqName={"OpenRewrite.CSharp.Recipes.EnsureCsprojAttestation"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.CSharp.Recipes.EnsureCsprojAttestation"}
  artifact={"OpenRewrite.Recipes.CSharp.Core"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.CSharp.Recipes.EnsureCsprojAttestation"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/ensurecsprojattestation.md"}
  moderneOnly
>

<RecipeHeader.Title>Ensure csproj attestation</RecipeHeader.Title>

<RecipeHeader.Description>Re-runs `dotnet restore` against each .csproj whose `MSBuildProject` marker is stale (set by any csproj-mutating recipe in the run) and refreshes the marker from the resulting `project.assets.json`. Use this at the end of a composite recipe whose csproj-mutating sub-recipes have `RegenerateMarker = false`, so reattestation happens once on the final consistent state instead of after every edit. Unmodified .csproj files incur no `dotnet restore` cost.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.CSharp.Recipes.EnsureCsprojAttestation","displayName":"Ensure csproj attestation","nugetPackage":"OpenRewrite.Recipes.CSharp.Core"}}>

## Usage

</UsageList>

