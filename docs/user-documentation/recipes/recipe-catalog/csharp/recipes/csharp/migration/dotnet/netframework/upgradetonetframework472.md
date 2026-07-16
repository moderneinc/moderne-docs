---
title: "Retarget .NET Framework 4.7.1 to 4.7.2"
sidebar_label: "Retarget .NET Framework 4.7.1 to 4.7.2"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Retarget .NET Framework 4.7.1 to 4.7.2"}
  description={"Retargets a .NET Framework 4.7.1 project to 4.7.2. Updates `<TargetFrameworkVersion>` to `v4.7.2`, `<TargetFramework>` to `net472`, the app.config `<supportedRuntime sku>`, and the web.config `targetFramework`. Includes all earlier steps (4.0 -> 4.7.1). Notable retargeting changes at 4.7.2: second wave of accessibility/UIA improvements (requires both `Switch.UseLegacyAccessibilityFeatures=true` and `Switch.UseLegacyAccessibilityFeatures.2=true` to keep legacy behavior); `System.Uri` keeps Unicode bidi control characters and applies a consistent RFC 3986 reserved-character set (`Switch.System.Uri.DontKeepUnicodeBidiFormattingCharacters=true` / `Switch.System.Uri.DontEnableStrictRFC3986ReservedCharacterSets=true` to revert); `DeflateStream`/`GZipStream` use native Windows decompression. See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.7.x."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework472"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","net-framework","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework472"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework472"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework472.md"}
  moderneOnly
>

<RecipeHeader.Title>Retarget .NET Framework 4.7.1 to 4.7.2</RecipeHeader.Title>

<RecipeHeader.Description>Retargets a .NET Framework 4.7.1 project to 4.7.2. Updates `<TargetFrameworkVersion>` to `v4.7.2`, `<TargetFramework>` to `net472`, the app.config `<supportedRuntime sku>`, and the web.config `targetFramework`. Includes all earlier steps (4.0 -> 4.7.1). Notable retargeting changes at 4.7.2: second wave of accessibility/UIA improvements (requires both `Switch.UseLegacyAccessibilityFeatures=true` and `Switch.UseLegacyAccessibilityFeatures.2=true` to keep legacy behavior); `System.Uri` keeps Unicode bidi control characters and applies a consistent RFC 3986 reserved-character set (`Switch.System.Uri.DontKeepUnicodeBidiFormattingCharacters=true` / `Switch.System.Uri.DontEnableStrictRFC3986ReservedCharacterSets=true` to revert); `DeflateStream`/`GZipStream` use native Windows decompression. See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.7.x.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Retarget .NET Framework 4.7 to 4.7.1","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework471/"},{"name":"Change .NET Framework version","href":""},{"name":"Change .NET target framework","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/changedotnettargetframework/"},{"name":"Change web.config target framework","href":""},{"name":"Ensure csproj attestation","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/ensurecsprojattestation/"},{"name":"Find `DeflateStream`/`GZipStream` usage (native decompression)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/finddeflatestreamnativedecompression/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework472","displayName":"Retarget .NET Framework 4.7.1 to 4.7.2","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

