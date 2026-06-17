---
title: "Find deprecated `json_encoders` config option"
sidebar_label: "Find deprecated `json_encoders` config option"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `json_encoders` config option

**org.openrewrite.python.migrate.pydantic.FindDeprecatedJsonEncoders**

_Pydantic deprecated the `json_encoders` option in `ConfigDict`. Its replacements (`@field_serializer` / `@model_serializer` or `Annotated[..., PlainSerializer(...)]`) require restructuring, so this recipe flags its use for review._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [pydantic](/user-documentation/recipes/lists/recipes-by-tag#pydantic)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Pydantic 2.10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/upgradetopydantic210)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.pydantic.FindDeprecatedJsonEncoders"
  displayName="Find deprecated `json_encoders` config option"
  pipPackage="openrewrite-migrate-python"
/>
