---
title: "Retarget .NET Framework 4.7 to 4.7.1"
sidebar_label: "Retarget .NET Framework 4.7 to 4.7.1"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Retarget .NET Framework 4.7 to 4.7.1"}
  description={"Retargets a .NET Framework 4.7 project to 4.7.1. Updates `<TargetFrameworkVersion>` to `v4.7.1`, `<TargetFramework>` to `net471`, the app.config `<supportedRuntime sku>`, and the web.config `targetFramework`. Includes all earlier steps (4.0 -> 4.7). Notable retargeting changes at 4.7.1: accessibility/UIA improvements across WinForms, WPF, and ASP.NET controls turn on by default (`Switch.UseLegacyAccessibilityFeatures=true` to keep legacy behavior); SignedXml/SignedCms and `PackageDigitalSignatureManager` default hash algorithms move from SHA-1 to SHA-256 (`Switch.System.Security.Cryptography.Xml.UseInsecureHashAlgorithms=true` etc. to revert); `ServiceBase.Run` now propagates exceptions thrown from `OnStart`. See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.7.x."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework471"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","net-framework","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework471"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework471"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework471.md"}
  moderneOnly
>

<RecipeHeader.Title>Retarget .NET Framework 4.7 to 4.7.1</RecipeHeader.Title>

<RecipeHeader.Description>Retargets a .NET Framework 4.7 project to 4.7.1. Updates `<TargetFrameworkVersion>` to `v4.7.1`, `<TargetFramework>` to `net471`, the app.config `<supportedRuntime sku>`, and the web.config `targetFramework`. Includes all earlier steps (4.0 -> 4.7). Notable retargeting changes at 4.7.1: accessibility/UIA improvements across WinForms, WPF, and ASP.NET controls turn on by default (`Switch.UseLegacyAccessibilityFeatures=true` to keep legacy behavior); SignedXml/SignedCms and `PackageDigitalSignatureManager` default hash algorithms move from SHA-1 to SHA-256 (`Switch.System.Security.Cryptography.Xml.UseInsecureHashAlgorithms=true` etc. to revert); `ServiceBase.Run` now propagates exceptions thrown from `OnStart`. See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.7.x.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Retarget .NET Framework 4.6.2 to 4.7","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework47/"},{"name":"Change .NET Framework version","href":""},{"name":"Change .NET target framework","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/changedotnettargetframework/"},{"name":"Change web.config target framework","href":""},{"name":"Ensure csproj attestation","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/ensurecsprojattestation/"},{"name":"Find `SignedXml`/`CmsSigner` usage (default hash SHA-1 → SHA-256)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findsignedxmldefaulthash/"},{"name":"Find `ServiceBase.Run` usage (OnStart exception propagation)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findservicebaserunonstart/"},{"name":"Find `SerialPort` usage (background-thread exception behavior)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findserialportthreadexception/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework471","displayName":"Retarget .NET Framework 4.7 to 4.7.1","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

