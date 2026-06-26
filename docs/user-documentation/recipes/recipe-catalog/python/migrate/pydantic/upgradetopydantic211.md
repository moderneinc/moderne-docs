---
title: "Upgrade to Pydantic 2.11"
sidebar_label: "Upgrade to Pydantic 2.11"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Pydantic 2.11

**org.openrewrite.python.migrate.pydantic.UpgradeToPydantic211**

_Migrate code affected by deprecations introduced in Pydantic 2.11 (and 2.10). Rewrites instance access of `model_fields` / `model_computed_fields` to class access, rewrites `Final` model fields with default values to `ClassVar`, and renames `populate_by_name` to `validate_by_name`._

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

* [Upgrade to Pydantic 2.12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/pydantic/upgradetopydantic212)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.pydantic.UpgradeToPydantic211"
  displayName="Upgrade to Pydantic 2.11"
  pipPackage="openrewrite-migrate-python"
/>
