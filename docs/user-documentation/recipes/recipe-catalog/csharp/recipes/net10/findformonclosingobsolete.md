---
sidebar_label: "Find obsolete `Form.OnClosing`/`OnClosed` usage (WFDEV004)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find obsolete `Form.OnClosing`/`OnClosed` usage (WFDEV004)

**OpenRewrite.Recipes.Net10.FindFormOnClosingObsolete**

_Finds usage of `Form.OnClosing`, `Form.OnClosed`, and the `Closing`/`Closed` events. In .NET 10, these are obsolete (WFDEV004). Use `OnFormClosing`/`OnFormClosed` and `FormClosing`/`FormClosed` instead._

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
  recipeName="OpenRewrite.Recipes.Net10.FindFormOnClosingObsolete"
  displayName="Find obsolete `Form.OnClosing`/`OnClosed` usage (WFDEV004)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
