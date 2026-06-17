---
title: "Upgrade to Pydantic 2.10"
sidebar_label: "Upgrade to Pydantic 2.10"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Pydantic 2.10

**org.openrewrite.python.migrate.pydantic.UpgradeToPydantic210**

_Flag and migrate code affected by deprecations introduced in Pydantic 2.10, such as the deprecated `schema_generator` config option and the discouraged `Field(...)` Ellipsis form. Also flags the deprecated `json_encoders` config option._

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

* [Upgrade to Pydantic 2.11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/upgradetopydantic211)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.pydantic.UpgradeToPydantic210"
  displayName="Upgrade to Pydantic 2.10"
  pipPackage="openrewrite-migrate-python"
/>
