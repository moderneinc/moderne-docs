---
title: "Find ToImmutable*() that could use Frozen collections"
sidebar_label: "Find ToImmutable*() that could use Frozen collections"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find ToImmutable*() that could use Frozen collections"}
  description={"Finds usages of `ToImmutableDictionary()` and `ToImmutableHashSet()`. In .NET 8+, `ToFrozenDictionary()` and `ToFrozenSet()` provide better read performance."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.FindFrozenCollection"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["modernization","search","dotnet","net8"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.FindFrozenCollection"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.FindFrozenCollection"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net8/findfrozencollection.md"}
  moderneOnly
>

<RecipeHeader.Title>Find ToImmutable*() that could use Frozen collections</RecipeHeader.Title>

<RecipeHeader.Description>Finds usages of `ToImmutableDictionary()` and `ToImmutableHashSet()`. In .NET 8+, `ToFrozenDictionary()` and `ToFrozenSet()` provide better read performance.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net8.FindFrozenCollection","displayName":"Find ToImmutable*() that could use Frozen collections","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

