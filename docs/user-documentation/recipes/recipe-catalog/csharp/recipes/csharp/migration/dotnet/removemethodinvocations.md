---
sidebar_label: "Remove method invocations"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove method invocations

**OpenRewrite.Recipes.CSharp.Migration.Dotnet.RemoveMethodInvocations**

_Remove method invocations if syntactically safe._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | MethodPattern | A method pattern used to find matching method invocations to remove. | `Microsoft.AspNetCore.Builder.SwaggerBuilderExtensions UseSwagger(..)` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET Core 3.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/dotnet/net3_0/upgradetodotnet3_0)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.Migration.Dotnet.RemoveMethodInvocations"
  displayName="Remove method invocations"
  nugetPackage="OpenRewrite.Recipes.CSharp.Migration.Dotnet"
/>
