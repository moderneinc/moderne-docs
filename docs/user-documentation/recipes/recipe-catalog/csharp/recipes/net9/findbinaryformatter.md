---
sidebar_label: "Find `BinaryFormatter` usage (removed in .NET 9)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `BinaryFormatter` usage (removed in .NET 9)

**OpenRewrite.Recipes.Net9.FindBinaryFormatter**

_Finds usages of `BinaryFormatter` which always throws `NotSupportedException` in .NET 9. Migrate to a different serializer such as `System.Text.Json`, `XmlSerializer`, or `DataContractSerializer`._

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
  recipeName="OpenRewrite.Recipes.Net9.FindBinaryFormatter"
  displayName="Find `BinaryFormatter` usage (removed in .NET 9)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
