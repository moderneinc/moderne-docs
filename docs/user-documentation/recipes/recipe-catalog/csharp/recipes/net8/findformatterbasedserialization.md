---
sidebar_label: "Find formatter-based serialization types (SYSLIB0050/0051)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find formatter-based serialization types (SYSLIB0050/0051)

**OpenRewrite.Recipes.Net8.FindFormatterBasedSerialization**

_Finds usage of formatter-based serialization types (`FormatterConverter`, `IFormatter`, `ObjectIDGenerator`, `ObjectManager`, `SurrogateSelector`, `SerializationInfo`, `StreamingContext`). These are obsolete in .NET 8 (SYSLIB0050/0051)._

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
  recipeName="OpenRewrite.Recipes.Net8.FindFormatterBasedSerialization"
  displayName="Find formatter-based serialization types (SYSLIB0050/0051)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
