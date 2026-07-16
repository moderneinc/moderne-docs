---
title: "Remove DotNetCliToolReference"
sidebar_label: "Remove DotNetCliToolReference"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove DotNetCliToolReference"}
  description={"Removes a `<DotNetCliToolReference>` element from .csproj files. Use `*` to remove every CLI tool reference."}
  fqName={"OpenRewrite.CSharp.Recipes.RemoveDotNetCliToolReference"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.CSharp.Recipes.RemoveDotNetCliToolReference"}
  artifact={"OpenRewrite.Recipes.CSharp.Core"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.CSharp.Recipes.RemoveDotNetCliToolReference"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/removedotnetclitoolreference.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove DotNetCliToolReference</RecipeHeader.Title>

<RecipeHeader.Description>Removes a `<DotNetCliToolReference>` element from .csproj files. Use `*` to remove every CLI tool reference.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"ToolName","required":true,"description":"The CLI tool package name to remove. Supports glob patterns. Use `*` to remove all CLI tool references.","example":"Microsoft.DotNet.Watcher.Tools"},{"type":"Boolean","name":"RegenerateMarker","required":false,"description":"Whether to re-run `dotnet restore` after the edit to refresh the project's MSBuildProject marker. Defaults to `true`. Composite recipes that chain multiple csproj-mutating steps may set this to `false` on intermediate steps and finalize once with `EnsureCsprojAttestation`."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"OpenRewrite.CSharp.Recipes.RemoveDotNetCliToolReference","displayName":"Remove DotNetCliToolReference","nugetPackage":"OpenRewrite.Recipes.CSharp.Core"}}>

## Usage

</UsageList>

