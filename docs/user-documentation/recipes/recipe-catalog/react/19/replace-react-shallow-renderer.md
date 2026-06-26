---
title: "Replace `react-test-renderer/shallow` import"
sidebar_label: "Replace `react-test-renderer/shallow` import"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `react-test-renderer/shallow` import

**org.openrewrite.react.19.replace-react-shallow-renderer**

_Changes import of shallow renderer from `react-test-renderer/shallow` to the standalone `react-shallow-renderer` package, as it was removed from React 19._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-19)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.19.replace-react-shallow-renderer"
  displayName="Replace `react-test-renderer/shallow` import"
  npmPackage="@openrewrite/recipes-react"
/>
