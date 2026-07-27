---
title: "Retarget .NET Framework 4.5.2 to 4.6"
sidebar_label: "Retarget .NET Framework 4.5.2 to 4.6"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Retarget .NET Framework 4.5.2 to 4.6"}
  description={"Retargets a .NET Framework 4.5.2 project to 4.6. Updates `<TargetFrameworkVersion>` to `v4.6`, `<TargetFramework>` to `net46`, the app.config `<supportedRuntime sku>`, and the web.config `targetFramework`. Includes all earlier steps (4.0 -> 4.5.2). 4.6 is where `<AppContextSwitchOverrides>` is introduced. Notable retargeting changes: TLS now restricts to 1.0/1.1/1.2 and drops SSL3/RC4 (opt out via `Switch.System.Net.DontEnableSchUseStrongCrypto=true`); certificate EKU validation is added; `CurrentCulture`/`CurrentUICulture` flow across async tasks (`Switch.System.Globalization.NoAsyncCurrentCulture=true`); the 64-bit RyuJIT replaces the legacy JIT (`<useLegacyJit enabled=\"1\"/>` to revert); `XmlWriter` throws on invalid surrogate pairs. The accompanying `Find` recipe flags `ServicePointManager`/TLS code for review. See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.6.x."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework46"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","net-framework","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework46"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework46"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework46.md"}
  moderneOnly
>

<RecipeHeader.Title>Retarget .NET Framework 4.5.2 to 4.6</RecipeHeader.Title>

<RecipeHeader.Description>Retargets a .NET Framework 4.5.2 project to 4.6. Updates `<TargetFrameworkVersion>` to `v4.6`, `<TargetFramework>` to `net46`, the app.config `<supportedRuntime sku>`, and the web.config `targetFramework`. Includes all earlier steps (4.0 -> 4.5.2). 4.6 is where `<AppContextSwitchOverrides>` is introduced. Notable retargeting changes: TLS now restricts to 1.0/1.1/1.2 and drops SSL3/RC4 (opt out via `Switch.System.Net.DontEnableSchUseStrongCrypto=true`); certificate EKU validation is added; `CurrentCulture`/`CurrentUICulture` flow across async tasks (`Switch.System.Globalization.NoAsyncCurrentCulture=true`); the 64-bit RyuJIT replaces the legacy JIT (`<useLegacyJit enabled="1"/>` to revert); `XmlWriter` throws on invalid surrogate pairs. The accompanying `Find` recipe flags `ServicePointManager`/TLS code for review. See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.6.x.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Retarget .NET Framework 4.5.1 to 4.5.2","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework452/"},{"name":"Change .NET Framework version","href":""},{"name":"Change .NET target framework","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/changedotnettargetframework/"},{"name":"Change web.config target framework","href":""},{"name":"Ensure csproj attestation","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/ensurecsprojattestation/"},{"name":"Find `ServicePointManager` TLS configuration","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findservicepointmanagersecurityprotocol/"},{"name":"Find `XmlWriter` invalid-surrogate-pair change","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findxmlwriterinvalidsurrogate/"},{"name":"Find `CurrentCulture`/`CurrentUICulture` async flow change","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findasynccurrentcultureflow/"},{"name":"Find `Icon.ToBitmap` usage (PNG-frame behavior change)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findicontobitmappngframes/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework46","displayName":"Retarget .NET Framework 4.5.2 to 4.6","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

