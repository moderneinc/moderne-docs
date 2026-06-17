---
title: "Upgrade to Pydantic 2.13"
sidebar_label: "Upgrade to Pydantic 2.13"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Pydantic 2.13

**org.openrewrite.python.migrate.pydantic.UpgradeToPydantic213**

_Migrate code for Pydantic 2.13. Pydantic 2.13 introduced no new deprecations (an additive release), so this applies all Pydantic 2.12 migrations (which chain back to 2.10)._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [pydantic](/user-documentation/recipes/lists/recipes-by-tag#pydantic)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [2.13](/user-documentation/recipes/lists/recipes-by-tag#213)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Pydantic 2.14](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/upgradetopydantic214)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.pydantic.UpgradeToPydantic213"
  displayName="Upgrade to Pydantic 2.13"
  pipPackage="openrewrite-migrate-python"
/>
