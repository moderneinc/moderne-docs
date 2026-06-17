---
title: "Find `@model_validator(mode='after')` on a classmethod"
sidebar_label: "Find `@model_validator(mode='after')` on a classmethod"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `@model_validator(mode='after')` on a classmethod

**org.openrewrite.python.migrate.pydantic.FindModelValidatorAfterClassmethod**

_Pydantic 2.12 deprecated `@model_validator` with `mode='after'` on a classmethod; the implicit classmethod conversion for `after` model validators is removed in V3. Such validators should be instance methods (`self`, no `@classmethod`). This recipe flags the decorator for review, since the rewrite is not safe to mechanize. `field_validator` is unaffected._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [pydantic](/user-documentation/recipes/lists/recipes-by-tag#pydantic)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [2.12](/user-documentation/recipes/lists/recipes-by-tag#212)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Pydantic 2.12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/upgradetopydantic212)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.pydantic.FindModelValidatorAfterClassmethod"
  displayName="Find `@model_validator(mode='after')` on a classmethod"
  pipPackage="openrewrite-migrate-python"
/>
