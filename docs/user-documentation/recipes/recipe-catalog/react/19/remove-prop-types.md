---
sidebar_label: "Remove `propTypes` assignments"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `propTypes` assignments

**org.openrewrite.react.19.remove-prop-types**

_Removes `Component.propTypes = {...}` assignments. PropTypes are silently ignored in React 19._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-19)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.19.remove-prop-types"
  displayName="Remove `propTypes` assignments"
  npmPackage="@openrewrite/recipes-react"
/>
