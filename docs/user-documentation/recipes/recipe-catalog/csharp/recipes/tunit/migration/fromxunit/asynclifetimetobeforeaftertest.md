---
sidebar_label: "Find `IAsyncLifetime` needing TUnit migration"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `IAsyncLifetime` needing TUnit migration

**OpenRewrite.Recipes.TUnit.Migration.FromXUnit.AsyncLifetimeToBeforeAfterTest**

_Find classes implementing `IAsyncLifetime` that should use `[Before(Test)]` and `[After(Test)]` for TUnit._

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
  recipeName="OpenRewrite.Recipes.TUnit.Migration.FromXUnit.AsyncLifetimeToBeforeAfterTest"
  displayName="Find `IAsyncLifetime` needing TUnit migration"
  nugetPackage="OpenRewrite.TUnit"
/>
