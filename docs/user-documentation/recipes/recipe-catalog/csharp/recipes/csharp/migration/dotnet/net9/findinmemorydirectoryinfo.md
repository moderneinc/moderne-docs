---
title: "Find `InMemoryDirectoryInfo` rootDir prepend change"
sidebar_label: "Find `InMemoryDirectoryInfo` rootDir prepend change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `InMemoryDirectoryInfo` rootDir prepend change"}
  description={"Finds `new InMemoryDirectoryInfo()` constructor calls. In .NET 9, `rootDir` is prepended to file paths that don't start with the `rootDir`, which may change file matching behavior."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindInMemoryDirectoryInfo"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","net9","globbing"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindInMemoryDirectoryInfo"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindInMemoryDirectoryInfo"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net9/findinmemorydirectoryinfo.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `InMemoryDirectoryInfo` rootDir prepend change</RecipeHeader.Title>

<RecipeHeader.Description>Finds `new InMemoryDirectoryInfo()` constructor calls. In .NET 9, `rootDir` is prepended to file paths that don't start with the `rootDir`, which may change file matching behavior.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net9.FindInMemoryDirectoryInfo","displayName":"Find `InMemoryDirectoryInfo` rootDir prepend change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

