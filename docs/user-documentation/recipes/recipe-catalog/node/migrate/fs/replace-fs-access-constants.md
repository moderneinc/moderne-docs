---
sidebar_label: "Replace deprecated `fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK` with `fs.constants.*`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace deprecated `fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK` with `fs.constants.*`

**org.openrewrite.node.migrate.fs.replace-fs-access-constants**

_Replace deprecated file access constants (`fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK`) with their equivalents from `fs.constants`. These constants were removed in Node.js v24+ and should be accessed through the constants namespace._

### Tags

* [DEP0176](/user-documentation/recipes/lists/recipes-by-tag#dep0176)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.fs.replace-fs-access-constants"
  displayName="Replace deprecated `fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK` with `fs.constants.*`"
  npmPackage="@openrewrite/recipes-nodejs"
/>
