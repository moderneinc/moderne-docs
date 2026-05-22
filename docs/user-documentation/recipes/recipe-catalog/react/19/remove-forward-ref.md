---
sidebar_label: "Remove `React.forwardRef` wrapper"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `React.forwardRef` wrapper

**org.openrewrite.react.19.remove-forward-ref**

_`React.forwardRef` is deprecated for Function Components in React 19. This recipe removes the `forwardRef` wrapper and converts ref to a regular prop._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-19)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.19.remove-forward-ref"
  displayName="Remove `React.forwardRef` wrapper"
  npmPackage="@openrewrite/recipes-react"
/>
