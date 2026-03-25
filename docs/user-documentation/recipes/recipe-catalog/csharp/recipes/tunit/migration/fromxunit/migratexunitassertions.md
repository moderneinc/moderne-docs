---
sidebar_label: "Migrate xUnit assertions to TUnit"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate xUnit assertions to TUnit

**OpenRewrite.Recipes.TUnit.Migration.FromXUnit.MigrateXUnitAssertions**

_Replace xUnit `Assert.*` calls with TUnit's fluent `await Assert.That(...).Is*()` assertions. Note: test methods may need to be changed to `async Task` separately._

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
  recipeName="OpenRewrite.Recipes.TUnit.Migration.FromXUnit.MigrateXUnitAssertions"
  displayName="Migrate xUnit assertions to TUnit"
  nugetPackage="OpenRewrite.TUnit"
/>
