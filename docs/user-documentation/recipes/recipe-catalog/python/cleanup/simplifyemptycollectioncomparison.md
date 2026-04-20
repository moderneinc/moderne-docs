---
sidebar_label: "Use truthiness instead of empty-container equality"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use truthiness instead of empty-container equality

**org.openrewrite.python.cleanup.SimplifyEmptyCollectionComparison**

```
Convert ``== ""``/``== []``/``== {}``/``== ()`` into ``not var`` and the corresponding ``!=`` forms into ``var``, relying on Python's truthiness semantics for empty collections.
```


## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.SimplifyEmptyCollectionComparison"
  displayName="Use truthiness instead of empty-container equality"
  pipPackage="openrewrite-static-analysis"
/>
