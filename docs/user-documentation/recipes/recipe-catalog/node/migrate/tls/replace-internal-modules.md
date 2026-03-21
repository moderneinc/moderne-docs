---
sidebar_label: "Replace deprecated `node:_tls_common` and `node:_tls_wrap` with `node:tls`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace deprecated `node:_tls_common` and `node:_tls_wrap` with `node:tls`

**org.openrewrite.node.migrate.tls.replace-internal-modules**

_Replace deprecated internal TLS module imports `require('node:_tls_common')` and `require('node:_tls_wrap')` with the public `node:tls` module._

### Tags

* [DEP0192](/user-documentation/recipes/lists/recipes-by-tag#dep0192)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.tls.replace-internal-modules"
  displayName="Replace deprecated `node:_tls_common` and `node:_tls_wrap` with `node:tls`"
  npmPackage="@openrewrite/recipes-nodejs"
/>
