---
sidebar_label: "Find `BinaryReader.ReadString` behavior change"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `BinaryReader.ReadString` behavior change

**OpenRewrite.Recipes.Net9.FindBinaryReaderReadString**

_Finds calls to `BinaryReader.ReadString()` which now returns the Unicode replacement character (\uFFFD) for malformed UTF-8 byte sequences in .NET 9, instead of the previous behavior. Verify your code handles the replacement character correctly._

### Tags

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
  recipeName="OpenRewrite.Recipes.Net9.FindBinaryReaderReadString"
  displayName="Find `BinaryReader.ReadString` behavior change"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
