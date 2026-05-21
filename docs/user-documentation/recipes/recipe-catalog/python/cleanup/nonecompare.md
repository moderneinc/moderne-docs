---
sidebar_label: "Compare to `None` with identity operators (`is` / `is not`)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Compare to `None` with identity operators (`is` / `is not`)

**org.openrewrite.python.cleanup.NoneCompare**

_Switch `== None` to `is None` and `!= None` to `is not None`, following PEP 8 singleton comparison guidance._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.NoneCompare"
  displayName="Compare to `None` with identity operators (`is` / `is not`)"
  pipPackage="openrewrite-static-analysis"
/>
