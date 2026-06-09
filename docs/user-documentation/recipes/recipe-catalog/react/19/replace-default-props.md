---
title: "Replace `defaultProps` with default parameter values"
sidebar_label: "Replace `defaultProps` with default parameter values"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `defaultProps` with default parameter values

**org.openrewrite.react.19.replace-default-props**

_Converts `Component.defaultProps = {...}` to ES6 default parameter values in function components. `defaultProps` for function components is deprecated in React 19._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-19)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.19.replace-default-props"
  displayName="Replace `defaultProps` with default parameter values"
  npmPackage="@openrewrite/recipes-react"
/>
