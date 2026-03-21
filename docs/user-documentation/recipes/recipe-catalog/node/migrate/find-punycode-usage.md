---
sidebar_label: "Find deprecated `punycode` module usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `punycode` module usage

**org.openrewrite.node.migrate.find-punycode-usage**

_The `punycode` built-in module was deprecated in Node.js 21 (DEP0040). Use the userland `punycode` package from npm or `url.domainToASCII`/`url.domainToUnicode` instead._

### Tags

* [DEP0040](/user-documentation/recipes/lists/recipes-by-tag#dep0040)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 22](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-22)


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.migrate.find-punycode-usage"
  displayName="Find deprecated `punycode` module usage"
  npmPackage="@openrewrite/recipes-nodejs"
/>
