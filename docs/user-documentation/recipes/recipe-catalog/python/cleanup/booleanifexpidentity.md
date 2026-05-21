---
sidebar_label: "Collapse boolean ternary to bare condition"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Collapse boolean ternary to bare condition

**org.openrewrite.python.cleanup.BooleanIfExpIdentity**

_Replace ``True if expr else False`` with ``expr`` and ``False if expr else True`` with ``not expr``, removing the redundant ternary wrapper._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.BooleanIfExpIdentity"
  displayName="Collapse boolean ternary to bare condition"
  pipPackage="openrewrite-static-analysis"
/>
