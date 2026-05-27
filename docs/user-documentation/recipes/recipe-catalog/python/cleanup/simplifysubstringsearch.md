---
sidebar_label: "Replace `.find()` check with `in` / `not in`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `.find()` check with `in` / `not in`

**org.openrewrite.python.cleanup.SimplifySubstringSearch**

_Rewrite ``.find()`` return-value checks as membership tests: ``text.find(sub) == -1`` becomes ``sub not in text`` and ``text.find(sub) != -1`` becomes ``sub in text``._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.SimplifySubstringSearch"
  displayName="Replace `.find()` check with `in` / `not in`"
  pipPackage="openrewrite-static-analysis"
/>
