---
sidebar_label: "Remove redundant dependency overrides"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove redundant dependency overrides

**org.openrewrite.node.security.remove-redundant-overrides**

_Removes overrides/resolutions from package.json that are redundant because the dependency tree already resolves to the overridden version or higher._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `null` | dryRun | *Optional*. If true, only report which overrides are redundant without removing them. | `true` |


## Usage

<RunRecipe
  recipeName="org.openrewrite.node.security.remove-redundant-overrides"
  displayName="Remove redundant dependency overrides"
  npmPackage="@openrewrite/recipes-nodejs"
/>
