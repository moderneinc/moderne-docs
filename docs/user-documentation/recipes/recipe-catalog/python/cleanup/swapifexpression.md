---
sidebar_label: "Swap ternary branches to drop negated condition"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Swap ternary branches to drop negated condition

**org.openrewrite.python.cleanup.SwapIfExpression**

_Flip the branches of a conditional expression whose test uses ``not``, eliminating the negation for clearer intent._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.SwapIfExpression"
  displayName="Swap ternary branches to drop negated condition"
  pipPackage="openrewrite-static-analysis"
/>
