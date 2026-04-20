---
sidebar_label: "Use generator expression instead of list comprehension in iterable-accepting calls"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use generator expression instead of list comprehension in iterable-accepting calls

**org.openrewrite.python.cleanup.ComprehensionToGenerator**

_Functions that consume iterables lazily (e.g. `any`, `sum`, `sorted`) do not need a list comprehension -- a generator expression suffices._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.ComprehensionToGenerator"
  displayName="Use generator expression instead of list comprehension in iterable-accepting calls"
  pipPackage="openrewrite-static-analysis"
/>
