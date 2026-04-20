---
sidebar_label: "Drop ``pass``-only ``elif`` by negating its condition"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Drop ``pass``-only ``elif`` by negating its condition

**org.openrewrite.python.cleanup.RemovePassElif**

_When an ``elif`` body is only ``pass`` and an ``else`` follows, invert the ``elif`` condition and absorb the else body._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemovePassElif"
  displayName="Drop ``pass``-only ``elif`` by negating its condition"
  pipPackage="openrewrite-static-analysis"
/>
