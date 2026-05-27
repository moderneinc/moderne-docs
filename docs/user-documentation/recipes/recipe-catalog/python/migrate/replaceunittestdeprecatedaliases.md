---
sidebar_label: "Replace deprecated unittest method aliases"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace deprecated unittest method aliases

**org.openrewrite.python.migrate.ReplaceUnittestDeprecatedAliases**

_Replace deprecated unittest.TestCase method aliases like `assertEquals` with their modern equivalents like `assertEqual`. These aliases were removed in Python 3.11/3.12._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython311)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceUnittestDeprecatedAliases"
  displayName="Replace deprecated unittest method aliases"
  pipPackage="openrewrite-migrate-python"
/>
