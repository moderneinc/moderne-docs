---
sidebar_label: "Remove redundant pass statements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Remove redundant pass statements

**org.openrewrite.python.RemovePass**

_Remove redundant `pass` statements from Python code when there are other executable statements in the block._

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.RemovePass](https://github.com/search?type=code&q=repo:+org.openrewrite.python.RemovePass),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.RemovePass
```
