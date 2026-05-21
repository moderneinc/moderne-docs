---
sidebar_label: "Find React prop usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find React prop usage

**org.openrewrite.react.search.find-prop-usage**

_Finds all prop usages on React JSX elements, with optional filtering by component and prop name._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `null` | componentName | *Optional*. Optional component name to filter (e.g., 'Button'). If not specified, finds props on all components. | `Button` |
| `null` | propName | *Optional*. Optional prop name to filter (e.g., 'onClick'). If not specified, finds all props. | `onClick` |


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.search.find-prop-usage"
  displayName="Find React prop usage"
  npmPackage="@openrewrite/recipes-react"
/>
