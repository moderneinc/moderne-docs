---
sidebar_label: "Find `JsonSerializer.Deserialize` nullable `JsonDocument` change"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `JsonSerializer.Deserialize` nullable `JsonDocument` change

**OpenRewrite.Recipes.Net9.FindJsonDocumentNullable**

_Finds `JsonSerializer.Deserialize()` calls. In .NET 9, nullable `JsonDocument` properties now deserialize to a `JsonDocument` with `RootElement.ValueKind == JsonValueKind.Null` instead of being `null`._

### Tags

* [serialization](/user-documentation/recipes/lists/recipes-by-tag#serialization)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [net9](/user-documentation/recipes/lists/recipes-by-tag#net9)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net9.FindJsonDocumentNullable"
  displayName="Find `JsonSerializer.Deserialize` nullable `JsonDocument` change"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
