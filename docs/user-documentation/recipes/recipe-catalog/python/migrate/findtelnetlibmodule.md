---
sidebar_label: "Find deprecated `telnetlib` module usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `telnetlib` module usage

**org.openrewrite.python.migrate.FindTelnetlibModule**

_The `telnetlib` module was deprecated in Python 3.11 and removed in Python 3.13. Consider using `telnetlib3` from PyPI, direct socket usage, or SSH-based alternatives like paramiko._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.13](/user-documentation/recipes/lists/recipes-by-tag#313)
* [PEP 594](/user-documentation/recipes/lists/recipes-by-tag#pep-594)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.13](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython313)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.FindTelnetlibModule"
  displayName="Find deprecated `telnetlib` module usage"
  pipPackage="openrewrite-migrate-python"
/>
