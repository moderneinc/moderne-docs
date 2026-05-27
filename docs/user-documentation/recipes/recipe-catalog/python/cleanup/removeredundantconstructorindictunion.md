---
sidebar_label: "Unwrap unnecessary `dict()` from union operands"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Unwrap unnecessary `dict()` from union operands

**org.openrewrite.python.cleanup.RemoveRedundantConstructorInDictUnion**

_The `|` operator already produces a fresh dict, so wrapping an operand in `dict()` is redundant and can be removed._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveRedundantConstructorInDictUnion"
  displayName="Unwrap unnecessary `dict()` from union operands"
  pipPackage="openrewrite-static-analysis"
/>
