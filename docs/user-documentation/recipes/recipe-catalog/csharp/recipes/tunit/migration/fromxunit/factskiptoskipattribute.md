---
sidebar_label: "Extract `Skip` into `[Skip]` attribute"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Extract `Skip` into `[Skip]` attribute

**OpenRewrite.Recipes.TUnit.Migration.FromXUnit.FactSkipToSkipAttribute**

_Extract the `Skip` argument from `[Fact(Skip = "...")]` or `[Theory(Skip = "...")]` into a separate TUnit `[Skip("...")]` attribute._

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
  recipeName="OpenRewrite.Recipes.TUnit.Migration.FromXUnit.FactSkipToSkipAttribute"
  displayName="Extract `Skip` into `[Skip]` attribute"
  nugetPackage="OpenRewrite.TUnit"
/>
