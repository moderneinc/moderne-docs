---
sidebar_label: "Increase Node.js version in GitHub Actions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Increase Node.js version in GitHub Actions

**org.openrewrite.node.migrate.increase-node-engine-version-in-github-actions**

_Increases `node-version` in `actions/setup-node` steps in GitHub Actions workflows. Only modifies plain major version values (e.g. `20`) and x-ranges (e.g. `20.x`). Never decreases the version._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `null` | version | The Node.js major version to set, e.g. 20 or 22. | `22` |


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 22](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-22)
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
mod run . --recipe org.openrewrite.node.migrate.increase-node-engine-version-in-github-actions
```
