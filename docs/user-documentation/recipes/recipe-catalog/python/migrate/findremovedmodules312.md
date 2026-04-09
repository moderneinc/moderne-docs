---
sidebar_label: "Find modules removed in Python 3.12"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find modules removed in Python 3.12

**org.openrewrite.python.migrate.FindRemovedModules312**

_Find imports of modules that were removed in Python 3.12, including asynchat, asyncore, and smtpd._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython312)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.FindRemovedModules312"
  displayName="Find modules removed in Python 3.12"
  pipPackage="openrewrite-migrate-python"
/>
