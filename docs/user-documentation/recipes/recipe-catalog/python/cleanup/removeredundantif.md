---
sidebar_label: "Simplify negated ``elif`` to ``else``"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Simplify negated ``elif`` to ``else``

**org.openrewrite.python.cleanup.RemoveRedundantIf**

_When an ``elif`` condition is the exact negation of the preceding ``if``, replace it with ``else`` since the test is redundant._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveRedundantIf"
  displayName="Simplify negated ``elif`` to ``else``"
  pipPackage="openrewrite-static-analysis"
/>
