---
sidebar_label: "Drop ``pass``-only ``if`` body by inverting the guard"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Drop ``pass``-only ``if`` body by inverting the guard

**org.openrewrite.python.cleanup.RemovePassBody**

_When an ``if`` body contains only ``pass`` and is followed by an ``else``, flip the condition and use the else body directly._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemovePassBody"
  displayName="Drop ``pass``-only ``if`` body by inverting the guard"
  pipPackage="openrewrite-static-analysis"
/>
