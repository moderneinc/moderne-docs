---
title: "Rename `unstable_handleError` to `componentDidCatch`"
sidebar_label: "Rename `unstable_handleError` to `componentDidCatch`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename `unstable_handleError` to `componentDidCatch`

**org.openrewrite.react.16.error-boundaries**

_Renames the unstable error boundary method to the official `componentDidCatch` API introduced in React 16._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 16](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-16)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.16.error-boundaries"
  displayName="Rename `unstable_handleError` to `componentDidCatch`"
  npmPackage="@openrewrite/recipes-react"
/>
