---
title: "Find `Context.Consumer` usage"
sidebar_label: "Find `Context.Consumer` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `Context.Consumer` usage

**org.openrewrite.react.19.find-context-consumer**

_Finds usage of the deprecated `<Context.Consumer>` pattern. In React 19, use the `use()` hook instead._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.19.find-context-consumer"
  displayName="Find `Context.Consumer` usage"
  npmPackage="@openrewrite/recipes-react"
/>
