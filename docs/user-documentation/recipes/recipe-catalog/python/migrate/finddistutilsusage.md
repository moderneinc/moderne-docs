---
sidebar_label: "Find deprecated distutils module usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find deprecated distutils module usage

**org.openrewrite.python.migrate.FindDistutilsUsage**

_Find imports of the deprecated `distutils` module which was removed in Python 3.12. Migrate to `setuptools` or other modern build tools._

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.FindDistutilsUsage](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.FindDistutilsUsage),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

The license for this recipe is unknown.


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython312)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.FindDistutilsUsage
```
