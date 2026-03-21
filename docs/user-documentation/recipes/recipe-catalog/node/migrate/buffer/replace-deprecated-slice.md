---
sidebar_label: "Replace deprecated `Buffer.slice()` with `Buffer.subarray()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace deprecated `Buffer.slice()` with `Buffer.subarray()`

**org.openrewrite.node.migrate.buffer.replace-deprecated-slice**

_Replace deprecated `buffer.slice()` calls with `buffer.subarray()` for compatibility with Uint8Array.prototype.slice()._

### Tags

* [DEP0158](/user-documentation/recipes/lists/recipes-by-tag#dep0158)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 22](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-22)


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.buffer.replace-deprecated-slice"
  displayName="Replace deprecated `Buffer.slice()` with `Buffer.subarray()`"
  npmPackage="@openrewrite/recipes-nodejs"
/>
