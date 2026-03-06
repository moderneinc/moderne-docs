---
sidebar_label: "Replace deprecated `fs.Stats` constructor with object literal"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace deprecated `fs.Stats` constructor with object literal

**org.openrewrite.node.migrate.fs.replace-stats-constructor**

_Replace deprecated `new fs.Stats()` constructor calls with an object literal containing Stats properties initialized to undefined._

### Tags

* [DEP0180](/user-documentation/recipes/lists/recipes-by-tag#dep0180)

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
mod run . --recipe org.openrewrite.node.migrate.fs.replace-stats-constructor
```
