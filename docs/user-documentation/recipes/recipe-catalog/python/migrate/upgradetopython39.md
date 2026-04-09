---
sidebar_label: "Upgrade to Python 3.9"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Python 3.9

**org.openrewrite.python.migrate.UpgradeToPython39**

_Migrate deprecated APIs for Python 3.9 compatibility. This includes PEP 585 built-in generics, removed base64 functions, and deprecated XML Element methods._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.9](/user-documentation/recipes/lists/recipes-by-tag#39)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython310)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.UpgradeToPython39"
  displayName="Upgrade to Python 3.9"
  pipPackage="openrewrite-migrate-python"
/>
