---
sidebar_label: "Find deprecated `Path.link_to()` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find deprecated `Path.link_to()` usage

**org.openrewrite.python.migrate.FindPathlibLinkTo**

_Find usage of `Path.link_to()` which was deprecated in Python 3.10 and removed in 3.12. Use `hardlink_to()` instead (note: argument order is reversed)._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [pathlib](/user-documentation/recipes/lists/recipes-by-tag#pathlib)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.12](/user-documentation/recipes/lists/recipes-by-tag#3.12)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.FindPathlibLinkTo](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.FindPathlibLinkTo),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


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
mod run . --recipe org.openrewrite.python.migrate.FindPathlibLinkTo
```
