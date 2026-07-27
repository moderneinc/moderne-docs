---
title: "Find obsolete `MachineKey.Encode`/`Decode`"
sidebar_label: "Find obsolete `MachineKey.Encode`/`Decode`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find obsolete `MachineKey.Encode`/`Decode`"}
  description={"Finds references to `System.Web.Security.MachineKey`, whose `Encode`/`Decode` methods are obsolete as of .NET Framework 4.5. Use `MachineKey.Protect`/`MachineKey.Unprotect` instead."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindObsoleteMachineKeyEncryption"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","security","dotnet","net-framework"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindObsoleteMachineKeyEncryption"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindObsoleteMachineKeyEncryption"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findobsoletemachinekeyencryption.md"}
  moderneOnly
>

<RecipeHeader.Title>Find obsolete `MachineKey.Encode`/`Decode`</RecipeHeader.Title>

<RecipeHeader.Description>Finds references to `System.Web.Security.MachineKey`, whose `Encode`/`Decode` methods are obsolete as of .NET Framework 4.5. Use `MachineKey.Protect`/`MachineKey.Unprotect` instead.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindObsoleteMachineKeyEncryption","displayName":"Find obsolete `MachineKey.Encode`/`Decode`","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

