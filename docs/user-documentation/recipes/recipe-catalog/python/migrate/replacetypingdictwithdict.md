---
sidebar_label: "Replace `typing.Dict` with `dict`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `typing.Dict` with `dict`

**org.openrewrite.python.migrate.ReplaceTypingDictWithDict**

_PEP 585 deprecated `typing.Dict` in Python 3.9. Replace with the built-in `dict` type for generic annotations._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceTypingDictWithDict"
  displayName="Replace `typing.Dict` with `dict`"
  pipPackage="openrewrite-migrate-python"
/>
