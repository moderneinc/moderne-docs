---
sidebar_label: "Shorten assignment to compound operator form"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Shorten assignment to compound operator form

**org.openrewrite.python.cleanup.AugAssign**

_Convert ``target = target op value`` into ``target op= value`` for arithmetic operators (+, -, *, /, %)._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.AugAssign"
  displayName="Shorten assignment to compound operator form"
  pipPackage="openrewrite-static-analysis"
/>
