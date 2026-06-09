---
title: "Change React component prop value"
sidebar_label: "Change React component prop value"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Change React component prop value

**org.openrewrite.react.migration.change-component-prop-value**

_Changes literal prop values on React components. Useful for library upgrades where prop values were renamed (e.g., Material-UI, Ant Design)._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `null` | componentName | The name of the React component to target | `Button` |
| `null` | propName | The name of the prop whose value should be changed | `variant` |
| `null` | oldValue | *Optional*. The old value to match. If `regex` is `true`, interpreted as a regular expression pattern. Supports `/pattern/flags` format for specifying regex flags (e.g., `/pattern/i` for case-insensitive). If not provided, matches all values. | `outlined` |
| `null` | newValue | The new value to replace with. Can use `$1`, `$2`, etc. to reference capture groups if `regex` is `true`. | `outlined-primary` |
| `null` | regex | *Optional*. If `true`, `oldValue` is interpreted as a regex pattern. Capture groups can be referenced in newValue using `$1`, `$2`, etc. |  |


## Usage

<RunRecipe
  recipeName="org.openrewrite.react.migration.change-component-prop-value"
  displayName="Change React component prop value"
  npmPackage="@openrewrite/recipes-react"
/>
