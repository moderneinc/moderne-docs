---
sidebar_label: "Rewrite `any(v == literal ...)` as `literal in collection`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rewrite `any(v == literal ...)` as `literal in collection`

**org.openrewrite.python.cleanup.ConvertAnyToIn**

_An `any()` generator that tests equality against a literal value is equivalent to the `in` membership operator, which is clearer._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.ConvertAnyToIn"
  displayName="Rewrite `any(v == literal ...)` as `literal in collection`"
  pipPackage="openrewrite-static-analysis"
/>
