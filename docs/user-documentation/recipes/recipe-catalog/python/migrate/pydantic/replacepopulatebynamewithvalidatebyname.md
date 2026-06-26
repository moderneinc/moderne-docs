---
title: "Replace `populate_by_name` with `validate_by_name`"
sidebar_label: "Replace `populate_by_name` with `validate_by_name`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `populate_by_name` with `validate_by_name`

**org.openrewrite.python.migrate.pydantic.ReplacePopulateByNameWithValidateByName**

_Pydantic 2.11 introduced `validate_by_name` as the equivalent of `populate_by_name`, which is pending deprecation in Pydantic V3. Rename `ConfigDict(populate_by_name=...)` to `ConfigDict(validate_by_name=...)`. This is behavior-preserving (`validate_by_alias` defaults to `True`) and future-proofs the configuration._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [pydantic](/user-documentation/recipes/lists/recipes-by-tag#pydantic)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [2.11](/user-documentation/recipes/lists/recipes-by-tag#211)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Pydantic 2.11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/upgradetopydantic211)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.pydantic.ReplacePopulateByNameWithValidateByName"
  displayName="Replace `populate_by_name` with `validate_by_name`"
  pipPackage="openrewrite-migrate-python"
/>
