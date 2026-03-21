---
sidebar_label: "Replace `str.format()` with f-string"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `str.format()` with f-string

**org.openrewrite.python.migrate.ReplaceStrFormatWithFString**

_Replace `"...".format(...)` calls with f-strings (Python 3.6+). Only converts cases where the format string is a literal and the conversion is safe._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.6](/user-documentation/recipes/lists/recipes-by-tag#36)
* [f-string](/user-documentation/recipes/lists/recipes-by-tag#f)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython38)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceStrFormatWithFString"
  displayName="Replace `str.format()` with f-string"
  pipPackage="openrewrite-migrate-python"
/>
