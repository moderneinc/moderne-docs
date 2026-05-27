---
sidebar_label: "Flip empty ``if``-body by negating the condition"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Flip empty ``if``-body by negating the condition

**org.openrewrite.python.cleanup.SwapIfElseBranches**

_When the ``if`` branch is just ``pass`` and an ``else`` exists, invert the test and promote the else body to the if body._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.SwapIfElseBranches"
  displayName="Flip empty ``if``-body by negating the condition"
  pipPackage="openrewrite-static-analysis"
/>
