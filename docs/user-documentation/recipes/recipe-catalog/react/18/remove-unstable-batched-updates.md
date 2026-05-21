---
sidebar_label: "Remove `unstable_batchedUpdates`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `unstable_batchedUpdates`

**org.openrewrite.react.18.remove-unstable-batched-updates**

_Removes `unstable_batchedUpdates` wrappers from `react-dom`. React 18 automatically batches all state updates, making this function unnecessary._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.18.remove-unstable-batched-updates"
  displayName="Remove `unstable_batchedUpdates`"
  npmPackage="@openrewrite/recipes-react"
/>
