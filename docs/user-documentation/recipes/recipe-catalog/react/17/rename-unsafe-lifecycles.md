---
title: "Add `UNSAFE_` prefix to deprecated lifecycle methods"
sidebar_label: "Add `UNSAFE_` prefix to deprecated lifecycle methods"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add `UNSAFE_` prefix to deprecated lifecycle methods

**org.openrewrite.react.17.rename-unsafe-lifecycles**

_Renames `componentWillMount`, `componentWillReceiveProps`, and `componentWillUpdate` to their UNSAFE_ prefixed versions._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 17](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-17)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.17.rename-unsafe-lifecycles"
  displayName="Add `UNSAFE_` prefix to deprecated lifecycle methods"
  npmPackage="@openrewrite/recipes-react"
/>
