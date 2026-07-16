---
title: "Retarget .NET Framework 4.6.1 to 4.6.2"
sidebar_label: "Retarget .NET Framework 4.6.1 to 4.6.2"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Retarget .NET Framework 4.6.1 to 4.6.2"}
  description={"Retargets a .NET Framework 4.6.1 project to 4.6.2. Updates `<TargetFrameworkVersion>` to `v4.6.2`, `<TargetFramework>` to `net462`, the app.config `<supportedRuntime sku>`, and the web.config `targetFramework`. Includes all earlier steps (4.0 -> 4.6.1). Notable retargeting changes at 4.6.2: path normalization defers to the OS and supports long (>260 char) paths (`Switch.System.IO.UseLegacyPathHandling=true` / `Switch.System.IO.BlockLongPaths=true` to revert); `ClaimsIdentity` ctors clone the `Actor` (`Switch.System.Security.ClaimsIdentity.SetActorAsReferenceWhenCopyingClaimsIdentity=true`); `RSACng` accepts non-standard key sizes and `SignedXml.GetPublicKey` returns `RSACng`. Two changes need manual review (no switch): `HttpRuntime.AppDomainAppPath` may throw `NullReferenceException`, and `RSACng.ImportParameters` no longer throws on odd key sizes. See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.6.x."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework462"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","net-framework","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework462"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework462"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework462.md"}
  moderneOnly
>

<RecipeHeader.Title>Retarget .NET Framework 4.6.1 to 4.6.2</RecipeHeader.Title>

<RecipeHeader.Description>Retargets a .NET Framework 4.6.1 project to 4.6.2. Updates `<TargetFrameworkVersion>` to `v4.6.2`, `<TargetFramework>` to `net462`, the app.config `<supportedRuntime sku>`, and the web.config `targetFramework`. Includes all earlier steps (4.0 -> 4.6.1). Notable retargeting changes at 4.6.2: path normalization defers to the OS and supports long (>260 char) paths (`Switch.System.IO.UseLegacyPathHandling=true` / `Switch.System.IO.BlockLongPaths=true` to revert); `ClaimsIdentity` ctors clone the `Actor` (`Switch.System.Security.ClaimsIdentity.SetActorAsReferenceWhenCopyingClaimsIdentity=true`); `RSACng` accepts non-standard key sizes and `SignedXml.GetPublicKey` returns `RSACng`. Two changes need manual review (no switch): `HttpRuntime.AppDomainAppPath` may throw `NullReferenceException`, and `RSACng.ImportParameters` no longer throws on odd key sizes. See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.6.x.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Retarget .NET Framework 4.6 to 4.6.1","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework461/"},{"name":"Change .NET Framework version","href":""},{"name":"Change .NET target framework","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/changedotnettargetframework/"},{"name":"Change web.config target framework","href":""},{"name":"Ensure csproj attestation","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/ensurecsprojattestation/"},{"name":"Find `System.IO.Path` normalization change","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findpathnormalizationchange/"},{"name":"Find `ClaimsIdentity` Actor clone-on-copy change","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findclaimsidentityactorclone/"},{"name":"Find `HttpRuntime.AppDomainAppPath` (exception type change)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findhttpruntimeappdomainapppath/"},{"name":"Find `RSACng` usage (non-standard key size behavior)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findrsacngimportparameters/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework462","displayName":"Retarget .NET Framework 4.6.1 to 4.6.2","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

