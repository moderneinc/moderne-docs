---
sidebar_label: "Detect `%` string formatting"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Detect `%` string formatting

**org.openrewrite.python.migrate.DetectPercentFormatting**

_Detect usage of %-style string formatting which could be migrated to f-strings (Python 3.6+). Manual review is recommended for conversion._

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.DetectPercentFormatting](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.DetectPercentFormatting),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython38)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.DetectPercentFormatting
```
