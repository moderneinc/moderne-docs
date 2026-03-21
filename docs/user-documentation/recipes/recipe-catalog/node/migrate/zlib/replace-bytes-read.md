---
sidebar_label: "Replace deprecated `zlib.bytesRead` with `zlib.bytesWritten`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace deprecated `zlib.bytesRead` with `zlib.bytesWritten`

**org.openrewrite.node.migrate.zlib.replace-bytes-read**

_Replace deprecated `bytesRead` property on zlib streams with `bytesWritten`._

### Tags

* [DEP0108](/user-documentation/recipes/lists/recipes-by-tag#dep0108)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 24](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-24)


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.zlib.replace-bytes-read"
  displayName="Replace deprecated `zlib.bytesRead` with `zlib.bytesWritten`"
  npmPackage="@openrewrite/recipes-nodejs"
/>
