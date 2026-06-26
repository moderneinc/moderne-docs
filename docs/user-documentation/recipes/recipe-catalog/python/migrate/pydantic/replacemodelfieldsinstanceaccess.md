---
title: "Replace instance access of `model_fields` / `model_computed_fields`"
sidebar_label: "Replace instance access of `model_fields` / `model_computed_fields`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace instance access of `model_fields` / `model_computed_fields`

**org.openrewrite.python.migrate.pydantic.ReplaceModelFieldsInstanceAccess**

_Pydantic 2.11 deprecated accessing `model_fields` and `model_computed_fields` on a model instance; these are removed in Pydantic 3.0. Replace `<instance>.model_fields` with `type(<instance>).model_fields` (and likewise for `model_computed_fields`) when the receiver resolves to a Pydantic model, so the attribute is accessed on the class. Class access and `cls` access are left untouched._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [pydantic](/user-documentation/recipes/lists/recipes-by-tag#pydantic)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [2.11](/user-documentation/recipes/lists/recipes-by-tag#211)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Pydantic 2.11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/upgradetopydantic211)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.pydantic.ReplaceModelFieldsInstanceAccess"
  displayName="Replace instance access of `model_fields` / `model_computed_fields`"
  pipPackage="openrewrite-migrate-python"
/>
