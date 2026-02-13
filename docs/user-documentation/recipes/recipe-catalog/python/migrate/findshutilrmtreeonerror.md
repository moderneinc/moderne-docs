---
sidebar_label: "Find deprecated `shutil.rmtree(onerror=...)` parameter"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find deprecated `shutil.rmtree(onerror=...)` parameter

**org.openrewrite.python.migrate.FindShutilRmtreeOnerror**

_The `onerror` parameter of `shutil.rmtree()` was deprecated in Python 3.12 in favor of `onexc`. The `onexc` callback receives the exception object directly rather than an exc_info tuple._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [shutil](/user-documentation/recipes/lists/recipes-by-tag#shutil)
* [3.12](/user-documentation/recipes/lists/recipes-by-tag#3.12)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython312)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite-migrate-python
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.FindShutilRmtreeOnerror
```
