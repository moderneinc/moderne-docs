---
title: "Find server-side rendering API usage"
sidebar_label: "Find server-side rendering API usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find server-side rendering API usage

**org.openrewrite.react.search.find-server-rendering-usage**

_Finds usage of React server-side rendering APIs from `react-dom/server` including `renderToString`, `renderToStaticMarkup`, `renderToNodeStream`, and `renderToStaticNodeStream` to help plan SSR migration._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.search.find-server-rendering-usage"
  displayName="Find server-side rendering API usage"
  npmPackage="@openrewrite/recipes-react"
/>
