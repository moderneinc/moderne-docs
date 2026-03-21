---
sidebar_label: "Replace deprecated `crypto.fips` with `crypto.getFips()` and `crypto.setFips()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace deprecated `crypto.fips` with `crypto.getFips()` and `crypto.setFips()`

**org.openrewrite.node.migrate.crypto.replace-crypto-fips**

_Replace deprecated `crypto.fips` property access with `crypto.getFips()` for reads and `crypto.setFips(value)` for writes._

### Tags

* [DEP0093](/user-documentation/recipes/lists/recipes-by-tag#dep0093)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 24](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-24)


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.crypto.replace-crypto-fips"
  displayName="Replace deprecated `crypto.fips` with `crypto.getFips()` and `crypto.setFips()`"
  npmPackage="@openrewrite/recipes-nodejs"
/>
