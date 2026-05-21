---
sidebar_label: "Find Newtonsoft.Json usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find Newtonsoft.Json usage

**OpenRewrite.Recipes.Net3\_0.FindNewtonsoftJson**

_Finds usages of Newtonsoft.Json types (`JObject`, `JArray`, `JToken`, `JsonConvert`) that should be migrated to `System.Text.Json` or explicitly preserved via `Microsoft.AspNetCore.Mvc.NewtonsoftJson` in ASP.NET Core 3.0+._

### Tags

* [serialization](/user-documentation/recipes/lists/recipes-by-tag#serialization)
* [net3.0](/user-documentation/recipes/lists/recipes-by-tag#net30)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET Core 3.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net3_0/upgradetodotnet3_0)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net3_0.FindNewtonsoftJson"
  displayName="Find Newtonsoft.Json usage"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
