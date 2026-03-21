---
sidebar_label: "Remove deprecated `net._setSimultaneousAccepts()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove deprecated `net._setSimultaneousAccepts()`

**org.openrewrite.node.migrate.net.remove-set-simultaneous-accepts**

_Remove calls to deprecated `net._setSimultaneousAccepts()` which was an undocumented internal function that is no longer necessary._

### Tags

* [DEP0121](/user-documentation/recipes/lists/recipes-by-tag#dep0121)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.net.remove-set-simultaneous-accepts"
  displayName="Remove deprecated `net._setSimultaneousAccepts()`"
  npmPackage="@openrewrite/recipes-nodejs"
/>
