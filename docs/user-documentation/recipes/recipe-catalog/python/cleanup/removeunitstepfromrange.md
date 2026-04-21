---
sidebar_label: "Drop unnecessary step `1` argument from `range()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Drop unnecessary step `1` argument from `range()`

**org.openrewrite.python.cleanup.RemoveUnitStepFromRange**

_Shorten `range(a, b, 1)` to `range(a, b)` because `range` already defaults to a step of one._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveUnitStepFromRange"
  displayName="Drop unnecessary step `1` argument from `range()`"
  pipPackage="openrewrite-static-analysis"
/>
