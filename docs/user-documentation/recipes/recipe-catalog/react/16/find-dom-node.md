---
title: "Replace `getDOMNode()` with `React.findDOMNode()`"
sidebar_label: "Replace `getDOMNode()` with `React.findDOMNode()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `getDOMNode()` with `React.findDOMNode()`

**org.openrewrite.react.16.find-dom-node**

_Migrates deprecated `getDOMNode()` calls to `React.findDOMNode()`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to React 16](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/react/migrate/upgrade-to-react-16)


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.16.find-dom-node"
  displayName="Replace `getDOMNode()` with `React.findDOMNode()`"
  npmPackage="@openrewrite/recipes-react"
/>
