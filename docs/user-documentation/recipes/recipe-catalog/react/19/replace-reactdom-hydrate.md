---
title: "Replace `ReactDOM.hydrate` with `hydrateRoot`"
sidebar_label: "Replace `ReactDOM.hydrate` with `hydrateRoot`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `ReactDOM.hydrate` with `hydrateRoot`

**org.openrewrite.react.19.replace-reactdom-hydrate**

_Migrates from the legacy `ReactDOM.hydrate()` API to the `hydrateRoot()` API from `react-dom/client`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-19)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.19.replace-reactdom-hydrate"
  displayName="Replace `ReactDOM.hydrate` with `hydrateRoot`"
  npmPackage="@openrewrite/recipes-react"
/>
