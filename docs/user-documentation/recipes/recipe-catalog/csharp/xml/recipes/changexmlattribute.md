---
sidebar_label: "Change XML attribute value"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Change XML attribute value

**OpenRewrite.Xml.Recipes.ChangeXmlAttribute**

_Changes the value of attributes matching AttrName to NewValue._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | AttrName | The attribute name to match |  |
| `String` | NewValue | The new attribute value |  |


## Usage

<RunRecipe
  recipeName="OpenRewrite.Xml.Recipes.ChangeXmlAttribute"
  displayName="Change XML attribute value"
  nugetPackage="OpenRewrite.CodeQuality"
/>
