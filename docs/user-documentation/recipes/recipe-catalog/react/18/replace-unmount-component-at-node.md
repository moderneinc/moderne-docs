---
sidebar_label: "Replace `unmountComponentAtNode` with `createRoot().unmount()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `unmountComponentAtNode` with `createRoot().unmount()`

**org.openrewrite.react.18.replace-unmount-component-at-node**

_Replaces `ReactDOM.unmountComponentAtNode(container)` with `createRoot(container).unmount()` from `react-dom/client`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.18.replace-unmount-component-at-node"
  displayName="Replace `unmountComponentAtNode` with `createRoot().unmount()`"
  npmPackage="@openrewrite/recipes-react"
/>
