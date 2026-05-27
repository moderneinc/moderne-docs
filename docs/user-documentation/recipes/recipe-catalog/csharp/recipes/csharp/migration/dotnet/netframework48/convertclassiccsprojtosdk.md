---
sidebar_label: "Convert classic csproj to SDK-style (net48)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Convert classic csproj to SDK-style (net48)

**OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.ConvertClassicCsprojToSdk**

_Rewrites a non-SDK .NET Framework 4.8 .csproj into SDK-style form: sets `Sdk="Microsoft.NET.Sdk"`, removes the legacy MSBuild boilerplate (`<Import>`s, default `<Compile>` items, configuration-conditional `<PropertyGroup>` blocks, SDK-managed properties), and replaces `<TargetFrameworkVersion>v4.8</TargetFrameworkVersion>` with `<TargetFramework>net48</TargetFramework>`._

### Tags

* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [csproj](/user-documentation/recipes/lists/recipes-by-tag#csproj)
* [net48](/user-documentation/recipes/lists/recipes-by-tag#net48)
* [sdk-style](/user-documentation/recipes/lists/recipes-by-tag#sdk)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | SystemWebSdkVersion | *Optional*. Version of the `MSBuild.SDK.SystemWeb` SDK to pin in the `Sdk` attribute of ASP.NET web projects. Defaults to a recent stable release. | `4.0.110` |


## Used by

This recipe is used as part of the following composite recipes:

* [Modernize .NET Framework 4.8 project (SDK + PackageReference)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/netframework48/upgradetonetframework48sdk)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.Migration.Dotnet.NetFramework48.ConvertClassicCsprojToSdk"
  displayName="Convert classic csproj to SDK-style (net48)"
  nugetPackage="OpenRewrite.Recipes.CSharp.Migration.Dotnet"
/>
