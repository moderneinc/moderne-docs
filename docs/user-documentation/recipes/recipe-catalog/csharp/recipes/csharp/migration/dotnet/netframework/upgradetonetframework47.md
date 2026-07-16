---
title: "Retarget .NET Framework 4.6.2 to 4.7"
sidebar_label: "Retarget .NET Framework 4.6.2 to 4.7"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Retarget .NET Framework 4.6.2 to 4.7"}
  description={"Retargets a .NET Framework 4.6.2 project to 4.7. Updates `<TargetFrameworkVersion>` to `v4.7`, `<TargetFramework>` to `net47`, the app.config `<supportedRuntime sku>`, and the web.config `targetFramework`. Includes all earlier steps (4.0 -> 4.6.2). Notable retargeting changes at 4.7: `ServicePointManager.SecurityProtocol` defaults to `SystemDefault`, inheriting the OS TLS configuration (`Switch.System.Net.DontEnableSystemDefaultTlsVersions=true` to revert); `SslStream` surfaces TLS alerts as `IOException`/`Win32Exception` instead of timing out (`Switch.System.Net.DontEnableTlsAlerts=true`); the WPF `Grid` star-column allocation algorithm is replaced (`Switch.System.Windows.Controls.Grid.StarDefinitionsCanExceedAvailableSpace=true`); `DataContractJsonSerializer` control-character escaping becomes ECMAScript-compatible. See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.7.x."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework47"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","net-framework","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework47"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework47"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework47.md"}
  moderneOnly
>

<RecipeHeader.Title>Retarget .NET Framework 4.6.2 to 4.7</RecipeHeader.Title>

<RecipeHeader.Description>Retargets a .NET Framework 4.6.2 project to 4.7. Updates `<TargetFrameworkVersion>` to `v4.7`, `<TargetFramework>` to `net47`, the app.config `<supportedRuntime sku>`, and the web.config `targetFramework`. Includes all earlier steps (4.0 -> 4.6.2). Notable retargeting changes at 4.7: `ServicePointManager.SecurityProtocol` defaults to `SystemDefault`, inheriting the OS TLS configuration (`Switch.System.Net.DontEnableSystemDefaultTlsVersions=true` to revert); `SslStream` surfaces TLS alerts as `IOException`/`Win32Exception` instead of timing out (`Switch.System.Net.DontEnableTlsAlerts=true`); the WPF `Grid` star-column allocation algorithm is replaced (`Switch.System.Windows.Controls.Grid.StarDefinitionsCanExceedAvailableSpace=true`); `DataContractJsonSerializer` control-character escaping becomes ECMAScript-compatible. See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.7.x.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Retarget .NET Framework 4.6.1 to 4.6.2","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework462/"},{"name":"Change .NET Framework version","href":""},{"name":"Change .NET target framework","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/changedotnettargetframework/"},{"name":"Change web.config target framework","href":""},{"name":"Ensure csproj attestation","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/ensurecsprojattestation/"},{"name":"Find `SslStream` usage (TLS alert behavior change)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findsslstreamtlsalerts/"},{"name":"Find `DataContractJsonSerializer` usage (control-char escaping change)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/finddatacontractjsonserializerescaping/"},{"name":"Find WPF `Grid` usage (star-column allocation change)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findwpfgridstarallocation/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework47","displayName":"Retarget .NET Framework 4.6.2 to 4.7","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

