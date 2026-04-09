---
sidebar_label: "Replace `locale.resetlocale()` with `locale.setlocale(LC_ALL, '')`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `locale.resetlocale()` with `locale.setlocale(LC_ALL, '')`

**org.openrewrite.python.migrate.ReplaceLocaleResetlocale**

_The `locale.resetlocale()` function was deprecated in Python 3.11 and removed in Python 3.13. Replace with `locale.setlocale(locale.LC_ALL, '')`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.13](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython313)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceLocaleResetlocale"
  displayName="Replace `locale.resetlocale()` with `locale.setlocale(LC_ALL, '')`"
  pipPackage="openrewrite-migrate-python"
/>
