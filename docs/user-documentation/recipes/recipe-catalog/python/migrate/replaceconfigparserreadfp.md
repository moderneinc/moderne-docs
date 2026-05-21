---
sidebar_label: "Replace `ConfigParser.readfp()` with `read_file()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `ConfigParser.readfp()` with `read_file()`

**org.openrewrite.python.migrate.ReplaceConfigparserReadfp**

_The `ConfigParser.readfp()` method was deprecated in Python 3.2 and removed in Python 3.13. Replace with `read_file()`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython311)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceConfigparserReadfp"
  displayName="Replace `ConfigParser.readfp()` with `read_file()`"
  pipPackage="openrewrite-migrate-python"
/>
