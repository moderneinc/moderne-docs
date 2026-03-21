---
sidebar_label: "Coerce `process.exit()` and `process.exitCode` to integer"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Coerce `process.exit()` and `process.exitCode` to integer

**org.openrewrite.node.migrate.process.coerce-process-exit-code**

_Wraps non-integer values passed to `process.exit()` or assigned to `process.exitCode` with `Math.trunc()` to avoid the DEP0164 deprecation warning about implicit coercion to integer._

### Tags

* [DEP0164](/user-documentation/recipes/lists/recipes-by-tag#dep0164)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 22](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-22)


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.process.coerce-process-exit-code"
  displayName="Coerce `process.exit()` and `process.exitCode` to integer"
  npmPackage="@openrewrite/recipes-nodejs"
/>
