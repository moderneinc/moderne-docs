---
sidebar_label: "Use comprehension syntax instead of `list()`/`set()` around generators"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use comprehension syntax instead of `list()`/`set()` around generators

**org.openrewrite.python.cleanup.CollectionBuiltinToComprehension**

_Wrapping a generator in `list()` or `set()` is less idiomatic than the equivalent bracket/brace comprehension syntax._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.CollectionBuiltinToComprehension"
  displayName="Use comprehension syntax instead of `list()`/`set()` around generators"
  pipPackage="openrewrite-static-analysis"
/>
