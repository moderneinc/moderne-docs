---
title: "Remove `ReactDOM.render` callback argument"
sidebar_label: "Remove `ReactDOM.render` callback argument"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `ReactDOM.render` callback argument

**org.openrewrite.react.18.replace-render-callback**

_Removes the third callback argument from `ReactDOM.render(element, container, callback)` calls. Callbacks are not supported in React 18's `createRoot` API._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.18.replace-render-callback"
  displayName="Remove `ReactDOM.render` callback argument"
  npmPackage="@openrewrite/recipes-react"
/>
