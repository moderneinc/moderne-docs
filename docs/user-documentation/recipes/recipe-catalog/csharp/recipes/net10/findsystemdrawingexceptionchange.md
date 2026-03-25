---
sidebar_label: "Find `catch (OutOfMemoryException)` that may need `ExternalException`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `catch (OutOfMemoryException)` that may need `ExternalException`

**OpenRewrite.Recipes.Net10.FindSystemDrawingExceptionChange**

_In .NET 10, System.Drawing GDI+ errors now throw `ExternalException` instead of `OutOfMemoryException`. This recipe finds catch blocks that catch `OutOfMemoryException` which may need to also catch `ExternalException`._

### Tags

* [net10](/user-documentation/recipes/lists/recipes-by-tag#net10)
* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [winforms](/user-documentation/recipes/lists/recipes-by-tag#winforms)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net10/upgradetodotnet10)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net10.FindSystemDrawingExceptionChange"
  displayName="Find `catch (OutOfMemoryException)` that may need `ExternalException`"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
