---
title: "Find `GnuTarEntry`/`PaxTarEntry` default timestamp change"
sidebar_label: "Find `GnuTarEntry`/`PaxTarEntry` default timestamp change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `GnuTarEntry`/`PaxTarEntry` default timestamp change"}
  description={"Finds `new GnuTarEntry(...)` and `new PaxTarEntry(...)` constructor calls. In .NET 10, these no longer set atime and ctime by default. Set `AccessTime`/`ChangeTime` explicitly if needed."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindGnuTarPaxTarEntry"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["net10","search","dotnet","tar"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindGnuTarPaxTarEntry"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindGnuTarPaxTarEntry"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net10/findgnutarpaxtarentry.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `GnuTarEntry`/`PaxTarEntry` default timestamp change</RecipeHeader.Title>

<RecipeHeader.Description>Finds `new GnuTarEntry(...)` and `new PaxTarEntry(...)` constructor calls. In .NET 10, these no longer set atime and ctime by default. Set `AccessTime`/`ChangeTime` explicitly if needed.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindGnuTarPaxTarEntry","displayName":"Find `GnuTarEntry`/`PaxTarEntry` default timestamp change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

