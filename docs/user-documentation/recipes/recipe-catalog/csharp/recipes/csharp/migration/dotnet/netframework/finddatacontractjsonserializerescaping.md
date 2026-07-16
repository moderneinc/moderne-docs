---
title: "Find `DataContractJsonSerializer` usage (control-char escaping change)"
sidebar_label: "Find `DataContractJsonSerializer` usage (control-char escaping change)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `DataContractJsonSerializer` usage (control-char escaping change)"}
  description={"DataContractJsonSerializer control-character escaping becomes ECMAScript V6/V8-compatible when retargeting to .NET Framework 4.7 (Switch.System.Runtime.Serialization.DoNotUseECMAScriptV6EscapeControlCharacter to revert). Review consumers that depend on the old escaping."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindDataContractJsonSerializerEscaping"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["serialization","search","dotnet","net-framework"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindDataContractJsonSerializerEscaping"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindDataContractJsonSerializerEscaping"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/finddatacontractjsonserializerescaping.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `DataContractJsonSerializer` usage (control-char escaping change)</RecipeHeader.Title>

<RecipeHeader.Description>DataContractJsonSerializer control-character escaping becomes ECMAScript V6/V8-compatible when retargeting to .NET Framework 4.7 (Switch.System.Runtime.Serialization.DoNotUseECMAScriptV6EscapeControlCharacter to revert). Review consumers that depend on the old escaping.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindDataContractJsonSerializerEscaping","displayName":"Find `DataContractJsonSerializer` usage (control-char escaping change)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

