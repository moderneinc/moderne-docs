---
sidebar_label: "Find `element.ref` access"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `element.ref` access

**org.openrewrite.react.19.find-element-ref**

_Finds direct access of `element.ref` on React elements. In React 19, `element.ref` is deprecated; use `element.props.ref` instead._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.19.find-element-ref"
  displayName="Find `element.ref` access"
  npmPackage="@openrewrite/recipes-react"
/>
