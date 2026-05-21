---
sidebar_label: "Unwrap ``str()`` from ``print()`` arguments"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Unwrap ``str()`` from ``print()`` arguments

**org.openrewrite.python.cleanup.RemoveStrFromPrint**

_``print()`` automatically converts its arguments to strings, so an explicit ``str()`` wrapper is unnecessary and can be removed._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveStrFromPrint"
  displayName="Unwrap ``str()`` from ``print()`` arguments"
  pipPackage="openrewrite-static-analysis"
/>
