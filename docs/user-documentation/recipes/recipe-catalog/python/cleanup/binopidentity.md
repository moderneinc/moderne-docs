---
sidebar_label: "Collapse self-cancelling `^` / `-` with duplicate operands to `0`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Collapse self-cancelling `^` / `-` with duplicate operands to `0`

**org.openrewrite.python.cleanup.BinOpIdentity**

_When both operands of `^` or `-` are the same expression, reduce to `0` (the self-cancelling identity)._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.BinOpIdentity"
  displayName="Collapse self-cancelling `^` / `-` with duplicate operands to `0`"
  pipPackage="openrewrite-static-analysis"
/>
