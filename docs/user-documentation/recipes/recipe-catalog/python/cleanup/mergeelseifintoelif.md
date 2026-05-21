---
sidebar_label: "Convert ``else: if`` to ``elif``"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Convert ``else: if`` to ``elif``

**org.openrewrite.python.cleanup.MergeElseIfIntoElif**

_When an ``else`` clause contains nothing but an ``if``, rewrite it as ``elif`` to eliminate extra nesting._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.MergeElseIfIntoElif"
  displayName="Convert ``else: if`` to ``elif``"
  pipPackage="openrewrite-static-analysis"
/>
