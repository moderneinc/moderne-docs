---
sidebar_label: "Find Code Access Security usage (obsolete in .NET 5)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find Code Access Security usage (obsolete in .NET 5)

**OpenRewrite.Recipes.Net5.FindCodeAccessSecurity**

_Finds usages of Code Access Security types (`SecurityPermission`, `PermissionSet`, etc.) which are obsolete in .NET 5+._

### Tags

* [search](/user-documentation/recipes/lists/recipes-by-tag#search)
* [security](/user-documentation/recipes/lists/recipes-by-tag#security)
* [dotnet](/user-documentation/recipes/lists/recipes-by-tag#dotnet)
* [net5](/user-documentation/recipes/lists/recipes-by-tag#net5)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to .NET 5](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/net5/upgradetodotnet5)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.Net5.FindCodeAccessSecurity"
  displayName="Find Code Access Security usage (obsolete in .NET 5)"
  nugetPackage="OpenRewrite.MigrateDotNet"
/>
