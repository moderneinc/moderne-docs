---
sidebar_label: "Find `DistributedContextPropagator` default propagator change"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `DistributedContextPropagator` default propagator change

**OpenRewrite.Recipes.Net10.FindDistributedContextPropagator**

_Finds usages of `DistributedContextPropagator.Current` and `DistributedContextPropagator.CreateDefaultPropagator()` which now default to W3C format in .NET 10. The 'baggage' header is used instead of 'Correlation-Context'._

### Tags

* [net10](/user-documentation/recipes/lists/recipes-by-tag#net10)
* [diagnostics](/user-documentation/recipes/lists/recipes-by-tag#diagnostics)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net10/upgradetodotnet10)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net10.FindDistributedContextPropagator"
  displayName="Find `DistributedContextPropagator` default propagator change"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
