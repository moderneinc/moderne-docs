---
sidebar_label: "Replace `typing.List` with `list`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace `typing.List` with `list`

**org.openrewrite.python.migrate.ReplaceTypingListWithList**

_PEP 585 deprecated `typing.List` in Python 3.9. Replace with the built-in `list` type for generic annotations._

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceTypingListWithList](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceTypingListWithList),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

The license for this recipe is unknown.


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.ReplaceTypingListWithList
```
