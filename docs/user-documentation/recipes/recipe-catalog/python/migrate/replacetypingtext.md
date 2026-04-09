---
sidebar_label: "Replace `typing.Text` with `str`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `typing.Text` with `str`

**org.openrewrite.python.migrate.ReplaceTypingText**

_`typing.Text` is deprecated as of Python 3.11. It was an alias for `str` for Python 2/3 compatibility. Replace with `str`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceTypingText"
  displayName="Replace `typing.Text` with `str`"
  pipPackage="openrewrite-migrate-python"
/>
