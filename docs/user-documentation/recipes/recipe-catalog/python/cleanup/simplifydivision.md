---
sidebar_label: "Convert `int(a / b)` to floor division"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Convert `int(a / b)` to floor division

**org.openrewrite.python.cleanup.SimplifyDivision**

_Replace ``int(a / b)`` with Python's floor-division operator ``a // b`` for a more concise expression._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.SimplifyDivision"
  displayName="Convert `int(a / b)` to floor division"
  pipPackage="openrewrite-static-analysis"
/>
