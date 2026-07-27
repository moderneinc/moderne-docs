---
title: "Retarget .NET Framework 4.5.1 to 4.5.2"
sidebar_label: "Retarget .NET Framework 4.5.1 to 4.5.2"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Retarget .NET Framework 4.5.1 to 4.5.2"}
  description={"Retargets a .NET Framework 4.5.1 project to 4.5.2. Updates `<TargetFrameworkVersion>` to `v4.5.2`, `<TargetFramework>` to `net452`, the app.config `<supportedRuntime sku>`, and the web.config `targetFramework`. Includes all earlier steps (4.0 -> 4.5.1). Notable retargeting changes at 4.5.2: `DataObject.GetData` retrieves HTML-format data as UTF-8 (remove any manual UTF-8 workaround); VB.NET partially-qualified `System.Windows.*` names are no longer resolved (fully qualify them). No AppContext compatibility switches exist before 4.6. See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.5.x."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework452"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","net-framework","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework452"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework452"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework452.md"}
  moderneOnly
>

<RecipeHeader.Title>Retarget .NET Framework 4.5.1 to 4.5.2</RecipeHeader.Title>

<RecipeHeader.Description>Retargets a .NET Framework 4.5.1 project to 4.5.2. Updates `<TargetFrameworkVersion>` to `v4.5.2`, `<TargetFramework>` to `net452`, the app.config `<supportedRuntime sku>`, and the web.config `targetFramework`. Includes all earlier steps (4.0 -> 4.5.1). Notable retargeting changes at 4.5.2: `DataObject.GetData` retrieves HTML-format data as UTF-8 (remove any manual UTF-8 workaround); VB.NET partially-qualified `System.Windows.*` names are no longer resolved (fully qualify them). No AppContext compatibility switches exist before 4.6. See https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/retargeting/4.5.x.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Retarget .NET Framework 4.5 to 4.5.1","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/upgradetonetframework451/"},{"name":"Change .NET Framework version","href":""},{"name":"Change .NET target framework","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/changedotnettargetframework/"},{"name":"Change web.config target framework","href":""},{"name":"Ensure csproj attestation","href":"/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/ensurecsprojattestation/"},{"name":"Find `DataObject` usage (HTML clipboard now UTF-8)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework/finddataobjectgetdatahtml/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework.UpgradeToNetFramework452","displayName":"Retarget .NET Framework 4.5.1 to 4.5.2","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

