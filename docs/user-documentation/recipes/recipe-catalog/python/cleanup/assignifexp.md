---
sidebar_label: "Use inline conditional for simple ``if``/``else`` assignment"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use inline conditional for simple ``if``/``else`` assignment

**org.openrewrite.python.cleanup.AssignIfExp**

_When an ``if``/``else`` pair each assign a single value to the same variable, rewrite as a ternary expression._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.AssignIfExp"
  displayName="Use inline conditional for simple ``if``/``else`` assignment"
  pipPackage="openrewrite-static-analysis"
/>
