---
sidebar_label: "Reorder comparisons to put literals on the right"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Reorder comparisons to put literals on the right

**org.openrewrite.python.cleanup.FlipComparison**

_Swap operands when a constant appears on the left of a comparison, e.g. ``42 == count`` becomes ``count == 42``, mirroring the relational operator as needed._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.FlipComparison"
  displayName="Reorder comparisons to put literals on the right"
  pipPackage="openrewrite-static-analysis"
/>
