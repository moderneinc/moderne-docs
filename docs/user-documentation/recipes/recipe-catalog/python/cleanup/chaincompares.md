---
sidebar_label: "Use chained comparison syntax"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use chained comparison syntax

**org.openrewrite.python.cleanup.ChainCompares**

```
Merge two relational tests that share a middle operand into a single chained comparison, e.g. ``0 < idx and idx < size`` becomes ``0 < idx < size``.
```


## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.ChainCompares"
  displayName="Use chained comparison syntax"
  pipPackage="openrewrite-static-analysis"
/>
