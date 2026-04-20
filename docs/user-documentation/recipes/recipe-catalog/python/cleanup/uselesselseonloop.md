---
sidebar_label: "Flatten `for/else` when the loop has no `break`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Flatten `for/else` when the loop has no `break`

**org.openrewrite.python.cleanup.UselessElseOnLoop**

_A `for/else` where the loop body never breaks is misleading -- the `else` runs every time. This moves the else body after the loop._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.UselessElseOnLoop"
  displayName="Flatten `for/else` when the loop has no `break`"
  pipPackage="openrewrite-static-analysis"
/>
