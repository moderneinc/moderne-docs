---
sidebar_label: "Replace `pkgutil.find_loader()` with `importlib.util.find_spec()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `pkgutil.find_loader()` with `importlib.util.find_spec()`

**org.openrewrite.python.migrate.ReplacePkgutilFindLoader**

_The `pkgutil.find_loader()` function was deprecated in Python 3.12. Replace with `importlib.util.find_spec()`. Note: returns ModuleSpec, use .loader for loader._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython312)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplacePkgutilFindLoader"
  displayName="Replace `pkgutil.find_loader()` with `importlib.util.find_spec()`"
  pipPackage="openrewrite-migrate-python"
/>
