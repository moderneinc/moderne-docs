---
sidebar_label: "Change xUnit using directives to TUnit"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Change xUnit using directives to TUnit

**OpenRewrite.Recipes.TUnit.Migration.FromXUnit.ChangeXUnitUsings**

_Replace `using Xunit;` with `using TUnit.Core;` and `using TUnit.Assertions;`, and remove `using Xunit.Abstractions;` and `using Xunit.Sdk;`._

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
  recipeName="OpenRewrite.Recipes.TUnit.Migration.FromXUnit.ChangeXUnitUsings"
  displayName="Change xUnit using directives to TUnit"
  nugetPackage="OpenRewrite.TUnit"
/>
