---
title: "Retarget .NET Framework 4.6 to 4.6.1"
sidebar_label: "Retarget .NET Framework 4.6 to 4.6.1"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Retarget .NET Framework 4.6 to 4.6.1"}
  description={"Retargets a .NET Framework 4.6 project to 4.6.1. Updates `<TargetFrameworkVersion>` to `v4.6.1`, `<TargetFramework>` to `net461`, the app.config `<supportedRuntime sku>`, and the web.config `targetFramework`. Includes all earlier steps (4.0 -> 4.6). Notable retargeting changes at 4.6.1: `ZipArchiveEntry.FullName` uses `/` separators (`Switch.System.IO.Compression.ZipFile.UseBackslash=true` to revert); WCF transport security supports CNG-stored certificates; `X509CertificateClaimSet.FindClaims` matches all SAN DNS entries (`Switch.System.IdentityModel.DisableMultipleDNSEntriesInSANCertificate=true`). See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.6.x."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework461"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","net-framework","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework461"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework461"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework461.md"}
  moderneOnly
>

<RecipeHeader.Title>Retarget .NET Framework 4.6 to 4.6.1</RecipeHeader.Title>

<RecipeHeader.Description>Retargets a .NET Framework 4.6 project to 4.6.1. Updates `<TargetFrameworkVersion>` to `v4.6.1`, `<TargetFramework>` to `net461`, the app.config `<supportedRuntime sku>`, and the web.config `targetFramework`. Includes all earlier steps (4.0 -> 4.6). Notable retargeting changes at 4.6.1: `ZipArchiveEntry.FullName` uses `/` separators (`Switch.System.IO.Compression.ZipFile.UseBackslash=true` to revert); WCF transport security supports CNG-stored certificates; `X509CertificateClaimSet.FindClaims` matches all SAN DNS entries (`Switch.System.IdentityModel.DisableMultipleDNSEntriesInSANCertificate=true`). See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.6.x.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Retarget .NET Framework 4.5.2 to 4.6","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework46/"},{"name":"Change .NET Framework version","href":""},{"name":"Change .NET target framework","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/changedotnettargetframework/"},{"name":"Change web.config target framework","href":""},{"name":"Ensure csproj attestation","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/ensurecsprojattestation/"},{"name":"Find `ZipFile`/`ZipArchiveEntry` usage (path separator change)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findzipfileentryseparator/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework461","displayName":"Retarget .NET Framework 4.6 to 4.6.1","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

