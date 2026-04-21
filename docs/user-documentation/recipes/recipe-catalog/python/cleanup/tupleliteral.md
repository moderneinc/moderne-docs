---
sidebar_label: "Use `()` literal instead of `tuple()` constructor"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use `()` literal instead of `tuple()` constructor

**org.openrewrite.python.cleanup.TupleLiteral**

_Convert no-argument `tuple()` calls to the `()` literal, which is more concise and avoids a function call._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.TupleLiteral"
  displayName="Use `()` literal instead of `tuple()` constructor"
  pipPackage="openrewrite-static-analysis"
/>
