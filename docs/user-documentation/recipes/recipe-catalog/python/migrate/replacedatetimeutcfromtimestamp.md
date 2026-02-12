---
sidebar_label: "Replace `datetime.utcfromtimestamp()` with `datetime.fromtimestamp(ts, UTC)`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace `datetime.utcfromtimestamp()` with `datetime.fromtimestamp(ts, UTC)`

**org.openrewrite.python.migrate.ReplaceDatetimeUtcFromTimestamp**

_The `datetime.utcfromtimestamp()` method is deprecated in Python 3.12. Replace it with `datetime.fromtimestamp(ts, datetime.UTC)` for timezone-aware datetime objects._

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceDatetimeUtcFromTimestamp](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceDatetimeUtcFromTimestamp),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


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
mod run . --recipe org.openrewrite.python.migrate.ReplaceDatetimeUtcFromTimestamp
```
