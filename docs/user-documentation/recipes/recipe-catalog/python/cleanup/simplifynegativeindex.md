---
sidebar_label: "Use negative index instead of `len()` offset"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use negative index instead of `len()` offset

**org.openrewrite.python.cleanup.SimplifyNegativeIndex**

_Rewrite ``seq[len(seq) - k]`` as ``seq[-k]``, using Python's native negative-indexing support._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.SimplifyNegativeIndex"
  displayName="Use negative index instead of `len()` offset"
  pipPackage="openrewrite-static-analysis"
/>
