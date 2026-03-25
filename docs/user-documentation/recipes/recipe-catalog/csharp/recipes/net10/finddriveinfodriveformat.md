---
sidebar_label: "Find `DriveInfo.DriveFormat` behavior change"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `DriveInfo.DriveFormat` behavior change

**OpenRewrite.Recipes.Net10.FindDriveInfoDriveFormat**

_Finds usages of `DriveInfo.DriveFormat` which returns Linux kernel filesystem type strings instead of mapped names in .NET 10. Verify that comparisons match the new format._

### Tags

* [net10](/user-documentation/recipes/lists/recipes-by-tag#net10)
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
  recipeName="OpenRewrite.Recipes.Net10.FindDriveInfoDriveFormat"
  displayName="Find `DriveInfo.DriveFormat` behavior change"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
