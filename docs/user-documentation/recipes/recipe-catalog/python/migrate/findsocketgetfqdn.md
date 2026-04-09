---
sidebar_label: "Find `socket.getfqdn()` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `socket.getfqdn()` usage

**org.openrewrite.python.migrate.FindSocketGetFQDN**

_Find usage of `socket.getfqdn()` which can be slow and unreliable. Consider using `socket.gethostname()` instead._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [socket](/user-documentation/recipes/lists/recipes-by-tag#socket)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython311)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.FindSocketGetFQDN"
  displayName="Find `socket.getfqdn()` usage"
  pipPackage="openrewrite-migrate-python"
/>
