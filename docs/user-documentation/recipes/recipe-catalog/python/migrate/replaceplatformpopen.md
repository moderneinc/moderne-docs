---
sidebar_label: "Replace `platform.popen()` with `subprocess.check_output()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `platform.popen()` with `subprocess.check_output()`

**org.openrewrite.python.migrate.ReplacePlatformPopen**

_`platform.popen()` was removed in Python 3.8. Use `subprocess.check_output(cmd, shell=True)` instead. Note: this rewrites call sites but does not manage imports._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.8](/user-documentation/recipes/lists/recipes-by-tag#38)
* [platform](/user-documentation/recipes/lists/recipes-by-tag#platform)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython38)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplacePlatformPopen"
  displayName="Replace `platform.popen()` with `subprocess.check_output()`"
  pipPackage="openrewrite-migrate-python"
/>
