---
sidebar_label: "Strip dead code after terminal statements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Strip dead code after terminal statements

**org.openrewrite.python.cleanup.RemoveUnreachableCode**

_Delete statements that follow a `return`, `raise`, `continue`, or `break` in the same block, since they can never execute._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveUnreachableCode"
  displayName="Strip dead code after terminal statements"
  pipPackage="openrewrite-static-analysis"
/>
