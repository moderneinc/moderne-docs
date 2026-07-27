---
title: "Find `SerialPort` usage (background-thread exception behavior)"
sidebar_label: "Find `SerialPort` usage (background-thread exception behavior)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `SerialPort` usage (background-thread exception behavior)"}
  description={"SerialPort no longer terminates the process when its background thread hits an OS exception when retargeting to .NET Framework 4.7.1 (Switch.System.IO.Ports.DoNotCatchSerialStreamThreadExceptions to revert). Review SerialPort error handling."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindSerialPortThreadException"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","net-framework","io"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindSerialPortThreadException"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindSerialPortThreadException"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findserialportthreadexception.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `SerialPort` usage (background-thread exception behavior)</RecipeHeader.Title>

<RecipeHeader.Description>SerialPort no longer terminates the process when its background thread hits an OS exception when retargeting to .NET Framework 4.7.1 (Switch.System.IO.Ports.DoNotCatchSerialStreamThreadExceptions to revert). Review SerialPort error handling.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindSerialPortThreadException","displayName":"Find `SerialPort` usage (background-thread exception behavior)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

