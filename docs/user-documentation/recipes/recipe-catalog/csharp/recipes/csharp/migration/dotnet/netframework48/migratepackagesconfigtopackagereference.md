---
title: "Migrate `packages.config` to `&lt;PackageReference&gt;` (net48)"
sidebar_label: "Migrate `packages.config` to `&lt;PackageReference&gt;` (net48)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `packages.config` to `<PackageReference>` (net48)"}
  description={"Moves NuGet package entries from `packages.config` into `<PackageReference>` items in the sibling `.csproj`, drops facade packages provided transitively by `Microsoft.NETFramework.ReferenceAssemblies.Net48`, adds that reference-assemblies package, and removes the now-empty `packages.config`. Scoped to .NET Framework 4.8 projects."}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.MigratePackagesConfigToPackageReference"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","packages-config","csproj","net48"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.MigratePackagesConfigToPackageReference"}
  artifact={"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.MigratePackagesConfigToPackageReference"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework48/migratepackagesconfigtopackagereference.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `packages.config` to `<PackageReference>` (net48)</RecipeHeader.Title>

<RecipeHeader.Description>Moves NuGet package entries from `packages.config` into `<PackageReference>` items in the sibling `.csproj`, drops facade packages provided transitively by `Microsoft.NETFramework.ReferenceAssemblies.Net48`, adds that reference-assemblies package, and removes the now-empty `packages.config`. Scoped to .NET Framework 4.8 projects.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"ReferenceAssembliesVersion","required":false,"description":"Version of the `Microsoft.NETFramework.ReferenceAssemblies.Net48` package to add. Defaults to 1.0.3.","example":"1.0.3"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.MigratePackagesConfigToPackageReference","displayName":"Migrate `packages.config` to `<PackageReference>` (net48)","nugetPackage":"OpenRewrite.Recipes.CSharp.Migration.Dotnet"}}>

## Usage

</UsageList>

