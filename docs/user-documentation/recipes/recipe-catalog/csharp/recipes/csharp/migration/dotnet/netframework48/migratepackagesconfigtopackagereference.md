---
title: "Migrate `packages.config` to `&lt;PackageReference&gt;` (net48)"
sidebar_label: "Migrate `packages.config` to `&lt;PackageReference&gt;` (net48)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate `packages.config` to `&lt;PackageReference&gt;` (net48)

**OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.MigratePackagesConfigToPackageReference**

_Moves NuGet package entries from `packages.config` into `<PackageReference>` items in the sibling `.csproj`, drops facade packages provided transitively by `Microsoft.NETFramework.ReferenceAssemblies.Net48`, adds that reference-assemblies package, and removes the now-empty `packages.config`. Scoped to .NET Framework 4.8 projects._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [packages-config](/user-documentation/recipes/lists/recipes-by-tag#packages)
* [csproj](/user-documentation/recipes/lists/recipes-by-tag#csproj)
* [net48](/user-documentation/recipes/lists/recipes-by-tag#net48)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | ReferenceAssembliesVersion | *Optional*. Version of the `Microsoft.NETFramework.ReferenceAssemblies.Net48` package to add. Defaults to 1.0.3. | `1.0.3` |


## Used by

This recipe is used as part of the following composite recipes:

* [Modernize .NET Framework 4.8 project (SDK + PackageReference)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework48/upgradetonetframework48sdk)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.MigratePackagesConfigToPackageReference"
  displayName="Migrate `packages.config` to `&lt;PackageReference&gt;` (net48)"
  nugetPackage="OpenRewrite.Recipes.CSharp.Migration.Dotnet"
/>
