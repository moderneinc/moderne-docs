---
sidebar_label: "Iterate over file objects directly, not via `readlines()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Iterate over file objects directly, not via `readlines()`

**org.openrewrite.python.cleanup.UseFileIterator**

_File objects are iterable and yield lines on demand, so calling `.readlines()` to build an intermediate list is unnecessary._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.UseFileIterator"
  displayName="Iterate over file objects directly, not via `readlines()`"
  pipPackage="openrewrite-static-analysis"
/>
