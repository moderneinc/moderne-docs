---
sidebar_label: "Pass iterable directly to `any()`/`all()` instead of identity generator"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Pass iterable directly to `any()`/`all()` instead of identity generator

**org.openrewrite.python.cleanup.SimplifyGenerator**

_An identity generator that yields every element unchanged is redundant inside `any()` or `all()` -- pass the collection directly._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.SimplifyGenerator"
  displayName="Pass iterable directly to `any()`/`all()` instead of identity generator"
  pipPackage="openrewrite-static-analysis"
/>
