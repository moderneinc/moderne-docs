---
sidebar_label: "Find obsolete `Clipboard.GetData` calls (WFDEV005)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find obsolete `Clipboard.GetData` calls (WFDEV005)

**OpenRewrite.Recipes.Net10.FindClipboardGetData**

_Finds calls to `Clipboard.GetData(string)`. In .NET 10, this method is obsolete (WFDEV005). Use `Clipboard.TryGetData` methods instead._

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
  recipeName="OpenRewrite.Recipes.Net10.FindClipboardGetData"
  displayName="Find obsolete `Clipboard.GetData` calls (WFDEV005)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
