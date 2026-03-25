---
sidebar_label: "Replace `[Collection]` with `[NotInParallel]`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `[Collection]` with `[NotInParallel]`

**OpenRewrite.Recipes.TUnit.Migration.FromXUnit.CollectionToNotInParallel**

_Replace the xUnit `[Collection("name")]` attribute with the TUnit `[NotInParallel("name")]` attribute._

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
  recipeName="OpenRewrite.Recipes.TUnit.Migration.FromXUnit.CollectionToNotInParallel"
  displayName="Replace `[Collection]` with `[NotInParallel]`"
  nugetPackage="OpenRewrite.TUnit"
/>
