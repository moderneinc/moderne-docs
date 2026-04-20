---
sidebar_label: "Remove `break`/`continue` outside loop"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `break`/`continue` outside loop

**org.openrewrite.python.cleanup.BreakOrContinueOutsideLoop**

_Remove `break` and `continue` statements that are not inside any for or while loop._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.BreakOrContinueOutsideLoop"
  displayName="Remove `break`/`continue` outside loop"
  pipPackage="openrewrite-static-analysis"
/>
