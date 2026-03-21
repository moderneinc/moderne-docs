---
sidebar_label: "Find deprecated `shutil.rmtree(onerror=...)` parameter"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `shutil.rmtree(onerror=...)` parameter

**org.openrewrite.python.migrate.FindShutilRmtreeOnerror**

_The `onerror` parameter of `shutil.rmtree()` was deprecated in Python 3.12 in favor of `onexc`. The `onexc` callback receives the exception object directly rather than an exc_info tuple._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [shutil](/user-documentation/recipes/lists/recipes-by-tag#shutil)
* [3.12](/user-documentation/recipes/lists/recipes-by-tag#312)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython312)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.FindShutilRmtreeOnerror"
  displayName="Find deprecated `shutil.rmtree(onerror=...)` parameter"
  pipPackage="openrewrite-migrate-python"
/>
