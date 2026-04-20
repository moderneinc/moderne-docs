---
sidebar_label: "Drop default-value slice boundaries"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Drop default-value slice boundaries

**org.openrewrite.python.cleanup.RemoveRedundantSliceIndex**

_Omit slice start/stop when they equal ``0`` and ``len(seq)`` respectively, e.g. ``data[0:len(data)]`` becomes ``data[:]``._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveRedundantSliceIndex"
  displayName="Drop default-value slice boundaries"
  pipPackage="openrewrite-static-analysis"
/>
