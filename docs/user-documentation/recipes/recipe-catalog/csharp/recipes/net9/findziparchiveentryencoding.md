---
sidebar_label: "Find `ZipArchiveEntry` name/comment UTF-8 encoding change"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `ZipArchiveEntry` name/comment UTF-8 encoding change

**OpenRewrite.Recipes.Net9.FindZipArchiveEntryEncoding**

_Finds access to `ZipArchiveEntry.Name`, `FullName`, or `Comment` properties. In .NET 9, these now respect the UTF-8 flag in ZIP entries, which may change decoded values._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [compression](/user-documentation/recipes/lists/recipes-by-tag#compression)
* [net9](/user-documentation/recipes/lists/recipes-by-tag#net9)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net9/upgradetodotnet9)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net9.FindZipArchiveEntryEncoding"
  displayName="Find `ZipArchiveEntry` name/comment UTF-8 encoding change"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
