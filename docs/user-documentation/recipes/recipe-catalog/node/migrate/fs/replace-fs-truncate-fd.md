---
sidebar_label: "Replace `fs.truncate()` with file descriptor to `fs.ftruncate()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `fs.truncate()` with file descriptor to `fs.ftruncate()`

**org.openrewrite.node.migrate.fs.replace-fs-truncate-fd**

_Replace deprecated `fs.truncate(fd, ...)` and `fs.truncateSync(fd, ...)` calls with `fs.ftruncate(fd, ...)` and `fs.ftruncateSync(fd, ...)` when the first argument is a file descriptor (number)._

### Tags

* [DEP0081](/user-documentation/recipes/lists/recipes-by-tag#dep0081)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 24](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-24)


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.fs.replace-fs-truncate-fd"
  displayName="Replace `fs.truncate()` with file descriptor to `fs.ftruncate()`"
  npmPackage="@openrewrite/recipes-nodejs"
/>
