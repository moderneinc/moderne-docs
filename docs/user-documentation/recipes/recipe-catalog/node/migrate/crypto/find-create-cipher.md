---
sidebar_label: "Find deprecated `crypto.createCipher()` and `crypto.createDecipher()` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `crypto.createCipher()` and `crypto.createDecipher()` usage

**org.openrewrite.node.migrate.crypto.find-create-cipher**

_`crypto.createCipher()` and `crypto.createDecipher()` were deprecated in Node.js 10 (DEP0106) and removed in Node.js 22. Use `crypto.createCipheriv()` and `crypto.createDecipheriv()` instead._

### Tags

* [DEP0106](/user-documentation/recipes/lists/recipes-by-tag#dep0106)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 22](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-22)


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.crypto.find-create-cipher"
  displayName="Find deprecated `crypto.createCipher()` and `crypto.createDecipher()` usage"
  npmPackage="@openrewrite/recipes-nodejs"
/>
