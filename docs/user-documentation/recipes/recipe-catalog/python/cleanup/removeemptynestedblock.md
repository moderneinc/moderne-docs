---
sidebar_label: "Delete `if` blocks whose body is only `pass`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Delete `if` blocks whose body is only `pass`

**org.openrewrite.python.cleanup.RemoveEmptyNestedBlock**

_Delete `if` statements that contain nothing but `pass` and have no `else` branch. `for`/`while` loops are left alone because iterating may have side effects._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveEmptyNestedBlock"
  displayName="Delete `if` blocks whose body is only `pass`"
  pipPackage="openrewrite-static-analysis"
/>
