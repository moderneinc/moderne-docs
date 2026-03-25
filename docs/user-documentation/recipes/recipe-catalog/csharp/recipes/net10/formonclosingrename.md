---
sidebar_label: "Rename `Form.OnClosing/OnClosed` to `OnFormClosing/OnFormClosed` (WFDEV004)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename `Form.OnClosing/OnClosed` to `OnFormClosing/OnFormClosed` (WFDEV004)

**OpenRewrite.Recipes.Net10.FormOnClosingRename**

_Renames `Form.OnClosing` to `OnFormClosing` and `Form.OnClosed` to `OnFormClosed` for .NET 10 compatibility. Parameter type changes (`CancelEventArgs` → `FormClosingEventArgs`, `EventArgs` → `FormClosedEventArgs`) must be updated manually._

### Tags

* [net10](/user-documentation/recipes/lists/recipes-by-tag#net10)
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
  recipeName="OpenRewrite.Recipes.Net10.FormOnClosingRename"
  displayName="Rename `Form.OnClosing/OnClosed` to `OnFormClosing/OnFormClosed` (WFDEV004)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
