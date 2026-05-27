---
sidebar_label: "Substitute constant collection condition with boolean"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Substitute constant collection condition with boolean

**org.openrewrite.python.cleanup.CollectionToBool**

_When a list, tuple, dict, or set literal is used as an ``if`` or ``while`` condition, replace it with ``True`` (non-empty) or ``False`` (empty) to state the intent directly._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.CollectionToBool"
  displayName="Substitute constant collection condition with boolean"
  pipPackage="openrewrite-static-analysis"
/>
