---
title: "Retarget to .NET Framework 4.8.1"
sidebar_label: "Retarget to .NET Framework 4.8.1"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Retarget to .NET Framework 4.8.1"}
  description={"Retargets a .NET Framework project to 4.8.1, applying the full 4.0 -> 4.8 chain and then bumping to 4.8.1. Updates `<TargetFrameworkVersion>` to `v4.8.1`, `<TargetFramework>` to `net481`, the app.config `<supportedRuntime sku>`, and the web.config `targetFramework`. .NET Framework 4.8.1 introduced no application-compatibility (retargeting) changes, so this step is purely the version bump. **Compatibility caveat:** 4.8.1 requires Windows 11 (21H2+) or Windows Server 2022+ at runtime and Visual Studio 2022 17.3+ to build, and is the only 4.x release with native Arm64 support. If any target machine runs Windows 10 or older Windows Server, stop at `UpgradeToNetFramework48` instead. See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.8.x."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework481"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","net-framework","migration","net481"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework481"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework481"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework481.md"}
  moderneOnly
>

<RecipeHeader.Title>Retarget to .NET Framework 4.8.1</RecipeHeader.Title>

<RecipeHeader.Description>Retargets a .NET Framework project to 4.8.1, applying the full 4.0 -> 4.8 chain and then bumping to 4.8.1. Updates `<TargetFrameworkVersion>` to `v4.8.1`, `<TargetFramework>` to `net481`, the app.config `<supportedRuntime sku>`, and the web.config `targetFramework`. .NET Framework 4.8.1 introduced no application-compatibility (retargeting) changes, so this step is purely the version bump. **Compatibility caveat:** 4.8.1 requires Windows 11 (21H2+) or Windows Server 2022+ at runtime and Visual Studio 2022 17.3+ to build, and is the only 4.x release with native Arm64 support. If any target machine runs Windows 10 or older Windows Server, stop at `UpgradeToNetFramework48` instead. See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.8.x.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Retarget to .NET Framework 4.8","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework48/"},{"name":"Change .NET Framework version","href":""},{"name":"Change .NET target framework","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/changedotnettargetframework/"},{"name":"Change web.config target framework","href":""},{"name":"Ensure csproj attestation","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/ensurecsprojattestation/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework481","displayName":"Retarget to .NET Framework 4.8.1","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

