---
sidebar_label: "Replace deprecated `node:_stream_*` with `node:stream`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace deprecated `node:_stream_*` with `node:stream`

**org.openrewrite.node.migrate.stream.replace-internal-modules**

_Replace deprecated internal stream module imports like `require('node:_stream_readable')` with the public `node:stream` module._

### Tags

* [DEP0193](/user-documentation/recipes/lists/recipes-by-tag#dep0193)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.stream.replace-internal-modules"
  displayName="Replace deprecated `node:_stream_*` with `node:stream`"
  npmPackage="@openrewrite/recipes-nodejs"
/>
