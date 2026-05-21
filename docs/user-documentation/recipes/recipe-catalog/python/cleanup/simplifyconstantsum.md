---
sidebar_label: "Simplify `sum(1 for x in items if cond)` to `sum(bool(cond) for x in items)`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Simplify `sum(1 for x in items if cond)` to `sum(bool(cond) for x in items)`

**org.openrewrite.python.cleanup.SimplifyConstantSum**

_Replace `sum(1 for x in items if cond)` with `sum(bool(cond) for x in items)` by moving the filter condition into a `bool()` wrapper._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.SimplifyConstantSum"
  displayName="Simplify `sum(1 for x in items if cond)` to `sum(bool(cond) for x in items)`"
  pipPackage="openrewrite-static-analysis"
/>
