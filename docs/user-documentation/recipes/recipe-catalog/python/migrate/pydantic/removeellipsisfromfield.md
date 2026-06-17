---
title: "Remove `...` (Ellipsis) from `Field()`"
sidebar_label: "Remove `...` (Ellipsis) from `Field()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `...` (Ellipsis) from `Field()`

**org.openrewrite.python.migrate.pydantic.RemoveEllipsisFromField**

_Pydantic 2.10 recommends against using `Ellipsis` (`...`) with `Field` to mark a field as required, as it does not play well with static type checkers. Rewrite `Field(...)` to `Field()` (and `Field(..., x=y)` to `Field(x=y)`), keeping the remaining arguments. Only calls resolving to `pydantic.fields.Field` are rewritten._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [pydantic](/user-documentation/recipes/lists/recipes-by-tag#pydantic)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [2.10](/user-documentation/recipes/lists/recipes-by-tag#210)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Pydantic 2.10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/upgradetopydantic210)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.pydantic.RemoveEllipsisFromField"
  displayName="Remove `...` (Ellipsis) from `Field()`"
  pipPackage="openrewrite-migrate-python"
/>
