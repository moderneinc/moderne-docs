---
sidebar_label: "Replace `sys.last_value` with `sys.last_exc` and flag `sys.last_type` / `sys.last_traceback`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `sys.last_value` with `sys.last_exc` and flag `sys.last_type` / `sys.last_traceback`

**org.openrewrite.python.migrate.ReplaceSysLastExcInfo**

_`sys.last_type`, `sys.last_value`, and `sys.last_traceback` were deprecated in Python 3.12. `sys.last_value` is auto-replaced with `sys.last_exc`; `sys.last_type` and `sys.last_traceback` are flagged for manual review._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.12](/user-documentation/recipes/lists/recipes-by-tag#312)
* [sys](/user-documentation/recipes/lists/recipes-by-tag#sys)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython312)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceSysLastExcInfo"
  displayName="Replace `sys.last_value` with `sys.last_exc` and flag `sys.last_type` / `sys.last_traceback`"
  pipPackage="openrewrite-migrate-python"
/>
