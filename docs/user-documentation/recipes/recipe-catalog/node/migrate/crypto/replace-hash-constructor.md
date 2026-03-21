---
sidebar_label: "Replace deprecated `new crypto.Hash()` and `new crypto.Hmac()` with factory methods"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace deprecated `new crypto.Hash()` and `new crypto.Hmac()` with factory methods

**org.openrewrite.node.migrate.crypto.replace-hash-constructor**

_Replace deprecated `new crypto.Hash(algorithm)` constructor calls with `crypto.createHash(algorithm)` and `new crypto.Hmac(algorithm, key)` with `crypto.createHmac(algorithm, key)` factory methods._

### Tags

* [DEP0179](/user-documentation/recipes/lists/recipes-by-tag#dep0179)
* [DEP0181](/user-documentation/recipes/lists/recipes-by-tag#dep0181)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 22](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-22)


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.crypto.replace-hash-constructor"
  displayName="Replace deprecated `new crypto.Hash()` and `new crypto.Hmac()` with factory methods"
  npmPackage="@openrewrite/recipes-nodejs"
/>
