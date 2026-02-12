---
sidebar_label: "Find deprecated `os.popen()` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find deprecated `os.popen()` usage

**org.openrewrite.python.migrate.FindOsPopen**

_`os.popen()` has been deprecated since Python 3.6. Use `subprocess.run()` or `subprocess.Popen()` instead for better control over process creation and output handling._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [subprocess](/user-documentation/recipes/lists/recipes-by-tag#subprocess)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.FindOsPopen](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.FindOsPopen),
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
mod run . --recipe org.openrewrite.python.migrate.FindOsPopen
```
