---
sidebar_label: "Find legacy serialization constructors (SYSLIB0051)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find legacy serialization constructors (SYSLIB0051)

**OpenRewrite.Recipes.Net8.FindSerializationConstructors**

_Finds legacy serialization constructors `.ctor(SerializationInfo, StreamingContext)` which are obsolete in .NET 8 (SYSLIB0051). The `ISerializable` pattern is no longer recommended._

### Tags

* [serialization](/user-documentation/recipes/lists/recipes-by-tag#serialization)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [net8](/user-documentation/recipes/lists/recipes-by-tag#net8)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net8/upgradetodotnet8)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net8.FindSerializationConstructors"
  displayName="Find legacy serialization constructors (SYSLIB0051)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
