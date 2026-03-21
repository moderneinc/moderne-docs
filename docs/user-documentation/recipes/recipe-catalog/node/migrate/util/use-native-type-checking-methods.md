---
sidebar_label: "Replace deprecated `util.isX()` methods with native JavaScript"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace deprecated `util.isX()` methods with native JavaScript

**org.openrewrite.node.migrate.util.use-native-type-checking-methods**

_The `util` module's type-checking methods have been removed in Node 22._

### Tags

* [DEP0052](/user-documentation/recipes/lists/recipes-by-tag#dep0052)
* [DEP0053](/user-documentation/recipes/lists/recipes-by-tag#dep0053)
* [DEP0054](/user-documentation/recipes/lists/recipes-by-tag#dep0054)
* [DEP0044](/user-documentation/recipes/lists/recipes-by-tag#dep0044)
* [DEP0055](/user-documentation/recipes/lists/recipes-by-tag#dep0055)
* [DEP0050](/user-documentation/recipes/lists/recipes-by-tag#dep0050)
* [DEP0051](/user-documentation/recipes/lists/recipes-by-tag#dep0051)
* [DEP0049](/user-documentation/recipes/lists/recipes-by-tag#dep0049)
* [DEP0045](/user-documentation/recipes/lists/recipes-by-tag#dep0045)
* [DEP0056](/user-documentation/recipes/lists/recipes-by-tag#dep0056)
* [DEP0046](/user-documentation/recipes/lists/recipes-by-tag#dep0046)
* [DEP0057](/user-documentation/recipes/lists/recipes-by-tag#dep0057)
* [DEP0047](/user-documentation/recipes/lists/recipes-by-tag#dep0047)
* [DEP0058](/user-documentation/recipes/lists/recipes-by-tag#dep0058)
* [DEP0048](/user-documentation/recipes/lists/recipes-by-tag#dep0048)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 22](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-22)


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.util.use-native-type-checking-methods"
  displayName="Replace deprecated `util.isX()` methods with native JavaScript"
  npmPackage="@openrewrite/recipes-nodejs"
/>
