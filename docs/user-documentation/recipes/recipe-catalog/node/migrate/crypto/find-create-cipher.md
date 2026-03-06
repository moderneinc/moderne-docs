---
sidebar_label: "Find deprecated `crypto.createCipher()` and `crypto.createDecipher()` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find deprecated `crypto.createCipher()` and `crypto.createDecipher()` usage

**org.openrewrite.node.migrate.crypto.find-create-cipher**

_`crypto.createCipher()` and `crypto.createDecipher()` were deprecated in Node.js 10 (DEP0106) and removed in Node.js 22. Use `crypto.createCipheriv()` and `crypto.createDecipheriv()` instead._

### Tags

* [DEP0106](/user-documentation/recipes/lists/recipes-by-tag#dep0106)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 22](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-22)


## Usage

In order to run JavaScript recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).
For JavaScript specific configuration instructions, please see our [configuring JavaScript guide](https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/javascript).

Once the CLI is installed, you can install this JavaScript recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes npm install @openrewrite/recipes-nodejs
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.node.migrate.crypto.find-create-cipher
```
