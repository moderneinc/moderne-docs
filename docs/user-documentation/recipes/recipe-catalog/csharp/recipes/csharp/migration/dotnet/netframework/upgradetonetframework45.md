---
title: "Retarget .NET Framework 4.0 to 4.5"
sidebar_label: "Retarget .NET Framework 4.0 to 4.5"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Retarget .NET Framework 4.0 to 4.5"}
  description={"Retargets a .NET Framework 4.0 project to 4.5. Updates `<TargetFrameworkVersion>` to `v4.5` (legacy csproj), `<TargetFramework>` to `net45` (SDK-style csproj), the `<supportedRuntime sku>` in app.config, and the `targetFramework` attribute in web.config. Retargeting to 4.5 enables RFC 3987 `System.Uri` parsing (stricter normalization/validation), C# 5 per-iteration `foreach` variable scoping, and obsoletes `MachineKey.Encode`/`Decode` (use `MachineKey.Protect`/`Unprotect`) and the `System.Workflow.*` (WF 3.x) types (use `System.Activities.*`). See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.5.x."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework45"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","net-framework","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework45"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework45"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework45.md"}
  moderneOnly
>

<RecipeHeader.Title>Retarget .NET Framework 4.0 to 4.5</RecipeHeader.Title>

<RecipeHeader.Description>Retargets a .NET Framework 4.0 project to 4.5. Updates `<TargetFrameworkVersion>` to `v4.5` (legacy csproj), `<TargetFramework>` to `net45` (SDK-style csproj), the `<supportedRuntime sku>` in app.config, and the `targetFramework` attribute in web.config. Retargeting to 4.5 enables RFC 3987 `System.Uri` parsing (stricter normalization/validation), C# 5 per-iteration `foreach` variable scoping, and obsoletes `MachineKey.Encode`/`Decode` (use `MachineKey.Protect`/`Unprotect`) and the `System.Workflow.*` (WF 3.x) types (use `System.Activities.*`). See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.5.x.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change .NET Framework version","href":""},{"name":"Change .NET target framework","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/changedotnettargetframework/"},{"name":"Change web.config target framework","href":""},{"name":"Ensure csproj attestation","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/ensurecsprojattestation/"},{"name":"Find obsolete `MachineKey.Encode`/`Decode`","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findobsoletemachinekeyencryption/"},{"name":"Find obsolete `System.Workflow.*` (WF 3.x) usage","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findobsoleteworkflowtypes/"},{"name":"Find obsolete 5-argument `EncoderParameter` constructor","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findobsoleteencoderparameterctor/"},{"name":"Find `System.Uri` construction (RFC 3986/3987 parsing change)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/finduriparsingchange/"},{"name":"Find `List<T>.ForEach` modification-during-enumeration change","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/findlistforeachduringmutation/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework45","displayName":"Retarget .NET Framework 4.0 to 4.5","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

