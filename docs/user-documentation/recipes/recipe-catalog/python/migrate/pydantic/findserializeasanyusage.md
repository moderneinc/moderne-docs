---
title: "Find `serialize_as_any` usage affected by the Pydantic 2.12 unification"
sidebar_label: "Find `serialize_as_any` usage affected by the Pydantic 2.12 unification"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `serialize_as_any` usage affected by the Pydantic 2.12 unification

**org.openrewrite.python.migrate.pydantic.FindSerializeAsAnyUsage**

_Pydantic 2.12 unified the `serialize_as_any` flag with the `SerializeAsAny` annotation, which can change serialization output versus 2.11. This recipe flags `serialize_as_any=` on `model_dump` / `model_dump_json` (and `TypeAdapter.dump_python` / `dump_json`) for review, since there is no safe mechanical rewrite._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [pydantic](/user-documentation/recipes/lists/recipes-by-tag#pydantic)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [2.12](/user-documentation/recipes/lists/recipes-by-tag#212)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Pydantic 2.12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/upgradetopydantic212)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.pydantic.FindSerializeAsAnyUsage"
  displayName="Find `serialize_as_any` usage affected by the Pydantic 2.12 unification"
  pipPackage="openrewrite-migrate-python"
/>
