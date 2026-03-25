---
sidebar_label: "Extract `Timeout` into `[Timeout]` attribute"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Extract `Timeout` into `[Timeout]` attribute

**OpenRewrite.Recipes.TUnit.Migration.FromXUnit.FactTimeoutToTimeoutAttribute**

_Extract the `Timeout` argument from `[Fact(Timeout = ...)]` or `[Theory(Timeout = ...)]` into a separate TUnit `[Timeout(...)]` attribute._

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

* [Migrate xUnit attributes to TUnit](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/csharp/recipes/tunit/migration/fromxunit/migratefromxunitattributes)


## Usage

<RunRecipe
  recipeName="OpenRewrite.Recipes.TUnit.Migration.FromXUnit.FactTimeoutToTimeoutAttribute"
  displayName="Extract `Timeout` into `[Timeout]` attribute"
  nugetPackage="OpenRewrite.TUnit"
/>
