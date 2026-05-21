---
sidebar_label: "Remove NuGet package reference"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove NuGet package reference

**OpenRewrite.CSharp.Recipes.RemoveNuGetPackageReference**

_Removes a `<PackageReference>` element from .csproj files._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | PackageName | The NuGet package name to remove. Supports glob patterns. | `Newtonsoft.Json` |


## Usage

<RunRecipe
  recipeName="OpenRewrite.CSharp.Recipes.RemoveNuGetPackageReference"
  displayName="Remove NuGet package reference"
  nugetPackage="OpenRewrite.CodeQuality"
/>
