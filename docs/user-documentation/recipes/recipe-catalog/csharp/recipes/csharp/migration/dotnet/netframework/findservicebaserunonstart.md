---
title: "Find `ServiceBase.Run` usage (OnStart exception propagation)"
sidebar_label: "Find `ServiceBase.Run` usage (OnStart exception propagation)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `ServiceBase.Run` usage (OnStart exception propagation)"}
  description={"ServiceBase.Run now propagates exceptions thrown from OnStart when retargeting to .NET Framework 4.7.1 (Switch.System.ServiceProcess.DontThrowExceptionsOnStart to revert). Review service startup error handling."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindServiceBaseRunOnStart"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["search","dotnet","net-framework","serviceprocess"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindServiceBaseRunOnStart"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindServiceBaseRunOnStart"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findservicebaserunonstart.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `ServiceBase.Run` usage (OnStart exception propagation)</RecipeHeader.Title>

<RecipeHeader.Description>ServiceBase.Run now propagates exceptions thrown from OnStart when retargeting to .NET Framework 4.7.1 (Switch.System.ServiceProcess.DontThrowExceptionsOnStart to revert). Review service startup error handling.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.FindServiceBaseRunOnStart","displayName":"Find `ServiceBase.Run` usage (OnStart exception propagation)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

