---
sidebar_label: "Remove usage of deprecated `process.features.tls_*` properties"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove usage of deprecated `process.features.tls_*` properties

**org.openrewrite.node.migrate.process.remove-usage-of-features-tls-underscore\_constants**

_Remove references to deprecated `process.features.tls_*` properties, replace with `process.features.tls`._

### Tags

* [DEP0189](/user-documentation/recipes/lists/recipes-by-tag#dep0189)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 22](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-22)


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.process.remove-usage-of-features-tls-underscore_constants"
  displayName="Remove usage of deprecated `process.features.tls_*` properties"
  npmPackage="@openrewrite/recipes-nodejs"
/>
