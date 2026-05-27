---
sidebar_label: "Find deprecated `Path.link_to()` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `Path.link_to()` usage

**org.openrewrite.python.migrate.FindPathlibLinkTo**

_Find usage of `Path.link_to()` which was deprecated in Python 3.10 and removed in 3.12. Use `hardlink_to()` instead (note: argument order is reversed)._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [pathlib](/user-documentation/recipes/lists/recipes-by-tag#pathlib)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.12](/user-documentation/recipes/lists/recipes-by-tag#312)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython312)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.FindPathlibLinkTo"
  displayName="Find deprecated `Path.link_to()` usage"
  pipPackage="openrewrite-migrate-python"
/>
