---
sidebar_label: "Replace deprecated `util.log()` with `console.log()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace deprecated `util.log()` with `console.log()`

**org.openrewrite.node.migrate.util.replace-util-log**

_Replace deprecated `util.log()` calls with `console.log()`. Note: `util.log()` included timestamps, but `console.log()` does not._

### Tags

* [DEP0059](/user-documentation/recipes/lists/recipes-by-tag#dep0059)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 24](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-24)


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.util.replace-util-log"
  displayName="Replace deprecated `util.log()` with `console.log()`"
  npmPackage="@openrewrite/recipes-nodejs"
/>
