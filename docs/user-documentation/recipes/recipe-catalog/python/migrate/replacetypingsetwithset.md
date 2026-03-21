---
sidebar_label: "Replace `typing.Set` with `set`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `typing.Set` with `set`

**org.openrewrite.python.migrate.ReplaceTypingSetWithSet**

_PEP 585 deprecated `typing.Set` in Python 3.9. Replace with the built-in `set` type for generic annotations._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceTypingSetWithSet"
  displayName="Replace `typing.Set` with `set`"
  pipPackage="openrewrite-migrate-python"
/>
