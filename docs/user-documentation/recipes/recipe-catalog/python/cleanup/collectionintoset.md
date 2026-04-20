---
sidebar_label: "Prefer set literals in `in` membership tests"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Prefer set literals in `in` membership tests

**org.openrewrite.python.cleanup.CollectionIntoSet**

_When a list or tuple of literals appears on the right side of an `in` test, convert it to a set literal for constant-time lookup._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.CollectionIntoSet"
  displayName="Prefer set literals in `in` membership tests"
  pipPackage="openrewrite-static-analysis"
/>
