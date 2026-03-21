---
sidebar_label: "Replace deprecated `util._extend()` with `Object.assign()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace deprecated `util._extend()` with `Object.assign()`

**org.openrewrite.node.migrate.util.replace-util-extend**

_Replace deprecated `util._extend(target, source)` calls with `Object.assign(target, source)` which preserves the mutation behavior._

### Tags

* [DEP0060](/user-documentation/recipes/lists/recipes-by-tag#dep0060)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 22](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-22)


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.util.replace-util-extend"
  displayName="Replace deprecated `util._extend()` with `Object.assign()`"
  npmPackage="@openrewrite/recipes-nodejs"
/>
