---
sidebar_label: "Use Guid.CreateVersion7()"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use Guid.CreateVersion7()

**OpenRewrite.Recipes.Net9.UseGuidCreateVersion7**

_Replace `Guid.NewGuid()` with `Guid.CreateVersion7()`. Version 7 GUIDs are time-ordered and better for database primary keys, indexing, and sorting. Available since .NET 9._

### Tags

* [modernization](/user-documentation/recipes/lists/recipes-by-tag#modernization)
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
  recipeName="OpenRewrite.Recipes.Net9.UseGuidCreateVersion7"
  displayName="Use Guid.CreateVersion7()"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
