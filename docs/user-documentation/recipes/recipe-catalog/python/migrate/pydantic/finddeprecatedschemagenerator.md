---
title: "Find deprecated `schema_generator` config option"
sidebar_label: "Find deprecated `schema_generator` config option"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `schema_generator` config option

**org.openrewrite.python.migrate.pydantic.FindDeprecatedSchemaGenerator**

_Pydantic 2.10 deprecated the `schema_generator` option in `ConfigDict`. It has no public replacement yet, so this recipe flags its use for review._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [pydantic](/user-documentation/recipes/lists/recipes-by-tag#pydantic)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [2.10](/user-documentation/recipes/lists/recipes-by-tag#210)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Pydantic 2.10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/upgradetopydantic210)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.pydantic.FindDeprecatedSchemaGenerator"
  displayName="Find deprecated `schema_generator` config option"
  pipPackage="openrewrite-migrate-python"
/>
