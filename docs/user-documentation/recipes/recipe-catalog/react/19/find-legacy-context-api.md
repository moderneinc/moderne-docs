---
title: "Find legacy Context API usage"
sidebar_label: "Find legacy Context API usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find legacy Context API usage

**org.openrewrite.react.19.find-legacy-context-api**

_Finds usage of the legacy Context API (`contextTypes`, `childContextTypes`, `getChildContext`) that was removed in React 19. These must be migrated to `React.createContext()`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.19.find-legacy-context-api"
  displayName="Find legacy Context API usage"
  npmPackage="@openrewrite/recipes-react"
/>
