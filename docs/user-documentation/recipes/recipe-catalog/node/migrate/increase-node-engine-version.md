---
sidebar_label: "Increase Node.js engine version"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Increase Node.js engine version

**org.openrewrite.node.migrate.increase-node-engine-version**

_Increases the upper bound of the `engines.node` version range in package.json to allow the specified Node.js version._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `null` | version | The Node.js major version to allow, e.g. 20 or 22. | `22` |


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 22](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-22)
* [Upgrade to Node.js 24](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-24)


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.increase-node-engine-version"
  displayName="Increase Node.js engine version"
  npmPackage="@openrewrite/recipes-nodejs"
/>
