---
sidebar_label: "Add initial value to `useRef()` calls"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add initial value to `useRef()` calls

**org.openrewrite.react.19.use-ref-required-initial**

_Adds `undefined` as initial argument to `useRef()` calls with no arguments. Required by `@types/react` 19._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-19)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.19.use-ref-required-initial"
  displayName="Add initial value to `useRef()` calls"
  npmPackage="@openrewrite/recipes-react"
/>
