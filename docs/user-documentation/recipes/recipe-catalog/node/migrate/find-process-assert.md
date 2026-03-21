---
sidebar_label: "Find deprecated `process.assert()` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `process.assert()` usage

**org.openrewrite.node.migrate.find-process-assert**

_`process.assert()` was deprecated in Node.js 10 (DEP0100) and removed in Node.js 23. Use the `assert` module instead._

### Tags

* [DEP0100](/user-documentation/recipes/lists/recipes-by-tag#dep0100)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 24](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-24)


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.find-process-assert"
  displayName="Find deprecated `process.assert()` usage"
  npmPackage="@openrewrite/recipes-nodejs"
/>
