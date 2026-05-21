---
sidebar_label: "Replace `useContext` with `use`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `useContext` with `use`

**org.openrewrite.react.19.use-context-hook**

_In React 19, `useContext` is replaced by the `use` API. This recipe updates both direct and namespace imports._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-19)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.19.use-context-hook"
  displayName="Replace `useContext` with `use`"
  npmPackage="@openrewrite/recipes-react"
/>
