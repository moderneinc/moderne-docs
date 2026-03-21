---
sidebar_label: "Replace `OutgoingMessage._headers` and `._headerNames` with public methods"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `OutgoingMessage._headers` and `._headerNames` with public methods

**org.openrewrite.node.migrate.http.replace-outgoing-message-headers**

_Replace deprecated `OutgoingMessage.prototype._headers` with `getHeaders()`, `setHeader()`, `removeHeader()` and `OutgoingMessage.prototype._headerNames` with `getHeaderNames()` to address DEP0066 deprecation._

### Tags

* [DEP0066](/user-documentation/recipes/lists/recipes-by-tag#dep0066)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 24](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-24)


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.http.replace-outgoing-message-headers"
  displayName="Replace `OutgoingMessage._headers` and `._headerNames` with public methods"
  npmPackage="@openrewrite/recipes-nodejs"
/>
