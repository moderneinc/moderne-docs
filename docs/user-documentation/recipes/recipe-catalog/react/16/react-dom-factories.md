---
sidebar_label: "Replace `React.DOM` factories with `createElement`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `React.DOM` factories with `createElement`

**org.openrewrite.react.16.react-dom-factories**

_Converts deprecated `React.DOM.xxx()` factory calls to `React.createElement('xxx', ...)`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 16](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-16)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.16.react-dom-factories"
  displayName="Replace `React.DOM` factories with `createElement`"
  npmPackage="@openrewrite/recipes-react"
/>
