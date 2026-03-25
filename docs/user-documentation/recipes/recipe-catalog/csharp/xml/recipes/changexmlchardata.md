---
sidebar_label: "Change XML CharData text"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Change XML CharData text

**OpenRewrite.Xml.Recipes.ChangeXmlCharData**

_Replaces occurrences of OldText with NewText in XML CharData nodes._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | OldText | The text to search for |  |
| `String` | NewText | The replacement text |  |


## Usage

<RunRecipe
  recipeName="OpenRewrite.Xml.Recipes.ChangeXmlCharData"
  displayName="Change XML CharData text"
  nugetPackage="OpenRewrite.CodeQuality"
/>
