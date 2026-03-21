---
sidebar_label: "Replace `dirent.path` with `dirent.parentPath`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `dirent.path` with `dirent.parentPath`

**org.openrewrite.node.migrate.fs.replace-dirent-path**

_Replaces deprecated `dirent.path` property access with `dirent.parentPath` on `fs.Dirent` instances to address DEP0178 deprecation._

### Tags

* [DEP0178](/user-documentation/recipes/lists/recipes-by-tag#dep0178)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 24](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-24)


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.fs.replace-dirent-path"
  displayName="Replace `dirent.path` with `dirent.parentPath`"
  npmPackage="@openrewrite/recipes-nodejs"
/>
