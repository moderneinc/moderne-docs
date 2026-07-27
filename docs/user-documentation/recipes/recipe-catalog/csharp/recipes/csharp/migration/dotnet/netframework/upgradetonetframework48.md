---
title: "Retarget to .NET Framework 4.8"
sidebar_label: "Retarget to .NET Framework 4.8"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Retarget to .NET Framework 4.8"}
  description={"Retargets a .NET Framework project to 4.8, the recommended modern target. Applies every intermediate minor-version step in order (4.0 -> 4.5 -> 4.5.1 -> 4.5.2 -> 4.6 -> 4.6.1 -> 4.6.2 -> 4.7 -> 4.7.1 -> 4.7.2 -> 4.8), updating `<TargetFrameworkVersion>` and `<TargetFramework>` in legacy and SDK-style csproj files, the `<supportedRuntime sku>` in app.config, and the `targetFramework` attribute in web.config at each step, and flagging affected source for review. Notable retargeting changes when reaching 4.8: managed crypto classes no longer throw in FIPS mode (`Switch.System.Security.Cryptography.UseLegacyFipsThrow=true` to revert); a third wave of accessibility improvements applies (keep legacy with all of `Switch.UseLegacyAccessibilityFeatures`, `.2`, and `.3`); `HwndHost` resizes correctly under per-monitor DPI; several WF/WPF checksum/hash defaults move to SHA-256. See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.8.x."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework48"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","net-framework","migration","net48"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework48"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework48"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework48.md"}
  moderneOnly
>

<RecipeHeader.Title>Retarget to .NET Framework 4.8</RecipeHeader.Title>

<RecipeHeader.Description>Retargets a .NET Framework project to 4.8, the recommended modern target. Applies every intermediate minor-version step in order (4.0 -> 4.5 -> 4.5.1 -> 4.5.2 -> 4.6 -> 4.6.1 -> 4.6.2 -> 4.7 -> 4.7.1 -> 4.7.2 -> 4.8), updating `<TargetFrameworkVersion>` and `<TargetFramework>` in legacy and SDK-style csproj files, the `<supportedRuntime sku>` in app.config, and the `targetFramework` attribute in web.config at each step, and flagging affected source for review. Notable retargeting changes when reaching 4.8: managed crypto classes no longer throw in FIPS mode (`Switch.System.Security.Cryptography.UseLegacyFipsThrow=true` to revert); a third wave of accessibility improvements applies (keep legacy with all of `Switch.UseLegacyAccessibilityFeatures`, `.2`, and `.3`); `HwndHost` resizes correctly under per-monitor DPI; several WF/WPF checksum/hash defaults move to SHA-256. See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.8.x.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Retarget .NET Framework 4.7.1 to 4.7.2","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework472/"},{"name":"Change .NET Framework version","href":""},{"name":"Change .NET target framework","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/changedotnettargetframework/"},{"name":"Change web.config target framework","href":""},{"name":"Ensure csproj attestation","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/ensurecsprojattestation/"},{"name":"Find managed crypto classes (FIPS mode behavior change)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findfipsmanagedcryptothrow/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework48","displayName":"Retarget to .NET Framework 4.8","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

