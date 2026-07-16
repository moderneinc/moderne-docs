---
title: "Retarget .NET Framework 4.5 to 4.5.1"
sidebar_label: "Retarget .NET Framework 4.5 to 4.5.1"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Retarget .NET Framework 4.5 to 4.5.1"}
  description={"Retargets a .NET Framework 4.5 project to 4.5.1. Updates `<TargetFrameworkVersion>` to `v4.5.1`, `<TargetFramework>` to `net451`, the app.config `<supportedRuntime sku>`, and the web.config `targetFramework`. Includes all earlier steps (4.0 -> 4.5). Notable retargeting changes at 4.5.1: rebuilt ADO.NET providers must add `override` to `DbParameter.Precision`/`Scale`; WPF two-way binding to a non-public setter now throws `InvalidOperationException`. See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.5.x."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework451"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","net-framework","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework451"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework451"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework451.md"}
  moderneOnly
>

<RecipeHeader.Title>Retarget .NET Framework 4.5 to 4.5.1</RecipeHeader.Title>

<RecipeHeader.Description>Retargets a .NET Framework 4.5 project to 4.5.1. Updates `<TargetFrameworkVersion>` to `v4.5.1`, `<TargetFramework>` to `net451`, the app.config `<supportedRuntime sku>`, and the web.config `targetFramework`. Includes all earlier steps (4.0 -> 4.5). Notable retargeting changes at 4.5.1: rebuilt ADO.NET providers must add `override` to `DbParameter.Precision`/`Scale`; WPF two-way binding to a non-public setter now throws `InvalidOperationException`. See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.5.x.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Retarget .NET Framework 4.0 to 4.5","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework45/"},{"name":"Change .NET Framework version","href":""},{"name":"Change .NET target framework","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/changedotnettargetframework/"},{"name":"Change web.config target framework","href":""},{"name":"Ensure csproj attestation","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/ensurecsprojattestation/"},{"name":"Add `override` to `DbParameter.Precision`/`Scale`","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/addoverridetodbparameterprecisionscale/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework451","displayName":"Retarget .NET Framework 4.5 to 4.5.1","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

