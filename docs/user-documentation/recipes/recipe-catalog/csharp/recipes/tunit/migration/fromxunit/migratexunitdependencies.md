---
sidebar_label: "Migrate xUnit NuGet dependencies to TUnit"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate xUnit NuGet dependencies to TUnit

**OpenRewrite.Recipes.TUnit.Migration.FromXUnit.MigrateXUnitDependencies**

_Remove xUnit NuGet package references, add TUnit, and upgrade the target framework to at least .NET 9._

### Tags

* [tunit](/user-documentation/recipes/lists/recipes-by-tag#tunit)
* [csharp](/user-documentation/recipes/lists/recipes-by-tag#csharp)
* [testing](/user-documentation/recipes/lists/recipes-by-tag#testing)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [xunit](/user-documentation/recipes/lists/recipes-by-tag#xunit)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate from xUnit to TUnit](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/tunit/migration/fromxunit/migratefromxunit)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.TUnit.Migration.FromXUnit.MigrateXUnitDependencies"
  displayName="Migrate xUnit NuGet dependencies to TUnit"
  nugetPackage="OpenRewrite.TUnit"
/>
