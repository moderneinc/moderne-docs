---
title: "Find `System.IO.Path` normalization change"
sidebar_label: "Find `System.IO.Path` normalization change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `System.IO.Path` normalization change"}
  description={"Finds uses of `System.IO.Path`, whose normalization defers to the OS and supports long (>260 char) paths when retargeting to .NET Framework 4.6.2 (`Switch.System.IO.UseLegacyPathHandling` / `Switch.System.IO.BlockLongPaths` to revert). Review path handling and `PathTooLongException` assumptions."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindPathNormalizationChange"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","net-framework","io"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindPathNormalizationChange"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindPathNormalizationChange"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findpathnormalizationchange.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `System.IO.Path` normalization change</RecipeHeader.Title>

<RecipeHeader.Description>Finds uses of `System.IO.Path`, whose normalization defers to the OS and supports long (>260 char) paths when retargeting to .NET Framework 4.6.2 (`Switch.System.IO.UseLegacyPathHandling` / `Switch.System.IO.BlockLongPaths` to revert). Review path handling and `PathTooLongException` assumptions.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindPathNormalizationChange","displayName":"Find `System.IO.Path` normalization change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

