---
title: "Convert `packages.config` to `&lt;PackageReference&gt;`"
sidebar_label: "Convert `packages.config` to `&lt;PackageReference&gt;`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Convert `packages.config` to `<PackageReference>`"}
  description={"Moves NuGet dependencies from `packages.config` into `<PackageReference>` items in the sibling project file, classifying top-level vs. transitive packages and reconstructing `IncludeAssets`/`ExcludeAssets`/`PrivateAssets` from the resolved dependency graph. Removes packaged `<Reference>`/`<Import>`/`<Analyzer>` wiring, the `EnsureNuGetPackageBuildImports` target and `NuGetPackageImportStamp` property, rewrites remaining `packages/` folder paths to `$(PkgXxx)` properties, deletes `packages.config`, and flags package behaviors that PackageReference does not support (`install.ps1`, XDT config transforms, legacy `content/` assets) for manual follow-up."}
  fqName={"OpenRewrite.CSharp.Recipes.ConvertPackagesConfigToPackageReference"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["csharp","dotnet","packages-config","csproj","nuget"]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.CSharp.Recipes.ConvertPackagesConfigToPackageReference"}
  artifact={"OpenRewrite.Recipes.CSharp.Core"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.CSharp.Recipes.ConvertPackagesConfigToPackageReference"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/convertpackagesconfigtopackagereference.md"}
  moderneOnly
>

<RecipeHeader.Title>Convert `packages.config` to `<PackageReference>`</RecipeHeader.Title>

<RecipeHeader.Description>Moves NuGet dependencies from `packages.config` into `<PackageReference>` items in the sibling project file, classifying top-level vs. transitive packages and reconstructing `IncludeAssets`/`ExcludeAssets`/`PrivateAssets` from the resolved dependency graph. Removes packaged `<Reference>`/`<Import>`/`<Analyzer>` wiring, the `EnsureNuGetPackageBuildImports` target and `NuGetPackageImportStamp` property, rewrites remaining `packages/` folder paths to `$(PkgXxx)` properties, deletes `packages.config`, and flags package behaviors that PackageReference does not support (`install.ps1`, XDT config transforms, legacy `content/` assets) for manual follow-up.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"Boolean","name":"TrimTransitive","required":false,"description":"Drop packages.config entries that are transitive dependencies of other entries instead of keeping them as explicit top-level pins. The restored package versions may drift over time as ranges re-resolve. Defaults to `false`."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"OpenRewrite.CSharp.Recipes.ConvertPackagesConfigToPackageReference","displayName":"Convert `packages.config` to `<PackageReference>`","nugetPackage":"OpenRewrite.Recipes.CSharp.Core"}}>

## Usage

</UsageList>

