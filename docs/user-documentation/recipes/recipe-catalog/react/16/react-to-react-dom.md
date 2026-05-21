---
sidebar_label: "Split `React` DOM methods to `ReactDOM`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Split `React` DOM methods to `ReactDOM`

**org.openrewrite.react.16.react-to-react-dom**

_Moves DOM-specific methods like `React.render()` and `React.findDOMNode()` to `ReactDOM` from the `react-dom` package._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 16](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-16)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.16.react-to-react-dom"
  displayName="Split `React` DOM methods to `ReactDOM`"
  npmPackage="@openrewrite/recipes-react"
/>
