---
sidebar_label: "Replace deprecated gettext l*gettext() functions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace deprecated gettext l*gettext() functions

**org.openrewrite.python.migrate.ReplaceGettextDeprecations**

_Replace deprecated gettext functions like `lgettext()` with their modern equivalents like `gettext()`. The l*gettext() functions were removed in Python 3.11._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython311)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceGettextDeprecations"
  displayName="Replace deprecated gettext l*gettext() functions"
  pipPackage="openrewrite-migrate-python"
/>
