---
sidebar_label: "Drop unnecessary `0` start argument from `range()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Drop unnecessary `0` start argument from `range()`

**org.openrewrite.python.cleanup.RemoveZeroFromRange**

_Shorten `range(0, n)` to `range(n)` because `range` already defaults to starting at zero._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveZeroFromRange"
  displayName="Drop unnecessary `0` start argument from `range()`"
  pipPackage="openrewrite-static-analysis"
/>
