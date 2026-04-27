---
sidebar_label: "Upgrade NuGet package version"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade NuGet package version

**OpenRewrite.CSharp.Recipes.UpgradeNuGetPackageVersion**

_Upgrades the version of a NuGet `<PackageReference>` or `<PackageVersion>` in .csproj and Directory.Packages.props files. Handles property references by updating the property value instead of the version attribute. Uses NuGet.Versioning for correct version semantics._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | PackageName | The NuGet package name to upgrade. Supports glob patterns. | `Newtonsoft.Json` |
| `String` | NewVersion | An exact version number, or a NuGet version range (e.g. '[14.0,)' for >= 14.0). Use 'latest' to upgrade to the latest available version from NuGet sources. | `14.0.0` |
| `Boolean` | IncludePrerelease | *Optional*. Whether to include prerelease versions when resolving 'latest' or ranges. |  |


## Usage

<RunRecipe
  recipeName="OpenRewrite.CSharp.Recipes.UpgradeNuGetPackageVersion"
  displayName="Upgrade NuGet package version"
  nugetPackage="OpenRewrite.CodeQuality"
/>
