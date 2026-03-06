---
sidebar_label: "Find deprecated `timers.active()` and `timers._unrefActive()` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find deprecated `timers.active()` and `timers._unrefActive()` usage

**org.openrewrite.node.migrate.timers.find-timers-active**

_`timers.active()` (DEP0126) and `timers._unrefActive()` (DEP0127) were deprecated and removed in Node.js 24. Use `timeout.refresh()` instead._

### Tags

* [DEP0126](/user-documentation/recipes/lists/recipes-by-tag#dep0126)
* [DEP0127](/user-documentation/recipes/lists/recipes-by-tag#dep0127)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 24](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-24)


## Usage

In order to run JavaScript recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).
For JavaScript specific configuration instructions, please see our [configuring JavaScript guide](https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/javascript).

Once the CLI is installed, you can install this JavaScript recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes npm install @openrewrite/recipes-nodejs
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.node.migrate.timers.find-timers-active
```
