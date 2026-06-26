---
title: "Upgrade to Pydantic 2.12"
sidebar_label: "Upgrade to Pydantic 2.12"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Pydantic 2.12

**org.openrewrite.python.migrate.pydantic.UpgradeToPydantic212**

_Migrate code affected by changes introduced in Pydantic 2.12 (and 2.10/2.11). Flags `serialize_as_any` usage affected by the 2.12 unification with the `SerializeAsAny` annotation._

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

* [Upgrade to Pydantic 2.13](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/upgradetopydantic213)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.pydantic.UpgradeToPydantic212"
  displayName="Upgrade to Pydantic 2.12"
  pipPackage="openrewrite-migrate-python"
/>
