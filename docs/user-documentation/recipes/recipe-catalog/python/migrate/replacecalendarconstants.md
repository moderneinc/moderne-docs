---
sidebar_label: "Replace deprecated calendar constants with uppercase"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace deprecated calendar constants with uppercase

**org.openrewrite.python.migrate.ReplaceCalendarConstants**

_Replace deprecated mixed-case calendar constants like `calendar.January` with their uppercase equivalents like `calendar.JANUARY`. The mixed-case constants were deprecated in Python 3.12._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython312)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceCalendarConstants"
  displayName="Replace deprecated calendar constants with uppercase"
  pipPackage="openrewrite-migrate-python"
/>
