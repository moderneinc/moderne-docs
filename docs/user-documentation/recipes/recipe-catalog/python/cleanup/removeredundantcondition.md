---
sidebar_label: "Remove redundant ternary condition"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove redundant ternary condition

**org.openrewrite.python.cleanup.RemoveRedundantCondition**

_When both branches of a ternary expression are identical, simplify `y if z else y` to `y`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveRedundantCondition"
  displayName="Remove redundant ternary condition"
  pipPackage="openrewrite-static-analysis"
/>
