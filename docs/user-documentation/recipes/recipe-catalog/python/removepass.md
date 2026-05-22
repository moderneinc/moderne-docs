---
sidebar_label: "Remove redundant pass statements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove redundant pass statements

**org.openrewrite.python.RemovePass**

_Remove redundant `pass` statements from Python code when there are other executable statements in the block._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.RemovePass"
  displayName="Remove redundant pass statements"
  pipPackage="openrewrite"
/>
