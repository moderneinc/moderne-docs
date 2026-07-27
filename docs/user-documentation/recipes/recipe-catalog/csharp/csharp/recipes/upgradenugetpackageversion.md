---
title: "Upgrade NuGet package version"
sidebar_label: "Upgrade NuGet package version"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade NuGet package version"}
  description={"Upgrades the version of a NuGet `<PackageReference>` or `<PackageVersion>` in .csproj and Directory.Packages.props files. Handles property references by updating the property value instead of the version attribute. Uses NuGet.Versioning for correct version semantics."}
  fqName={"OpenRewrite.CSharp.Recipes.UpgradeNuGetPackageVersion"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"OpenRewrite.CSharp.Recipes.UpgradeNuGetPackageVersion"}
  artifact={"OpenRewrite.Recipes.CSharp.Core"}
  appLink={"https://app.moderne.io/recipes/OpenRewrite.CSharp.Recipes.UpgradeNuGetPackageVersion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/csharp/csharp/recipes/upgradenugetpackageversion.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade NuGet package version</RecipeHeader.Title>

<RecipeHeader.Description>Upgrades the version of a NuGet `<PackageReference>` or `<PackageVersion>` in .csproj and Directory.Packages.props files. Handles property references by updating the property value instead of the version attribute. Uses NuGet.Versioning for correct version semantics.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"PackageName","required":true,"description":"The NuGet package name to upgrade. Supports glob patterns.","example":"Newtonsoft.Json"},{"type":"String","name":"NewVersion","required":true,"description":"An exact version number, or a NuGet version range (e.g. '[14.0,)' for >= 14.0). Use 'latest' to upgrade to the latest available version from NuGet sources.","example":"14.0.0"},{"type":"Boolean","name":"IncludePrerelease","required":false,"description":"Whether to include prerelease versions when resolving 'latest' or ranges."},{"type":"Boolean","name":"RegenerateMarker","required":false,"description":"Whether to re-run `dotnet restore` after the edit to refresh the project's MSBuildProject marker. Defaults to `true`. Composite recipes that chain multiple csproj-mutating steps may set this to `false` on intermediate steps and finalize once with `EnsureCsprojAttestation`."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"OpenRewrite.CSharp.Recipes.UpgradeNuGetPackageVersion","displayName":"Upgrade NuGet package version","nugetPackage":"OpenRewrite.Recipes.CSharp.Core"}}>

## Usage

</UsageList>

