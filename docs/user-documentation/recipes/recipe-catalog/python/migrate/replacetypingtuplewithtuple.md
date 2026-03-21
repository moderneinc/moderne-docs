---
sidebar_label: "Replace `typing.Tuple` with `tuple`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `typing.Tuple` with `tuple`

**org.openrewrite.python.migrate.ReplaceTypingTupleWithTuple**

_PEP 585 deprecated `typing.Tuple` in Python 3.9. Replace with the built-in `tuple` type for generic annotations._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceTypingTupleWithTuple"
  displayName="Replace `typing.Tuple` with `tuple`"
  pipPackage="openrewrite-migrate-python"
/>
