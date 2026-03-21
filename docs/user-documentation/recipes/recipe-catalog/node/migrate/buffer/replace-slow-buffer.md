---
sidebar_label: "Replace deprecated `SlowBuffer` with `Buffer.allocUnsafeSlow()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace deprecated `SlowBuffer` with `Buffer.allocUnsafeSlow()`

**org.openrewrite.node.migrate.buffer.replace-slow-buffer**

_Replace deprecated `new SlowBuffer(size)` calls with `Buffer.allocUnsafeSlow(size)`. SlowBuffer was used to create un-pooled Buffer instances, but has been removed in favor of the explicit Buffer.allocUnsafeSlow() method._

### Tags

* [DEP0030](/user-documentation/recipes/lists/recipes-by-tag#dep0030)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.buffer.replace-slow-buffer"
  displayName="Replace deprecated `SlowBuffer` with `Buffer.allocUnsafeSlow()`"
  npmPackage="@openrewrite/recipes-nodejs"
/>
