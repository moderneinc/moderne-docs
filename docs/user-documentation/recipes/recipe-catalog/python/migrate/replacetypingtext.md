---
sidebar_label: "Replace `typing.Text` with `str`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace `typing.Text` with `str`

**org.openrewrite.python.migrate.ReplaceTypingText**

_`typing.Text` is deprecated as of Python 3.11. It was an alias for `str` for Python 2/3 compatibility. Replace with `str`._

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceTypingText](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceTypingText),
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
mod run . --recipe org.openrewrite.python.migrate.ReplaceTypingText
```
