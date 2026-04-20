---
sidebar_label: "Strip trailing ``continue`` from loop body"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Strip trailing ``continue`` from loop body

**org.openrewrite.python.cleanup.RemoveRedundantContinue**

_Strip ``continue`` when it is the final statement in a loop body, since the loop naturally advances to the next iteration._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveRedundantContinue"
  displayName="Strip trailing ``continue`` from loop body"
  pipPackage="openrewrite-static-analysis"
/>
