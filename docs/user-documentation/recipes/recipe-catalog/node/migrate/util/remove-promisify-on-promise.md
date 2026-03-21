---
sidebar_label: "Remove unnecessary `util.promisify()` on Promise-returning functions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove unnecessary `util.promisify()` on Promise-returning functions

**org.openrewrite.node.migrate.util.remove-promisify-on-promise**

_Removes `util.promisify()` calls on functions that already return a Promise. Since Node.js v17.0.0, calling promisify on a function that returns a Promise emits a runtime deprecation warning (DEP0174)._

### Tags

* [DEP0174](/user-documentation/recipes/lists/recipes-by-tag#dep0174)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 22](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-22)


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.util.remove-promisify-on-promise"
  displayName="Remove unnecessary `util.promisify()` on Promise-returning functions"
  npmPackage="@openrewrite/recipes-nodejs"
/>
