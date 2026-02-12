---
sidebar_label: "Replace `ast.Ellipsis` with `ast.Constant`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace `ast.Ellipsis` with `ast.Constant`

**org.openrewrite.python.migrate.ReplaceAstEllipsis**

_The `ast.Ellipsis` node type was deprecated in Python 3.8 and removed in Python 3.14. Replace with `ast.Constant` and check `node.value is ...`._

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceAstEllipsis](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceAstEllipsis),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

The license for this recipe is unknown.


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.14](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython314)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.ReplaceAstEllipsis
```
