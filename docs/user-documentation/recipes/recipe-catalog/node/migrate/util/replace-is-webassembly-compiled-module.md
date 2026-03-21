---
sidebar_label: "Replace deprecated `util.types.isWebAssemblyCompiledModule()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace deprecated `util.types.isWebAssemblyCompiledModule()`

**org.openrewrite.node.migrate.util.replace-is-webassembly-compiled-module**

_Replace `util.types.isWebAssemblyCompiledModule(value)` with `value instanceof WebAssembly.Module`._

### Tags

* [DEP0177](/user-documentation/recipes/lists/recipes-by-tag#dep0177)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 22](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-22)


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.util.replace-is-webassembly-compiled-module"
  displayName="Replace deprecated `util.types.isWebAssemblyCompiledModule()`"
  npmPackage="@openrewrite/recipes-nodejs"
/>
