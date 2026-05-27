---
sidebar_label: "Replace `re.template()` with `re.compile()` and flag `re.TEMPLATE`/`re.T`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `re.template()` with `re.compile()` and flag `re.TEMPLATE`/`re.T`

**org.openrewrite.python.migrate.ReplaceReTemplate**

_`re.template()` was deprecated in Python 3.11 and removed in 3.13. Calls are auto-replaced with `re.compile()`. `re.TEMPLATE`/`re.T` flags have no direct replacement and are flagged for manual review._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [re](/user-documentation/recipes/lists/recipes-by-tag#re)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.11](/user-documentation/recipes/lists/recipes-by-tag#311)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython311)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceReTemplate"
  displayName="Replace `re.template()` with `re.compile()` and flag `re.TEMPLATE`/`re.T`"
  pipPackage="openrewrite-migrate-python"
/>
