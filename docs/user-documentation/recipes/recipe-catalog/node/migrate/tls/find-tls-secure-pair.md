---
sidebar_label: "Find deprecated `tls.SecurePair` and `tls.createSecurePair()` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `tls.SecurePair` and `tls.createSecurePair()` usage

**org.openrewrite.node.migrate.tls.find-tls-secure-pair**

_`tls.SecurePair` (DEP0043) and `tls.createSecurePair()` (DEP0064) were deprecated and removed in Node.js 24. Use `tls.TLSSocket` instead._

### Tags

* [DEP0064](/user-documentation/recipes/lists/recipes-by-tag#dep0064)
* [DEP0043](/user-documentation/recipes/lists/recipes-by-tag#dep0043)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 24](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-24)


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.tls.find-tls-secure-pair"
  displayName="Find deprecated `tls.SecurePair` and `tls.createSecurePair()` usage"
  npmPackage="@openrewrite/recipes-nodejs"
/>
