---
sidebar_label: "Delete unnecessary ``pass`` in non-empty blocks"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Delete unnecessary ``pass`` in non-empty blocks

**org.openrewrite.python.cleanup.RemoveRedundantPass**

_Delete ``pass`` when the enclosing block already contains other statements; ``pass`` is only useful as a placeholder in empty blocks._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveRedundantPass"
  displayName="Delete unnecessary ``pass`` in non-empty blocks"
  pipPackage="openrewrite-static-analysis"
/>
