---
sidebar_label: "Rename `orient` parameter to `orientation` in `HtmlElement.InsertAdjacentElement`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename `orient` parameter to `orientation` in `HtmlElement.InsertAdjacentElement`

**OpenRewrite.Recipes.Net10.InsertAdjacentElementOrientParameterRename**

_The `orient` parameter of `HtmlElement.InsertAdjacentElement` was renamed to `orientation` in .NET 10. This recipe updates named arguments in method calls to use the new parameter name._

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
  recipeName="OpenRewrite.Recipes.Net10.InsertAdjacentElementOrientParameterRename"
  displayName="Rename `orient` parameter to `orientation` in `HtmlElement.InsertAdjacentElement`"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
