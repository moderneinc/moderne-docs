---
title: "Find `ITestOutputHelper` needing TUnit migration"
sidebar_label: "Find `ITestOutputHelper` needing TUnit migration"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `ITestOutputHelper` needing TUnit migration

**OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.TestOutputHelperToTestContext**

_Find usages of xUnit's `ITestOutputHelper` that should be replaced with TUnit's `TestContext`._

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

* [Migrate from xUnit to TUnit](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/csharp/migration/tunit/fromxunit/migratefromxunit)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.TestOutputHelperToTestContext"
  displayName="Find `ITestOutputHelper` needing TUnit migration"
  nugetPackage="OpenRewrite.Recipes.CSharp.Migration.TUnit"
/>
