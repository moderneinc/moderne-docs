---
title: "Remove MSBuild property"
sidebar_label: "Remove MSBuild property"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove MSBuild property

**OpenRewrite.CSharp.Recipes.RemoveMSBuildProperty**

_Removes an MSBuild property element (e.g. `<RuntimeFrameworkVersion>`) from `<PropertyGroup>` in .csproj files._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | PropertyName | The MSBuild property element name to remove (case-sensitive). | `RuntimeFrameworkVersion` |
| `Boolean` | RegenerateMarker | *Optional*. Whether to re-run `dotnet restore` after the edit to refresh the project's MSBuildProject marker. Defaults to `true`. Composite recipes that chain multiple csproj-mutating steps may set this to `false` on intermediate steps and finalize once with `EnsureCsprojAttestation`. |  |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET Core 3.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net3_0/upgradetodotnet3_0)


## Usage

<RunRecipe
  recipeName="OpenRewrite.CSharp.Recipes.RemoveMSBuildProperty"
  displayName="Remove MSBuild property"
  nugetPackage="OpenRewrite.Recipes.CSharp.CodeQuality"
/>
