---
sidebar_label: "Find React component"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find React component

**org.openrewrite.react.search.find-react-component**

_Finds all usages of a specific React component including imports, JSX elements, and exports._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `null` | componentName | The name of the React component to find (e.g., 'Button', 'TextField') | `Button` |
| `null` | importPath | *Optional*. Optional module path to narrow the search (e.g., '@mui/material'). Supports glob patterns. | `@mui/material` |


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.search.find-react-component"
  displayName="Find React component"
  npmPackage="@openrewrite/recipes-react"
/>
