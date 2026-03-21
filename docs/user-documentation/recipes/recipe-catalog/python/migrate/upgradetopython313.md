---
sidebar_label: "Upgrade to Python 3.13"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Python 3.13

**org.openrewrite.python.migrate.UpgradeToPython313**

_Migrate deprecated and removed APIs for Python 3.13 compatibility. This includes detecting usage of modules removed in PEP 594 ('dead batteries') and other API changes between Python 3.12 and 3.13._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.13](/user-documentation/recipes/lists/recipes-by-tag#313)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.14](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython314)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.UpgradeToPython313"
  displayName="Upgrade to Python 3.13"
  pipPackage="openrewrite-migrate-python"
/>
