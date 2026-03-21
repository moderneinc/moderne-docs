---
sidebar_label: "Find deprecated `os.popen()` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `os.popen()` usage

**org.openrewrite.python.migrate.FindOsPopen**

_`os.popen()` has been deprecated since Python 3.6. Use `subprocess.run()` or `subprocess.Popen()` instead for better control over process creation and output handling._

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
  recipeName="org.openrewrite.python.migrate.FindOsPopen"
  displayName="Find deprecated `os.popen()` usage"
  pipPackage="openrewrite-migrate-python"
/>
