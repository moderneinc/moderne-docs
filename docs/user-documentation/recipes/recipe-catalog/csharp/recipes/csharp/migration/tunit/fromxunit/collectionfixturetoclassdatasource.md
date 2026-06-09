---
title: "Replace `ICollectionFixture&lt;T&gt;` with `[ClassDataSource&lt;T&gt;]`"
sidebar_label: "Replace `ICollectionFixture&lt;T&gt;` with `[ClassDataSource&lt;T&gt;]`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `ICollectionFixture&lt;T&gt;` with `[ClassDataSource&lt;T&gt;]`

**OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.CollectionFixtureToClassDataSource**

_Migrate xUnit collection fixtures to TUnit: remove `[CollectionDefinition]` and `ICollectionFixture<T>` from definition classes, add `[ClassDataSource<T>(Shared = SharedType.Keyed)]` to test classes, and convert constructor fixture injection to primary constructors._

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

* [Migrate xUnit attributes to TUnit](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/migratefromxunitattributes)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.CollectionFixtureToClassDataSource"
  displayName="Replace `ICollectionFixture&lt;T&gt;` with `[ClassDataSource&lt;T&gt;]`"
  nugetPackage="OpenRewrite.Recipes.CSharp.Migration.TUnit"
/>
