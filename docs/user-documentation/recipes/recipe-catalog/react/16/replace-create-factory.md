---
title: "Replace `React.createFactory` with `React.createElement`"
sidebar_label: "Replace `React.createFactory` with `React.createElement`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `React.createFactory` with `React.createElement`

**org.openrewrite.react.16.replace-create-factory**

_Replaces `React.createFactory(type)(props, children)` with `React.createElement(type, props, children)`. React.createFactory was deprecated in React 15.6 and removed in React 16._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 16](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-16)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.16.replace-create-factory"
  displayName="Replace `React.createFactory` with `React.createElement`"
  npmPackage="@openrewrite/recipes-react"
/>
