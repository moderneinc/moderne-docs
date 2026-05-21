---
sidebar_label: "Find obsolete Windows Forms APIs (WFDEV004/005/006)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find obsolete Windows Forms APIs (WFDEV004/005/006)

**OpenRewrite.Recipes.Net10.FindWinFormsObsoleteApis**

_Finds usages of Windows Forms APIs that are obsolete in .NET 10, including `Form.OnClosing/OnClosed` (WFDEV004), `Clipboard.GetData` (WFDEV005), and legacy controls like `ContextMenu`, `DataGrid`, `MainMenu` (WFDEV006)._

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
  recipeName="OpenRewrite.Recipes.Net10.FindWinFormsObsoleteApis"
  displayName="Find obsolete Windows Forms APIs (WFDEV004/005/006)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
