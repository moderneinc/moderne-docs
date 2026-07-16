---
title: "Modernize .NET Framework 4.8 project (SDK + PackageReference)"
sidebar_label: "Modernize .NET Framework 4.8 project (SDK + PackageReference)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Modernize .NET Framework 4.8 project (SDK + PackageReference)"}
  description={"Migrates a classic .NET Framework 4.8 csproj that uses `packages.config` to SDK-style with `<PackageReference>` entries. Combines `MigratePackagesConfigToPackageReference` and `ConvertClassicCsprojToSdk` so the resulting project builds with `dotnet build` on non-Windows machines via the `Microsoft.NETFramework.ReferenceAssemblies.Net48` targeting pack."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.UpgradeToNetFramework48Sdk"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","csproj","migration","net48"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.UpgradeToNetFramework48Sdk"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.UpgradeToNetFramework48Sdk"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework48/upgradetonetframework48sdk.md"}
  moderneOnly
>

<RecipeHeader.Title>Modernize .NET Framework 4.8 project (SDK + PackageReference)</RecipeHeader.Title>

<RecipeHeader.Description>Migrates a classic .NET Framework 4.8 csproj that uses `packages.config` to SDK-style with `<PackageReference>` entries. Combines `MigratePackagesConfigToPackageReference` and `ConvertClassicCsprojToSdk` so the resulting project builds with `dotnet build` on non-Windows machines via the `Microsoft.NETFramework.ReferenceAssemblies.Net48` targeting pack.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate `packages.config` to `<PackageReference>` (net48)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework48/migratepackagesconfigtopackagereference/"},{"name":"Convert classic csproj to SDK-style (net48)","href":"/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework48/convertclassiccsprojtosdk/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.UpgradeToNetFramework48Sdk","displayName":"Modernize .NET Framework 4.8 project (SDK + PackageReference)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

