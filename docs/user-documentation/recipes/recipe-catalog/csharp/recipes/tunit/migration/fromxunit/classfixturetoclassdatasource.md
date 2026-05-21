---
sidebar_label: "Find `IClassFixture&lt;T&gt;` needing TUnit migration"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `IClassFixture&lt;T&gt;` needing TUnit migration

**OpenRewrite.Recipes.TUnit.Migration.FromXUnit.ClassFixtureToClassDataSource**

_Find classes implementing `IClassFixture<T>` that should use `[ClassDataSource<T>]` for TUnit._

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
  recipeName="OpenRewrite.Recipes.TUnit.Migration.FromXUnit.ClassFixtureToClassDataSource"
  displayName="Find `IClassFixture&lt;T&gt;` needing TUnit migration"
  nugetPackage="OpenRewrite.TUnit"
/>
