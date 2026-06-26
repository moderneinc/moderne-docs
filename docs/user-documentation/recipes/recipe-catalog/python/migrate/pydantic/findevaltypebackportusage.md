---
title: "Find `eval_type_backport` usage removed in Pydantic 2.14"
sidebar_label: "Find `eval_type_backport` usage removed in Pydantic 2.14"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `eval_type_backport` usage removed in Pydantic 2.14

**org.openrewrite.python.migrate.pydantic.FindEvalTypeBackportUsage**

_Pydantic 2.14 removed its support for the `eval_type_backport` package. With the Python 3.10 minimum it is no longer needed. This recipe flags `import eval_type_backport` and `from eval_type_backport import ...` for review._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [pydantic](/user-documentation/recipes/lists/recipes-by-tag#pydantic)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [2.14](/user-documentation/recipes/lists/recipes-by-tag#214)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Pydantic 2.14](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/upgradetopydantic214)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.pydantic.FindEvalTypeBackportUsage"
  displayName="Find `eval_type_backport` usage removed in Pydantic 2.14"
  pipPackage="openrewrite-migrate-python"
/>
