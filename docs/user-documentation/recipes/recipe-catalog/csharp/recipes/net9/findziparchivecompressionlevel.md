---
sidebar_label: "Find `ZipArchive.CreateEntry` with `CompressionLevel` (bit flag change)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `ZipArchive.CreateEntry` with `CompressionLevel` (bit flag change)

**OpenRewrite.Recipes.Net9.FindZipArchiveCompressionLevel**

_Finds `ZipArchive.CreateEntry()` and `ZipFileExtensions.CreateEntryFromFile()` calls with a `CompressionLevel` parameter. In .NET 9, the `CompressionLevel` value now sets general-purpose bit flags in the ZIP central directory header, which may affect interoperability._

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
  recipeName="OpenRewrite.Recipes.Net9.FindZipArchiveCompressionLevel"
  displayName="Find `ZipArchive.CreateEntry` with `CompressionLevel` (bit flag change)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
