---
sidebar_label: "Upgrade to Python 3.12"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Python 3.12

**org.openrewrite.python.migrate.UpgradeToPython312**

_Migrate deprecated and removed APIs for Python 3.12 compatibility. This includes detecting usage of the removed `imp` module and other legacy modules that were removed in Python 3.12._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.12](/user-documentation/recipes/lists/recipes-by-tag#312)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.13](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython313)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.UpgradeToPython312"
  displayName="Upgrade to Python 3.12"
  pipPackage="openrewrite-migrate-python"
/>
