---
title: "Find `DllImportSearchPath.AssemblyDirectory` behavior change"
sidebar_label: "Find `DllImportSearchPath.AssemblyDirectory` behavior change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `DllImportSearchPath.AssemblyDirectory` behavior change"}
  description={"Finds usages of `DllImportSearchPath.AssemblyDirectory` which has changed behavior in .NET 10. Specifying only `AssemblyDirectory` no longer falls back to OS default search paths."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindDllImportSearchPath"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["net10","search","dotnet","interop"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindDllImportSearchPath"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindDllImportSearchPath"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net10/finddllimportsearchpath.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `DllImportSearchPath.AssemblyDirectory` behavior change</RecipeHeader.Title>

<RecipeHeader.Description>Finds usages of `DllImportSearchPath.AssemblyDirectory` which has changed behavior in .NET 10. Specifying only `AssemblyDirectory` no longer falls back to OS default search paths.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.FindDllImportSearchPath","displayName":"Find `DllImportSearchPath.AssemblyDirectory` behavior change","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

