---
sidebar_label: "Collapse for-yield loop into `yield from`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Collapse for-yield loop into `yield from`

**org.openrewrite.python.cleanup.YieldFrom**

_A for-loop that does nothing but yield the loop variable can be expressed as `yield from`, which is shorter and delegates directly._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.YieldFrom"
  displayName="Collapse for-yield loop into `yield from`"
  pipPackage="openrewrite-static-analysis"
/>
