---
sidebar_label: "Remove deprecated `net._setSimultaneousAccepts()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Remove deprecated `net._setSimultaneousAccepts()`

**org.openrewrite.node.migrate.net.remove-set-simultaneous-accepts**

_Remove calls to deprecated `net._setSimultaneousAccepts()` which was an undocumented internal function that is no longer necessary._

### Tags

* [DEP0121](/user-documentation/recipes/lists/recipes-by-tag#dep0121)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

In order to run JavaScript recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).
For JavaScript specific configuration instructions, please see our [configuring JavaScript guide](https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/javascript).

Once the CLI is installed, you can install this JavaScript recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes npm install @openrewrite/recipes-nodejs
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.node.migrate.net.remove-set-simultaneous-accepts
```
