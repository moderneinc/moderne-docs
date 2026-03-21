---
sidebar_label: "Replace deprecated `fs.Stats` constructor with object literal"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace deprecated `fs.Stats` constructor with object literal

**org.openrewrite.node.migrate.fs.replace-stats-constructor**

_Replace deprecated `new fs.Stats()` constructor calls with an object literal containing Stats properties initialized to undefined._

### Tags

* [DEP0180](/user-documentation/recipes/lists/recipes-by-tag#dep0180)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.fs.replace-stats-constructor"
  displayName="Replace deprecated `fs.Stats` constructor with object literal"
  npmPackage="@openrewrite/recipes-nodejs"
/>
