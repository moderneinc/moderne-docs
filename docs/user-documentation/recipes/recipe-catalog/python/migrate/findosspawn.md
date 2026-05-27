---
sidebar_label: "Find deprecated `os.spawn*()` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `os.spawn*()` usage

**org.openrewrite.python.migrate.FindOsSpawn**

_The `os.spawn*()` family of functions are deprecated. Use `subprocess.run()` or `subprocess.Popen()` instead._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [subprocess](/user-documentation/recipes/lists/recipes-by-tag#subprocess)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython312)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.FindOsSpawn"
  displayName="Find deprecated `os.spawn*()` usage"
  pipPackage="openrewrite-migrate-python"
/>
