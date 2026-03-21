---
sidebar_label: "Replace `typing.List` with `list`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `typing.List` with `list`

**org.openrewrite.python.migrate.ReplaceTypingListWithList**

_PEP 585 deprecated `typing.List` in Python 3.9. Replace with the built-in `list` type for generic annotations._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceTypingListWithList"
  displayName="Replace `typing.List` with `list`"
  pipPackage="openrewrite-migrate-python"
/>
