---
sidebar_label: "Change .NET target framework"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Change .NET target framework

**OpenRewrite.CSharp.Recipes.ChangeDotNetTargetFramework**

_Changes the `<TargetFramework>` or `<TargetFrameworks>` value in .csproj files. For multi-TFM projects, replaces the matching framework within the semicolon-delimited list._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | OldTargetFramework | The target framework moniker to replace (e.g., net8.0). | `net8.0` |
| `String` | NewTargetFramework | The target framework moniker to use instead (e.g., net9.0). | `net9.0` |


## Usage

<RunRecipe
  recipeName="OpenRewrite.CSharp.Recipes.ChangeDotNetTargetFramework"
  displayName="Change .NET target framework"
  nugetPackage="OpenRewrite.CodeQuality"
/>
