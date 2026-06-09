---
title: "Add `async Task` to methods containing `await`"
sidebar_label: "Add `async Task` to methods containing `await`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add `async Task` to methods containing `await`

**OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.AddAsyncToTestMethods**

_Find methods that contain `await` expressions but return `void`, and change their signature to `async Task`._

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
  recipeName="OpenRewrite.Recipes.CSharp.Migration.TUnit.FromXUnit.AddAsyncToTestMethods"
  displayName="Add `async Task` to methods containing `await`"
  nugetPackage="OpenRewrite.Recipes.CSharp.Migration.TUnit"
/>
