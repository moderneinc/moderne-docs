---
title: "Replace `ReactDOM.render` with `createRoot`"
sidebar_label: "Replace `ReactDOM.render` with `createRoot`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `ReactDOM.render` with `createRoot`

**org.openrewrite.react.18.replace-reactdom-render**

_Migrates from the legacy `ReactDOM.render()` API to the `createRoot()` API from `react-dom/client` introduced in React 18._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.18.replace-reactdom-render"
  displayName="Replace `ReactDOM.render` with `createRoot`"
  npmPackage="@openrewrite/recipes-react"
/>
