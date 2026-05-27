---
sidebar_label: "Convert `and`/`or` ternary trick to conditional expression"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Convert `and`/`or` ternary trick to conditional expression

**org.openrewrite.python.cleanup.TernaryToIfExpression**

_Rewrite the legacy `cond and val or fallback` idiom as `val if cond else fallback` to avoid silent bugs when `val` is falsy._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.TernaryToIfExpression"
  displayName="Convert `and`/`or` ternary trick to conditional expression"
  pipPackage="openrewrite-static-analysis"
/>
