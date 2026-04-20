---
sidebar_label: "Simplify identity comprehension to `list()`/`set()` call"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Simplify identity comprehension to `list()`/`set()` call

**org.openrewrite.python.cleanup.IdentityComprehension**

_A comprehension that simply passes through each element unchanged is equivalent to calling `list()` or `set()` on the iterable._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.IdentityComprehension"
  displayName="Simplify identity comprehension to `list()`/`set()` call"
  pipPackage="openrewrite-static-analysis"
/>
