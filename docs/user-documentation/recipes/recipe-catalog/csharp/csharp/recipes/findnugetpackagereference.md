---
sidebar_label: "Find NuGet package reference"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find NuGet package reference

**OpenRewrite.CSharp.Recipes.FindNuGetPackageReference**

_Searches for .csproj files that reference a specific NuGet package. Intended for use as a precondition to scope other recipes._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | PackageName | The NuGet package name to search for. Supports glob patterns. | `Swashbuckle.AspNetCore` |


## Usage

<RunRecipe
  recipeName="OpenRewrite.CSharp.Recipes.FindNuGetPackageReference"
  displayName="Find NuGet package reference"
  nugetPackage="OpenRewrite.CodeQuality"
/>
