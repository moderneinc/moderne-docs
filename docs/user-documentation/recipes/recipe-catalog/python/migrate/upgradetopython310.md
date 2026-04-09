---
sidebar_label: "Upgrade to Python 3.10"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Python 3.10

**org.openrewrite.python.migrate.UpgradeToPython310**

_Migrate deprecated APIs and adopt new syntax for Python 3.10 compatibility. This includes adopting PEP 604 union type syntax (`X | Y`) and other modernizations between Python 3.9 and 3.10._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.10](/user-documentation/recipes/lists/recipes-by-tag#310)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython311)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.UpgradeToPython310"
  displayName="Upgrade to Python 3.10"
  pipPackage="openrewrite-migrate-python"
/>
