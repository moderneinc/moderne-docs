---
sidebar_label: "Replace deprecated gettext l*gettext() functions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace deprecated gettext l*gettext() functions

**org.openrewrite.python.migrate.ReplaceGettextDeprecations**

_Replace deprecated gettext functions like `lgettext()` with their modern equivalents like `gettext()`. The l*gettext() functions were removed in Python 3.11._

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceGettextDeprecations](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceGettextDeprecations),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

The license for this recipe is unknown.


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython311)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.ReplaceGettextDeprecations
```
