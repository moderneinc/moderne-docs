---
title: "Upgrade to React 18"
sidebar_label: "Upgrade to React 18"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to React 18

**org.openrewrite.react.migrate.upgrade-to-react-18**

_Migrate deprecated APIs for React 18 compatibility. Includes all React 16 and 17 migrations plus the createRoot API migration, removal of unstable_batchedUpdates, unmountComponentAtNode replacement, and render callback removal._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-19)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.migrate.upgrade-to-react-18"
  displayName="Upgrade to React 18"
  npmPackage="@openrewrite/recipes-react"
/>
