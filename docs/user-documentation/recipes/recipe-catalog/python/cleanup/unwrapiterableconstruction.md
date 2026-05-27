---
sidebar_label: "Flatten redundant collection constructor wrapping a literal"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Flatten redundant collection constructor wrapping a literal

**org.openrewrite.python.cleanup.UnwrapIterableConstruction**

_When `tuple()`, `list()`, or `set()` wraps a single list or tuple literal, remove the constructor and use the target literal form directly._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.UnwrapIterableConstruction"
  displayName="Flatten redundant collection constructor wrapping a literal"
  pipPackage="openrewrite-static-analysis"
/>
