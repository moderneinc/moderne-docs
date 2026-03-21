---
sidebar_label: "Find deprecated `urllib.parse.to_bytes()` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `urllib.parse.to_bytes()` usage

**org.openrewrite.python.migrate.FindUrllibParseToBytes**

_Find usage of `urllib.parse.to_bytes()` which was deprecated in Python 3.8 and removed in 3.14. Use str.encode() directly._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [urllib](/user-documentation/recipes/lists/recipes-by-tag#urllib)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.14](/user-documentation/recipes/lists/recipes-by-tag#314)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.14](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython314)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.FindUrllibParseToBytes"
  displayName="Find deprecated `urllib.parse.to_bytes()` usage"
  pipPackage="openrewrite-migrate-python"
/>
