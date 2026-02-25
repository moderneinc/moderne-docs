---
sidebar_label: "Add literal method argument"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add literal method argument

**org.openrewrite.python.AddLiteralMethodArgument**

_Add a literal argument to method invocations matching a pattern._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.AddLiteralMethodArgument
```
