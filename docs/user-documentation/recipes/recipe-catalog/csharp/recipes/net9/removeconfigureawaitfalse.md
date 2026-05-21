---
sidebar_label: "Remove ConfigureAwait(false)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove ConfigureAwait(false)

**OpenRewrite.Recipes.Net9.RemoveConfigureAwaitFalse**

_Remove `.ConfigureAwait(false)` calls that are unnecessary in ASP.NET Core and modern .NET applications (no SynchronizationContext). Do not apply to library code targeting .NET Framework._

### Tags

* [modernization](/user-documentation/recipes/lists/recipes-by-tag#modernization)
* [async](/user-documentation/recipes/lists/recipes-by-tag#async)
* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net9.RemoveConfigureAwaitFalse"
  displayName="Remove ConfigureAwait(false)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
