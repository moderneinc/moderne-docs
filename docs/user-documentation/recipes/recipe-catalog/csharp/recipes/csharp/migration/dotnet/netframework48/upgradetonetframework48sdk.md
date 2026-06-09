---
title: "Modernize .NET Framework 4.8 project (SDK + PackageReference)"
sidebar_label: "Modernize .NET Framework 4.8 project (SDK + PackageReference)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Modernize .NET Framework 4.8 project (SDK + PackageReference)

**OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.UpgradeToNetFramework48Sdk**

_Migrates a classic .NET Framework 4.8 csproj that uses `packages.config` to SDK-style with `<PackageReference>` entries. Combines `MigratePackagesConfigToPackageReference` and `ConvertClassicCsprojToSdk` so the resulting project builds with `dotnet build` on non-Windows machines via the `Microsoft.NETFramework.ReferenceAssemblies.Net48` targeting pack._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [csproj](/user-documentation/recipes/lists/recipes-by-tag#csproj)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [net48](/user-documentation/recipes/lists/recipes-by-tag#net48)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.UpgradeToNetFramework48Sdk"
  displayName="Modernize .NET Framework 4.8 project (SDK + PackageReference)"
  nugetPackage="OpenRewrite.Recipes.CSharp.Migration.Dotnet"
/>
