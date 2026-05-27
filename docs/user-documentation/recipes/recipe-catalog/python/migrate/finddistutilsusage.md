---
sidebar_label: "Find deprecated distutils module usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated distutils module usage

**org.openrewrite.python.migrate.FindDistutilsUsage**

_Find imports of the deprecated `distutils` module which was removed in Python 3.12. Migrate to `setuptools` or other modern build tools._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython312)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.FindDistutilsUsage"
  displayName="Find deprecated distutils module usage"
  pipPackage="openrewrite-migrate-python"
/>
