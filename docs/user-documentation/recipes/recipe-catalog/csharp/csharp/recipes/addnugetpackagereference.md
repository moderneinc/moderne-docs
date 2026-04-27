---
sidebar_label: "Add NuGet package reference"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add NuGet package reference

**OpenRewrite.CSharp.Recipes.AddNuGetPackageReference**

_Adds a `<PackageReference>` element to .csproj files if not already present._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | PackageName | The NuGet package name to add. | `Newtonsoft.Json` |
| `String` | Version | *Optional*. The package version to add. If omitted, no Version attribute is set. | `13.0.3` |


## Usage

<RunRecipe
  recipeName="OpenRewrite.CSharp.Recipes.AddNuGetPackageReference"
  displayName="Add NuGet package reference"
  nugetPackage="OpenRewrite.CodeQuality"
/>
